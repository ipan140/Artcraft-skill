# Modul 01: Arsitektur Buku Kerja 3-Lapis (Three-Tier Workbook Architecture)

Modul ini menetapkan pemisahan struktural buku kerja spreadsheet menjadi 3 lapisan independen (*Inputs, Calculations/Engine, Outputs/Dashboard*), serta standarisasi kode warna sel finansial internasional.

---

## 1. Tiga Lapisan Lembar Kerja (3-Tier Separation)

Jangan pernah mencampur input asumsi, rumus kalkulasi rumit, dan grafik presentasi ke dalam satu lembar kerja (*sheet*) yang berantakan:

```text
Buku Kerja Spreadsheet (Workbook):
├── [Sheet 1: Inputs / Assumptions] ── Tempat pengguna memasukkan variabel dan asumsi
├── [Sheet 2: Engine / Calculation]  ── Mesin komputasi data, rumus, dan tabel perantara
└── [Sheet 3: Output / Dashboard]   ── Visualisasi grafik, kartu KPI, dan laporan eksekutif
```

1. **Sheet 1: Inputs & Assumptions**:
   - Memuat variabel bisnis: Persentase inflasi, harga produk, asumsi churn, tingkat pajak.
   - Tidak memuat formula komputasi berat; murni data mentah dan sel input pengguna.
2. **Sheet 2: Calculation Engine**:
   - Memproses data dari Sheet 1 menggunakan rumus matematika murni.
   - Bersifat teknis, sel formula dilindungi (*protected*), dan tidak ditujukan untuk konsumsi audiens non-teknis.
3. **Sheet 3: Presentation & Dashboard**:
   - Menarik hasil akhir dari Sheet 2 dalam bentuk ringkasan bersih, kartu metrik, dan grafik.

---

## 2. Standar Kode Warna Sel Finansial Internasional (Color-Coding Standard)

Gunakan sistem warna sel baku industri perbankan investasi (*Wall Street financial modeling standards*):

| Tipe Sel | Warna Teks / Latar Sel | Hex Code | Makna & Penggunaan |
| :--- | :--- | :--- | :--- |
| **Input / Asumsi Pengguna** | Teks Biru Gelap / Latar Kuning Pucat | `#1E40AF` / `#FEF3C7` | Sel yang boleh diubah-ubah oleh pengguna. |
| **Formula & Perhitungan** | Teks Hitam / Latar Transparan | `#0F172A` / `None` | Sel berisi rumus (dilarang diedit manual). |
| **Link Antar Lembar Kerja** | Teks Hijau Tua | `#065F46` | Sel yang nilainya menarik referensi dari sheet lain. |
| **Konstanta Eksternal** | Teks Merah Gelap | `#991B1B` | Data eksternal yang di-import dari sistem ERP/API. |
| **Baris Header / Kategori** | Teks Putih / Latar Slate-800 | `#FFFFFF` / `#1E293B` | Judul tabel kategori utama. |
| **Total / Sub-Total** | Garis Atas Tipis, Garis Bawah Ganda | Standar Akuntansi | Penanda baris akhir perhitungan resmi. |
