# Modul 02: Arsitektur & Struktur Komponen

Modul ini mendefinisikan standar arsitektur kode frontend, pemisahan tanggung jawab (separation of concerns), dan pengorganisasian berkas.

---

## 1. Prinsip Pemisahan Tanggung Jawab

Setiap komponen kompleks harus memisahkan 3 lapisan utama:
1. **Presentational (UI Component)**: Hanya bertanggung jawab menampilkan elemen visual dan menerima props.
2. **Logic & State (Custom Hooks)**: Mengisolasi state, side-effects, validasi, dan komunikasi API ke dalam custom hook (`useXxx`).
3. **Data Contract (Types & Schemas)**: Definisi tipe data TypeScript (`interface`, `type`) dan skema validasi (Zod) diletakkan di file terpisah atau di bagian atas modul.

---

## 2. Struktur Folder Standar

```plaintext
src/
├── components/
│   ├── ui/                       # Komponen atomik / primitif (Button, Input, Badge)
│   │   ├── button.tsx
│   │   └── input.tsx
│   └── shared/                   # Komponen gabungan yang dipakai berulang
│       ├── navbar/
│       └── modal/
├── features/                     # Fitur domain-driven
│   └── auth/
│       ├── components/           # Komponen spesifik fitur
│       ├── hooks/                # Logika bisnis fitur
│       ├── services/             # Panggilan API
│       └── types/                # Tipe data khusus fitur
├── hooks/                        # Global reusable hooks
├── lib/                          # Konfigurasi utilitas (clsx, twMerge, apiClient)
└── types/                        # Global type definitions
```

---

## 3. Pola Desain Komponen (Component Patterns)

### 3.1 Compound Components Pattern
Gunakan pola compound component untuk UI yang memiliki hierarki fleksibel (misal: Dialog, Card, Dropdown):

```tsx
// Contoh Penggunaan Ideal:
<Card>
  <Card.Header>
    <Card.Title>Statistik Proyek</Card.Title>
    <Card.Description>Ringkasan performa 30 hari terakhir</Card.Description>
  </Card.Header>
  <Card.Content>
    <ChartData />
  </Card.Content>
  <Card.Footer>
    <Button variant="outline">Unduh Laporan</Button>
  </Card.Footer>
</Card>
```

### 3.2 Polymorphic Components (asChild / Polymorphism)
- Komponen seperti `Button` harus mendukung prop `asChild` (menggunakan `@radix-ui/react-slot` jika didukung) agar dapat berfungsi sebagai tag `<a>` (link) atau elemen custom lainnya tanpa merusak styling.

---

## 4. Manajemen State

- **Local UI State**: Gunakan `useState` dan `useReducer` hanya untuk state lokal (misal: open/close modal, active tab, hover).
- **Server Cache State**: Gunakan library seperti `@tanstack/react-query` atau `SWR` untuk data dari API; hindari menyimpan data API mentah di Redux/Zustand.
- **URL as State**: Simpan filter, paginasi, tab aktif, dan query pencarian di URL search params agar mudah di-bookmark dan dibagikan.
