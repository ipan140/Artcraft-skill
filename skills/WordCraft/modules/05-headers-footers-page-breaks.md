# Modul 05: Headers, Footers & Dual Page Numbering

Modul ini menetapkan pemisahan bagian dokumen (*Section Breaks*), konfigurasi halaman sampul tanpa nomor (*Different First Page*), dan penomoran halaman ganda (Romawi kecil untuk bagian awal dan angka Arab untuk badan isi).

---

## 1. Pemisahan Bagian Dokumen (Section Breaks Architecture)

Sebuah dokumen profesional berukuran panjang wajib dibagi menjadi minimal 3 Section:

```
[SECTION 1: Halaman Sampul Depan]
  - Header & Footer: Kosong (Different First Page = True)
  - Penomoran: Dinonaktifkan
        ↓
  [Section Break: Next Page]
        ↓
[SECTION 2: Bagian Awal (Prelims: TOC & Executive Summary)]
  - Header: Kanan atas tipis (Judul Dokumen Singkat)
  - Footer: Bawah tengah - Format Angka Romawi Kecil (i, ii, iii...)
        ↓
  [Section Break: Next Page (Unlink from Previous / LinkToPrevious = False)]
        ↓
[SECTION 3: Badan Utama Dokumen (Bab 1 s/d Lampiran)]
  - Header: Kiri atas (Nama Bab Terkait), Kanan atas (Garis pemisah)
  - Footer: Bawah tengah - Format Angka Arab Desimal (1, 2, 3...) - Dimulai ulang dari halaman 1
```

---

## 2. Pengaturan Margin Header & Footer

- Jarak Header dari batas atas kertas: $12.7\text{ mm}$ ($0.5\text{ inci}$).
- Jarak Footer dari batas bawah kertas: $12.7\text{ mm}$ ($0.5\text{ inci}$).
- Teks nomor halaman menggunakan ukuran font yang lebih kecil ($9 - 10\text{ pt}$) dengan warna abu-abu netral (#666666) agar tidak mengalihkan perhatian dari teks tubuh dokumen.

---

## 3. Halaman Genap & Ganjil Berbeda (Different Odd & Even Pages)

Untuk buku atau laporan korporat yang akan dicetak bolak-balik (*double-sided duplex print*):
- Aktifkan opsi **Different Odd & Even Pages**.
- Halaman ganjil: Nomor halaman berada di sisi kanan luar.
- Halaman genap: Nomor halaman berada di sisi kiri luar.
