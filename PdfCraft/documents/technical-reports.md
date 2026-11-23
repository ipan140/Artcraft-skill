# Document Profile: Technical Reports & Manuals

Profil ini menetapkan aturan pembuatan laporan teknis korporat, manual operasional mesin, studi kelayakan, dan dokumen publikasi multi-halaman dengan hirarki navigasi bookmark mendalam dan tabel data presisi.

---

## 1. Struktur Hirarki Dokumen Panjang

Setiap dokumen teknis panjang ($> 10$ halaman) wajib memiliki struktur navigasi terstandar:

```
[Cover Page / Halaman Judul]
        ↓
[Document Metadata & Revision History Table]
        ↓
[Executive Summary] (Penomoran halaman Romawi: i, ii, iii)
        ↓
[Table of Contents (TOC)] (Interaktif hyperlink ke bookmark)
        ↓
[Main Chapters / Bab Isi] (Penomoran angka Arab: 1, 2, 3...)
        ↓
[Technical Specifications & Vector Schematics]
        ↓
[Appendix & Glossary]
```

---

## 2. Navigasi Outlines & Bookmarks (Daftar Isi PDF)

1. **Struktur Bersarang (Nested Bookmarks)**:
   - Level 1: Bab Utama (`Bab 1: Pendahuluan`)
   - Level 2: Sub-bab (`1.1 Latar Belakang Masalah`)
   - Level 3: Rincian Spesifik (`1.1.2 Batasan Arsitektur Sistem`)
2. **Perilaku Tampilan Awal (Initial View / PageMode)**:
   - Konfigurasi `PageMode = UseOutlines` agar panel daftar isi otomatis terbuka di bilah samping saat dibuka di PDF Reader.
   - Zoom default: `FitWidth` (menyesuaikan lebar layar pembaca).

---

## 3. Label Halaman Dual (Page Labels)

Gunakan kamus `/PageLabels` PDF untuk menyelaraskan nomor halaman fisik dengan cetakan:
- Halaman 1-4 (Prelims): Angka Romawi kecil (`i`, `ii`, `iii`, `iv`).
- Halaman 5 ke atas (Bab 1 dst): Angka Arab (`1`, `2`, `3`...).
