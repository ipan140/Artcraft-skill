# Modul 07: Emulasi & Mock Data Mandiri (Mocking & Data Emulation)

Modul ini menetapkan pembuatan dataset tiruan realistis, emulasi jeda jaringan (*latency simulation*), dan penanganan skenario galat (*error reproduction*) agar hasil rekonstruksi dapat langsung berjalan tanpa backend server.

---

## 1. Prinsip Pembuatan Mock Data Realistis

Mock data yang disajikan oleh AI tidak boleh sekadar berupa `title: "test 1"`, `description: "lorem ipsum"`. Gunakan konten yang kontekstual dan realistis:

- **Nama Entitas Nyata**: Gunakan istilah industri (misal: "Refactor Auth Middleware", "Optimize PostgreSQL Query", "Redesign Landing Page").
- **Kondisi Batas (Edge Cases)**:
  - Sertakan kartu dengan judul sangat panjang (menguji `truncate` / wrapping teks).
  - Sertakan kartu dengan daftar tag kosong (`tags: []`) dan kartu dengan banyak tag.
  - Sertakan avatar dengan inisial fallback jika URL gambar rusak.

---

## 2. Emulasi Jaringan & Latensi Asinkron

Untuk menguji loading state dan interaksi pengguna yang sebenarnya, sediakan pembungkus delay acak:

```typescript
// src/mocks/mockClient.ts
export const simulateNetworkDelay = async <T>(data: T, minMs = 150, maxMs = 400): Promise<T> => {
  const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  await new Promise((resolve) => setTimeout(resolve, delay));
  return data;
};

// Simulasi Galat Jaringan Berselang (Chaos Testing)
export const simulateFlakyRequest = async <T>(data: T, failureRatePercent = 0): Promise<T> => {
  await simulateNetworkDelay(null, 100, 200);
  if (Math.random() * 100 < failureRatePercent) {
    throw new Error("503 Service Unavailable: Kegagalan jaringan sementara.");
  }
  return data;
};
```

---

## 3. Integrasi Mock Service Worker (MSW)

Jika pengguna memilih `api_layer: "msw"` pada `config.md`, sediakan konfigurasi handler resmi:

```typescript
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/v1/cards', () => {
    return HttpResponse.json(mockCards);
  }),
  http.post('/api/v1/cards', async ({ request }) => {
    const newCard = await request.json();
    return HttpResponse.json(newCard, { status: 201 });
  }),
];
```
