# Profil Genre: Kustom Genre Fotografi (Custom Photography Styles)

Profil ini digunakan ketika gaya pengolahan foto berada di luar potret, lanskap, dan arsitektur—seperti **Fotografi Jalanan Monokrom Kontras Tinggi (Street B&W)**, **Fotografi Produk Komersial E-Commerce (Pure White Background)**, atau **Fotografi Langit Malam & Astrofotografi (Astro / Milky Way)**.

---

## 1. Konfigurasi Gaya Kustom

Tentukan jenis gaya kustom pada [config.md](../config.md) pada opsi `custom_photography_type`:

```yaml
target_genre: "custom-photography"
custom_photography_type: "street-monochrome" # street-monochrome | commercial-product | astro-nightsky | sports-action
```

---

## 2. Profil 1: Fotografi Jalanan Hitam Putih (Street B&W High-Contrast)
- **Konversi Monokrom Berbobot (B&W Color Mixer)**:
  - Jangan sekadar menurunkan Saturation global ke `-100`. Gunakan panel Black & White Mixer:
  - Naikkan saluran Orange & Yellow (+25) agar wajah manusia tampak terang dan kontras.
  - Turunkan saluran Blue (-30) agar langit biru berubah menjadi abu-abu pekat dramatis ala film noir.
- **Tone Curve Agresif**: Bentuk S-Curve curam dengan titik hitam ditekan (*crushed black*) dan Clarity `+25` untuk mempertegas tekstur aspal dan dinding bata.

---

## 3. Profil 2: Fotografi Produk Komersial (E-Commerce Product on Pure White)
- **Target Latar Belakang**: Latar putih wajib berada di nilai RGB `255, 255, 255` murni.
- **Penjagaan Batas Tepi**: Gunakan penyesuaian kuas lokal (*radial mask*) di sekeliling produk dengan Whites `+50` untuk membakar latar belakang, sementara badan produk dilindungi agar tekstur label dan logo merek tidak pudar.

---

## 4. Profil 3: Astrofotografi & Bintang Bimasakti (Milky Way / Astrophotography)
- **White Balance Khusus**: Kunci Kelvin di rentang sejuk `3800K s/d 4200K` dengan Tint `+10 Magenta` untuk menetralkan polusi cahaya lampu kota.
- **Dehaze & Clarity pada Galaksi**: Buat masker linier pada jalur kabut Bimasakti, naikkan Dehaze `+25`, Clarity `+30`, dan buka Shadows `+20`.
- **Reduksi Noise Ekstrem**: Terapkan Noise Reduction Luminance `30 s/d 45` dengan Detail `60` untuk meredam noise sensor akibat penggunaan ISO tinggi (ISO 3200 / 6400).
