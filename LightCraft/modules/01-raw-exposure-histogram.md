# Modul 01: Demosaicing RAW & Analisa Histogram (RAW Exposure & Histogram Analysis)

Modul ini menetapkan prinsip demosaicing sensor kamera digital (Bayer array), pembacaan histogram 5-zona eksposur, kalibrasi White Balance (Kelvin & Tint), serta pencegahan pemotongan sinyal (*clipping*).

---

## 1. Anatomi 5 Zona Histogram Digital

Histogram adalah grafik frekuensi distribusi kecerahan piksel dari gelap mutlak di sisi kiri hingga terang mutlak di sisi kanan:

```text
┌────────────────────────────────────────────────────────┐
│ [BLACKS]  │ [SHADOWS] │ [MIDTONES] │[HIGHLIGHTS]│[WHITES]  │
│ (0 - 5%)  │ (5 - 30%) │ (30 - 70%) │ (70 - 95%) │(95-100%) │
│   Hitam   │ Bayangan  │ Nada Tengah│ Area Terang│  Putih   │
│   Pekat   │ & Rambut  │ & Kulit    │ & Awan     │ Bersih   │
└────────────────────────────────────────────────────────┘
```

1. **Indikator Peringatan Kliping (Clipping Warnings)**:
   - **Segitiga Kiri Biru**: Menandakan piksel hitam murni 0% yang kehilangan detail (*shadow clipping / crushed blacks*).
   - **Segitiga Kanan Merah**: Menandakan piksel putih 100% yang terbakar (*blown out highlights*).
2. **Prinsip "Expose to the Right" (ETTR)**:
   - Saat merekam atau mengembangkan RAW, dorong kurva histogram ke arah kanan sedekat mungkin dengan batas putih tanpa menyentuh dinding kanan. Hal ini memaksimalkan rasio sinyal terhadap noise (*signal-to-noise ratio*).

---

## 2. Kalibrasi Keseimbangan Putih (White Balance Tuning)

White balance menetapkan warna putih dan abu-abu netral sebagai acuan:

- **Temperatur Kelvin**:
  - `2800K - 3200K`: Suasana lampu pijar / Tungsten dalam ruangan.
  - `5000K - 5600K`: Cahaya matahari siang hari (*Daylight*).
  - `6500K - 7500K`: Langit mendung berawan (*Cloudy*) atau area teduh (*Shade*).
- **Tint (Penyelarasan Hijau vs Magenta)**:
  - Digunakan untuk menetralkan bias hijau lampu neon kantor atau bias magenta lensa kamera tertentu.
- **Pipet Acuan Netral (Eyedropper Tool)**:
  - Klik pada area yang secara fisik seharusnya berwarna abu-abu netral (misal kartu abu-abu 18%, kemeja putih katun, atau semen aspal kering).
  - Nilai RGB ideal titik netral: ketiga nilai $R, G, B$ harus hampir seimbang (misal: $R=65\%, G=65\%, B=65\%$).
