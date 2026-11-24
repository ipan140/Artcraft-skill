# Modul 01: Ruang Warna Linear & Pipeline ACES (Linear Color & ACEScg Workflow)

Modul ini menetapkan prinsip alur kerja warna standar film: representasi piksel 32-bit floating point, ruang warna ACEScg (Academy Color Encoding System), OpenColorIO (OCIO), transformasi Input/Output Device Transforms (IDT & ODT), serta kalkulasi cahaya fisik tanpa pemotongan batas (*dynamic range clamping*).

---

## 1. Mengapa Compositing Wajib di Ruang Linear 32-Bit Float?

Mata manusia merespons cahaya secara logaritmik, namun kamera dan fisika cahaya berperilaku linier (dua lampu memancarkan foton tepat 2x lipat dari satu lampu):

```text
RUANG WARNA NON-LINEAR (GAMMA sRGB):
1.0 + 1.0 = 1.0 (Terpotong / Clamped di putih maksimal).
Jika dilakukan Gaussian Blur pada lampu neon, tepian pendar akan menjadi abu-abu kotor.

RUANG WARNA LINEAR 32-BIT FLOAT:
1.0 + 1.0 = 2.0 (Super-White / HDR). Nilai kecerahan dapat mencapai 10.0, 50.0, atau 100.0+.
Operasi Blur, Merge Over, Multiply, dan Despill menghasilkan interaksi cahaya fisik yang murni.
```

---

## 2. Struktur Pipeline ACES (Academy Color Encoding System)

Dalam pipeline ACES 1.3, data gambar melalui 3 tahapan transformasi utama:

```text
[Kamera Asli: ARRI Alexa / RED / Sony Venice]
                  │
                  ▼ (IDT - Input Device Transform)
[Ruang Kerja Compositing: ACEScg (Linear AP1 Primaries, 32-bit Float)]
  ├── Operasi Grade, Merge, Blur, Tracking, Keying, CGI Integration
                  │
                  ▼ (ODT - Output Device Transform)
[Layar Monitor / Bioskop: Rec.709 / DCI-P3 / HDR Rec.2020]
```

1. **IDT (Input Device Transform)**: Mengonversi rekaman Log mentah kamera (misal ARRI LogC3/LogC4 atau RED Log3G10) menjadi ruang linear standar ACEScg.
2. **ACEScg (Working Gamut)**: Ruang warna dengan gamut warna sangat luas (AP1 primaries) yang mencakup seluruh spektrum warna yang bisa ditangkap sensor kamera dan dirender oleh mesin 3D.
3. **ODT (Output Device Transform)**: Mengonversi data linear HDR ke batas kemampuan monitor tampilan tanpa merusak data asli (*non-destructive viewing LUT*).

---

## 3. Aturan Konversi Tekstur & Data Passes
- **Elemen Warna (Color Data)**: Latar belakang rekaman live-action, tekstur albedo, dan matte painting dikonversi menggunakan profil ACEScg.
- **Elemen Non-Warna (Utility Data Passes)**: Peta Normal, Z-Depth, Alpha, Motion Vectors, dan Roughness **wajib di-load dengan profil `Utility - Raw`**, tanpa transformasi kurva warna apa pun agar nilai angka geometrinya tidak terdistorsi.
