# Modul 08: Output Sharpening, Color Spaces & Export

Modul ini mendefinisikan langkah pemolesan akhir gambar (*final polish*), penajaman khusus media (*output sharpening*), manajemen profil warna ICC, dan konversi aman dari 16-bit ke 8-bit tanpa artifak *banding*.

---

## 1. Penajaman Frekuensi Tinggi Non-Destruktif (High Pass Sharpening)

Penajaman akhir (*output sharpening*) selalu dilakukan pada tahap paling terakhir setelah seluruh proses retouching dan color grading selesai:

1. Buat layer stempel gabungan di posisi paling atas:
   - Pintasan: `Ctrl + Alt + Shift + E` (Windows) / `Cmd + Opt + Shift + E` (Mac).
2. Ubah layer menjadi **Smart Object**.
3. Buka menu `Filter -> Other -> High Pass`.
   - **Untuk Tampilan Web (1080p - 4K)**: Gunakan radius $0.8 - 1.5$ piksel.
   - **Untuk Cetak Offset / Fine Art Print (300 DPI)**: Gunakan radius $2.0 - 3.5$ piksel.
4. Ubah Blend Mode layer menjadi **Soft Light** (penajaman halus) atau **Overlay** (penajaman kontras tegas).
5. Atur Opasitas layer antara $40\% - 75\%$ sesuai kebutuhan.

---

## 2. Manajemen Profil Warna & Konversi Ekspor

| Tujuan Penggunaan | Profil Warna yang Wajib Disematkan | Format Berkas | Keterangan |
|---|---|---|---|
| **Web, Media Sosial, E-Commerce** | **sRGB IEC61966-2.1** | JPEG / WebP | Standar universal seluruh browser dan layar ponsel |
| **Pencetakan Majalah / Buku (Offset)** | **CMYK (ISO Coated v2 / FOGRA39)** | TIFF / PDF | Dikonversi dengan rendering intent *Relative Colorimetric* |
| **Galeri Cetak Fine Art / Master File** | **Adobe RGB (1998)** / ProPhoto | TIFF 16-bit | Gamut warna terluas untuk printer foto 12-tinta |

---

## 3. Dithering Saat Konversi 16-Bit ke 8-Bit

- Saat menurunkan dokumen dari mode 16-bit ke 8-bit untuk ekspor JPEG web, selalu pastikan opsi **Dither** aktif di menu konversi Photoshop (`Image -> Mode -> 8 Bits/Channel`).
- Dithering menambahkan noise mikroskopis yang tidak terlihat oleh mata telanjang untuk memecah garis-garis patahan gradasi halus (*banding*) pada area langit atau latar belakang studio.
