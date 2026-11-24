# Modul 02: Penyadapan Alur Data & Reverse Network API (API Network Reverse)

Modul ini menetapkan tata cara menganalisa traffic jaringan, merekonstruksi kontrak payload API (JSON Schemas), memetakan parameter query, dan menyadap alur sinkronisasi data real-time.

---

## 1. Analisa Panggilan Jaringan (Network Inspection)

Saat menganalisa log jaringan (Network HAR / cURL / Fetch requests), kategorisasikan setiap permintaan:

1. **Query Data (Read Operation - GET)**:
   - Tangkap URL endpoint: misal `/api/v1/boards/:id/cards`.
   - Filter parameter query: `?page=1&limit=20&sort=createdAt:desc&filter[status]=active`.
2. **Mutasi Data (Create / Update / Delete - POST, PUT, PATCH, DELETE)**:
   - Identifikasi payload JSON di body request.
   - Pahami strategi pembaruan: `PUT` (mengganti objek seutuhnya) vs `PATCH` (mengubah sebagian atribut saja).
3. **Penyaluran Real-time (WebSocket / SSE)**:
   - Identifikasi event name: `card:created`, `cursor:moved`, `status:updated`.
   - Format payload frame WebSocket.

---

## 2. Ekstraksi Kontrak Tipe Data TypeScript (Type Contract Inference)

AI wajib menyusun kontrak tipe data resmi berdasarkan sampel data JSON yang didapat:

```typescript
// Hasil Ekstraksi Schema dari Respon API Asli
export interface UserAuthor {
  id: string;
  name: string;
  avatarUrl: string;
  role: "admin" | "member" | "viewer";
}

export interface KanbanCardItem {
  id: string;
  boardId: string;
  columnId: string;
  title: string;
  description?: string;
  orderIndex: number;
  tags: string[];
  assignees: UserAuthor[];
  dueDate?: string; // ISO 8601 string
  createdAt: string;
  updatedAt: string;
}

export interface BoardColumn {
  id: string;
  title: string;
  colorHex?: string;
  cardIds: string[];
}
```

---

## 3. Penyadapan Header & Skema Autentikasi
- **Bearer Token**: `Authorization: Bearer eyJhbGciOiJIUzI1Ni...`
- **Custom Headers**: Ekstrak header khusus yang digunakan aplikasi, seperti `X-Workspace-Id`, `X-Client-Version`, atau `Idempotency-Key` untuk transaksi finansial.
- **Handling Refresh Token Flow**: Tangkap jika aplikasi melakukan silent token refresh saat status kode `401 Unauthorized` terjadi.
