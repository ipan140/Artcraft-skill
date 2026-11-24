# Modul 08: Standar Ekspor PDF/X & Validasi Output (PDF/X Standards & Pre-flight)

Modul ini menetapkan protokol ekspor berkas siap cetak (*Print-Ready PDF*): pemilihan standar ISO PDF/X-1a vs PDF/X-4, penanaman font (*font embedding*), resolusi gambar minimum 300 DPI, dan penanganan transparansi (*transparency flattening*).

---

## 1. Perbandingan Standar Cetak PDF/X (ISO 15930)

| Fitur / Parameter | PDF/X-1a:2001 (Klasik / Paling Aman) | PDF/X-4:2010 (Modern / Standar Emas) |
| :--- | :--- | :--- |
| **Ruang Warna** | Hanya CMYK murni dan Spot Color (RGB dilarang keras). | Mendukung CMYK, Spot Color, dan RGB berbasis profil ICC. |
| **Transparansi** | Transparansi **wajib diratakan** (*flattened*) saat ekspor. | Mendukung transparansi live (*native drop shadows, blend modes*). |
| **Versi PDF Dasar** | PDF 1.3 | PDF 1.6 |
| **Kelebihan** | Kompatibel 100% dengan mesin percetakan offset generasi lama. | Gradasi warna dan bayangan lebih halus tanpa artefak garis kotak jahitan. |
| **Rekomendasi Penggunaan**| Majalah komersial, koran, buku standar. | Publikasi mewah, majalah seni, poster dengan banyak efek blending. |

---

## 2. Parameter Pemeriksaan Pra-Penerbangan (Preflight Checklist)

Sebelum berkas PDF dikirim ke percetakan, pastikan seluruh parameter berikut terpenuhi:

1. **Resolusi Raster Gambar (Effective Image Resolution)**:
   - Gambar warna / grayscale: Minimal `300 DPI` pada skala cetak 100%.
   - Gambar garis hitam-putih murni (*1-bit bitmap / line art*): Minimal `1200 DPI` untuk mencegah tepian tangga (*aliasing/pixelation*).
2. **Font Wajib Tertanam Penuh (Embedded Fonts)**:
   - Seluruh font harus memiliki status `Embedded Subset` atau dikonversi menjadi kurva vektor (*create outlines*), untuk mencegah perubahan bentuk font jika komputer mesin cetak tidak memiliki lisensi font tersebut.
3. **Penyertaan Crop Marks & Bleed**:
   - Sertakan tanda potong (*Crop Marks*) dengan offset `3 mm` dari TrimBox agar garis tanda potong tidak masuk ke dalam area potong gambar.
   - Periksa bahwa ukuran lembar fisik MediaBox lebih besar minimal `15 mm` di sekeliling TrimBox untuk menampung tanda potong dan area bleed.
