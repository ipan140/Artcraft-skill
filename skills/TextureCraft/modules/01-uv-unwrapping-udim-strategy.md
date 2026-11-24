# Modul 01: UV Unwrapping, Padding & UDIM Strategy

Modul ini menetapkan protokol pembentangan koordinat UV (*UV Unwrapping*), pemeliharaan kerapatan teksel (*Texel Density*), pencegahan kebocoran jahitan (*UV Seam Padding/Dilation*), dan tata kelola ubin multi-tile UDIM.

---

## 1. Aturan Emas Pembentangan UV (UV Layout Rules)

1. **Konsistensi Kerapatan Teksel (Texel Density)**:
   - Seluruh pulau UV (*UV Islands*) pada aset yang sama wajib memiliki skala yang seragam (misal: $20.48\text{ px/cm}$) agar resolusi visual detail tekstur tidak terlihat tajam di satu sisi dan buram di sisi lain.
   - Pengecualian hanya diizinkan untuk area yang tidak pernah terlihat oleh pemain (seperti bagian bawah sepatu atau rangka dalam tertutup) yang boleh diperkecil sebesar $50\%$.
2. **Penempatan Garis Jahitan (UV Seams)**:
   - Sembunyikan garis jahitan UV pada ceruk alami, sudut tajam geometris, batas sambungan panel, atau sisi belakang objek yang jarang terlihat kamera.
3. **Pelurusan Sudut (Straightening UV Shells)**:
   - Luruskan pulau UV yang berbentuk persegi panjang (seperti tali sabuk, pipa silindris, pelat baja) ke sumbu horizontal/vertikal grid UV untuk mencegah artefak tangga (*aliasing stair-stepping*) saat rendering resolusi rendah.

---

## 2. Jarak Aman Antarpulau (UV Padding & Texture Dilation)

Tabel jarak minimum antarpulau UV untuk mencegah artefak warna saling rembes saat kompresi mipmap GPU:

| Resolusi Tekstur | Padding Minimum Antarpulau | Dilation Bleed Saat Ekspor |
|---|---|---|
| **1024 x 1024 (1K)** | $4\text{ piksel}$ | $8\text{ piksel}$ |
| **2048 x 2048 (2K)** | $8\text{ piksel}$ | $16\text{ piksel}$ |
| **4096 x 4096 (4K)** | $16\text{ piksel}$ | $32\text{ piksel}$ |

---

## 3. Strategi Tata Letak Multi-Tile UDIM

- **Standar Penomoran UDIM**:
  - Kolom pertama: `1001` (koordinat UV $U: [0, 1], V: [0, 1]$).
  - Kolom kedua: `1002` (koordinat UV $U: [1, 2], V: [0, 1]$).
  - Kolom kesebelas melompat ke baris atas: `1011` ($U: [0, 1], V: [1, 2]$).
- **Pengelompokan Material per UDIM**:
  - Jangan mencampur bagian logam mengkilap dengan pakaian kain pada ubin UDIM yang sama jika menggunakan alur kerja multi-material shader.
