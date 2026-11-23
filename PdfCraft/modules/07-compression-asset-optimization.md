# Modul 07: Compression & Asset Optimization

Modul ini menetapkan strategi optimasi ukuran file (*file size reduction*), kompresi stream cerdas, pereduksian resolusi gambar (*downsampling*), dan linearisasi PDF (*Fast Web View*).

---

## 1. Kompresi Stream Objek (Object & Cross-Reference Streams)

- Dalam PDF 1.5 ke atas, gunakan **Cross-Reference Streams (`/XRef`)** dan **Object Streams (`/ObjStm`)** yang dikompresi menggunakan algoritma `FlateDecode` (Zlib). Ini mengompresi struktur internal kamus PDF hingga 40-60%.
- Hapus stream font duplikat dengan menautkan glyph yang identik ke satu kamus font bersama.

---

## 2. Optimasi Gambar Bitmap (Image Downsampling & Encoding)

| Target Distribusi | Resolusi Maksimum (DPI) | Format Encoding Gambar | Kualitas Kompresi |
|---|---|---|---|
| **Web / Email / Mobile** | 96 - 150 DPI | JPEG / DCTDecode | Kualitas 70 - 80% |
| **E-Book / Arsip PDF/A** | 150 - 200 DPI | JPEG2000 / JPXDecode | Lossless atau Visual Lossless |
| **High-End Offset Print** | 300 - 600 DPI | FlateDecode (Lossless) atau Zip | 100% tanpa artifak kompresi |
| **Dokumen Scan Teks (1-bit)** | 300 DPI | **JBIG2Decode** | Kompresi terbaik untuk dokumen teks monokrom |

---

## 3. Fast Web View (Linearisasi PDF)

Dokumen multi-halaman besar yang disajikan di browser web wajib melalui proses **Linearization** (Fast Web View):

- Struktur internal PDF disusun ulang sehingga Halaman 1, font, dan elemen visual pembuka diletakkan di byte paling awal dari file.
- Browser dapat langsung merender halaman pertama secara instan melalui HTTP Range Requests tanpa harus menunggu seluruh berkas PDF (misal 50 MB) selesai diunduh.
