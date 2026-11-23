# Modul 06: Format Bersyarat & Dashboard Visual (Conditional Formatting & KPI Dashboards)

Modul ini menetapkan kaidah pembuatan kartu ringkasan eksekutif (*Executive KPI Cards*), grafik mini dalam sel (*Sparklines*), aturan warna gradasi lembut (*pastel heatmaps*), dan penghindaran polusi visual pada spreadsheet.

---

## 1. Desain Kartu Ringkasan Eksekutif (KPI Cards in Cells)

Di lembar `Dashboard / Output`, rancang kartu metrik berukuran blok 3 baris x 2 kolom:

```text
┌──────────────────────────────────────────────┐
│ PENDAPATAN BERULANG (ARR)                    │ (Teks abu-abu 8pt, huruf kapital)
│ Rp 2.450.000.000                             │ (Font tebal 18pt, warna Slate-900)
│ ▲ +34.2% YoY (vs Target Rp 2.1M)             │ (Teks hijau 9pt dengan panah tren)
└──────────────────────────────────────────────┘
```

- Berikan bingkai border tipis Slate-200 (`#E2E8F0`) di sekeliling kartu.
- Latar kartu: Putih bersih (`#FFFFFF`) di atas kanvas latar belakang sheet abu-abu sangat muda (`#F8FAFC`).

---

## 2. Grafik Mini dalam Sel (In-Cell Sparklines)
- Gunakan fitur **Sparklines** (garis atau batang mini di dalam satu sel) untuk memperlihatkan tren historis 12 bulan tanpa membebani lembar kerja dengan objek grafik mengambang (*floating charts*):
  - *Sparkline Garis*: Tampilkan titik penanda (*Markers*) pada nilai tertinggi (*High Point*) dan nilai terendah (*Low Point*).
  - *Sparkline Batang (Win/Loss)*: Sangat efektif untuk visualisasi arus kas bulanan (batang hijau ke atas untuk surplus, batang merah ke bawah untuk defisit).

---

## 3. Aturan Emas Format Bersyarat (Pastel Heatmaps)

Dilarang menggunakan warna neon menyala (seperti merah darah `#FF0000` atau hijau terang `#00FF00`) yang membuat mata eksekutif silau dan pusing:

- **Aturan 3-Warna Lembut (Soft 3-Color Scale)**:
  - Nilai Minimum: Merah Muda Pastel (`#FEE2E2`)
  - Nilai Titik Tengah (Persentil 50): Kuning Gading Netral (`#FEF9C3`)
  - Nilai Maksimum: Hijau Sage Lembut (`#DCFCE7`)
- **Data Bars (Bilah Data)**:
  - Gunakan bilah data gradasi halus (*Gradient Fill*) dengan warna biru lembut (`#93C5FD`), batasi panjang bilah maksimum di 100% agar angka di dalam sel tetap terbaca tajam.
