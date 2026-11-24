# Modul 03: Visualisasi Data & Angka Metrik (Data Visualization & Hero Metrics)

Modul ini menetapkan cara penyajian data numerik berbobot tinggi, kartu metrik (*Hero Stat Callouts*), tabel perbandingan bersih, dan label tren pertumbuhan.

---

## 1. Anatomi Kartu Angka Pahlawan (Hero Stat Callout)

Jangan pernah menyembunyikan angka kunci di dalam kalimat paragraf. Jadikan angka tersebut pusat perhatian visual:

```text
┌──────────────────────────────────────────────────┐
│ LABEL KATEGORI: PERTUMBUHAN TAHUNAN (YoY)        │
│                                                  │
│         +142%  ▲ (Badge Tren Positif Hijau)      │
│                                                  │
│ Peningkatan pendapatan berulang tahunan (ARR)    │
│ dari $1.2M menjadi $2.9M dalam 12 bulan terakhir │
└──────────────────────────────────────────────────┘
```

1. **Ukuran Angka (*Hero Number*)**: `64pt s/d 96pt` dengan font tebal (*bold/extrabold*).
2. **Satuan & Simbol**: Sertakan tanda `+`, `-`, `$`, `%`, atau `x` langsung menyatu dengan angka.
3. **Keterangan Penjelas**: Maksimal 2 baris kalimat ringkas di bawah angka untuk menjelaskan basis pengukuran (misal: "Dibandingkan Q3 tahun lalu").

---

## 2. Format Kartu Metrik Multi-Kolom (Metric Grid)

Untuk menampilkan 3 atau 4 indikator kinerja utama (KPI) berdampingan:

| Kartu 1: Skala Pelanggan | Kartu 2: Retensi Pendapatan | Kartu 3: Efisiensi Biaya | Kartu 4: Kecepatan Rilis |
| :---: | :---: | :---: | :---: |
| **250k+** | **128%** | **-40%** | **4x** |
| Pengguna Aktif Bulanan | Net Retention Rate | Biaya Akuisisi (CAC) | Siklus Deploy Fitur |
| `▲ +35% MoM` | `▲ Tolok Ukur Terbaik` | `▼ Efisiensi Organik`| `▲ Otomasi CI/CD` |

---

## 3. Aturan Penyajian Grafik Bersih (Clean Chart Rules)

1. **Hapus Elemen Sampah Visual (Chart Junk)**:
   - Hilangkan garis grid latar belakang (*background gridlines*).
   - Hilangkan label sumbu $Y$ jika nilai data sudah dituliskan langsung di atas batang (*direct data labels*).
   - Hindari grafik 3 dimensi, efek bayangan tebal, atau pola warna pelangi yang membingungkan.
2. **Pewarnaan Aksen Fokus**:
   - Jika ada 5 batang grafik perbandingan, beri warna abu-abu netral (`slate-300` / `slate-700`) pada 4 kompetitor, dan beri warna aksen terang (`primary-600` / `#2563EB`) khusus pada perusahaan Anda.
