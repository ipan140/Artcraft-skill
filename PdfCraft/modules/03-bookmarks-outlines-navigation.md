# Modul 03: Bookmarks, Outlines & Document Navigation

Modul ini menetapkan spesifikasi penataan pohon navigasi (*Outlines / Bookmarks*), tujuan bernama (*Named Destinations*), tautan internal hiperteks, dan penomoran label halaman (*PageLabels*).

---

## 1. Hirarki Pohon Bookmark (Outlines Tree)

Pohon bookmark harus mencerminkan struktur dokumen logis:

```text
/Outlines << /Type /Outlines /First 25 0 R /Last 28 0 R /Count 4 >>

Root: Laporan Audit Finansial 2026
  ├── 1. Ringkasan Eksekutif (Halaman 3, /Fit)
  ├── 2. Metodologi Penilaian (Halaman 5, /Fit)
  │     ├── 2.1 Analisis Risiko Kredit (Halaman 7)
  │     └── 2.2 Uji Stres Likuiditas (Halaman 11)
  ├── 3. Temuan Audit (Halaman 14)
  └── Lampiran A: Pernyataan Kepatuhan (Halaman 22)
```

1. **Target Tampilan (Destinations)**:
   - Gunakan format `[page /XYZ left top zoom]` atau `[page /Fit]` agar ketika tautan diklik, tampilan pembaca otomatis menyesuaikan koordinat bab dengan presisi.
2. **Status Lipatan (Folded vs Expanded)**:
   - Level 1 dibiarkan terbuka (`/Count` positif), sedangkan level 3 dilipat secara default untuk menghemat ruang panel navigasi.

---

## 2. Penomoran Halaman Fisik vs Logis (PageLabels Dictionary)

Untuk menyelaraskan antara nomor halaman yang ditampilkan viewer dengan nomor halaman cetakan:

```text
/PageLabels <<
  /Nums [
    0 << /S /r >>          % Halaman 1-3 menggunakan Romawi kecil: i, ii, iii
    3 << /S /D /St 1 >>    % Halaman 4 dan seterusnya menggunakan desimal: 1, 2, 3...
  ]
>>
```

---

## 3. Tautan Internal & Tampilan Awal (Catalog ViewerPreferences)

Konfigurasikan preferensi tampilan dokumen pada `/ViewerPreferences`:
- `/DisplayDocTitle true` (Menampilkan judul dokumen asli dari metadata, bukan nama file mentah seperti `document_rev3_final.pdf`).
- `/PageMode /UseOutlines` (Otomatis membuka panel daftar isi saat berkas dimuat).
- `/FitWindow true` (Menyesuaikan jendela pembaca dengan ukuran halaman).
