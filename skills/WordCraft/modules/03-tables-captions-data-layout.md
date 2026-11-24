# Modul 03: Data Tables, Formatting & Caption Standards

Modul ini mendefinisikan tata cara pembuatan tabel data profesional, pengaturan bayangan baris selang-seling (*zebra striping*), perataan angka numerik, pengulangan baris judul tabel (*repeat header rows*), dan penomoran keterangan (*captions*).

---

## 1. Aturan Penempatan & Format Keterangan (Captions)

- **Keterangan Tabel (Table Caption)**:
  - Wajib diletakkan **DI ATAS TABEL**.
  - Format: *Tabel [Nomor Bab].[Nomor Urut]: [Judul Deskriptif]*
  - Contoh: `Tabel 2.3: Perbandingan Estimasi Biaya Lisensi Tiga Vendor Cloud`
- **Keterangan Gambar / Bagan (Figure Caption)**:
  - Wajib diletakkan **DI BAWAH GAMBAR**.
  - Format: *Gambar [Nomor Bab].[Nomor Urut]: [Keterangan Diagram]*
  - Contoh: `Gambar 1.2: Diagram Alur Arsitektur Sistem Microservices Multi-AZ`

---

## 2. Format Tabel Bersih & Perataan Teks (Table Styling)

1. **Baris Header (Table Header)**:
   - Diberi latar belakang warna aksen korporat gelap (Deep Navy) dengan teks putih tebal, atau abu-abu muda dengan teks hitam tebal.
   - Wajib mengaktifkan opsi **Repeat Header Rows on Every Page** agar tabel yang melompat ke halaman berikutnya tetap memiliki label kolom yang jelas.
2. **Perataan Konten Kolom**:
   - Kolom Teks / Deskripsi: **Rata Kiri (Left-Aligned)**.
   - Kolom Angka / Nilai Finansial / Tanggal: **Rata Kanan (Right-Aligned)** agar digit satuan, puluhan, dan ratusan sejajar secara vertikal.
   - Kolom Kode Status / Nomor Urut: **Rata Tengah (Center-Aligned)**.
3. **Pemberian Warna Selang-Seling (Zebra Striping)**:
   - Gunakan warna abu-abu sangat muda ($3 - 5\%$ tint) pada baris genap untuk mempermudah pembaca menelusuri data horizontal yang panjang.

---

## 3. Pencegahan Pemotongan Baris Tabel (Row Split Prevention)

- Nonaktifkan opsi *Allow row to split across pages* pada baris-baris data kritis untuk mencegah satu baris terpotong terpisah menjadi dua bagian di bagian bawah halaman.
