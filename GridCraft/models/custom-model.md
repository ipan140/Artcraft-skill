# Profil Model: Kustom Permodelan Data (Custom Data Models)

Profil ini digunakan ketika lembar kerja spreadsheet dirancang untuk keperluan analitik khusus di luar 3 laporan keuangan, metrik SaaS, dan inventaris—seperti **Optimalisasi Anggaran Pemasaran Digital (ROAS & Media Mix)**, **Pelacak Kinerja & KPI Karyawan (HR Performance)**, **Portofolio Investasi Multi-Aset**, atau **Rencana Anggaran Biaya Proyek (Bill of Quantities - BoQ)**.

---

## 1. Konfigurasi Model Kustom

Tentukan jenis model kustom pada [config.md](../config.md) pada opsi `custom_model_type`:

```yaml
target_model: "custom-model"
custom_model_type: "marketing-roas" # marketing-roas | hr-kpi-tracker | investment-portfolio | project-boq
```

---

## 2. Profil 1: Analisa Efektivitas Pemasaran (Marketing ROAS & CAC)
- **Metrik Utama**:
  - `ROAS = Total Revenue Generated / Total Ad Spend`.
  - `Blended CAC = Total Marketing Budget / Total New Customers`.
  - `Click-Through Rate (CTR) = Clicks / Impressions`.
  - `Conversion Rate (CVR) = Purchases / Clicks`.
- **Fitur Khusus**: Tabel simulasi skenario (*What-If Sensitivity Table*) untuk melihat dampak jika alokasi anggaran iklan dialihkan dari Google Search ke TikTok Ads.

---

## 3. Profil 2: Pelacak KPI & Evaluasi Karyawan (HR Performance Tracker)
- **Struktur Halaman**:
  - Kolom Nama Karyawan, Divisi, Target KPI, Pencapaian Aktual, Rasio Capaian (%), Bobot KPI, dan Skor Tertimbang.
- **Formula Otomasi Grade**:
  - Gunakan `XLOOKUP` dengan parameter match mode `-1` (Exact match or next smaller item) untuk memetakan skor akhir ke predikat huruf (`A: > 90`, `B: 75-89`, `C: 60-74`, `D: < 60`).

---

## 4. Profil 3: Rencana Anggaran Biaya Proyek (BoQ / Project Budgeting)
- **Struktur Hierarkis**:
  - WBS (Work Breakdown Structure): Divisi 1 (Pekerjaan Tanah) $\rightarrow$ Divisi 2 (Struktur Beton) $\rightarrow$ Divisi 3 (Arsitektur).
  - Kolom: Volume, Satuan (m³, m², titik), Harga Satuan Upah, Harga Satuan Material, Sub-total, dan Biaya Kontinjensi Tak Terduga (5% - 10%).
