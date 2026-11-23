# Modul 07: Compositing, Light Wrap & Ground Shadows

Modul ini menetapkan prinsip integrasi fisik penggabungan objek (*compositing integration*), sinkronisasi perspektif pencahayaan, pembuatan bayangan realistis, dan pembungkus cahaya atmosferik (*light wrap*).

---

## 1. Tiga Hukum Fisika Penggabungan Gambar

1. **Arah & Kualitas Cahaya Bersama (Light Angle & Softness)**:
   - Arah bayangan pada objek yang dimasukkan wajib selaras dengan bayangan lingkungan latar belakang.
   - Jika cahaya latar belakang adalah matahari terbuka (terik keras), bayangan objek harus bertepi tajam (*hard edge*). Jika latar belakang berawan mendung, bayangan wajib bergradasi sangat lembut (*diffuse soft edge*).
2. **Karakteristik Lensa & Kedalaman Lapangan (DoF Matching)**:
   - Jika background diambil dengan aperture $f/1.8$ (bokeh kabur), objek komposit yang berada di bidang fokus yang sama tidak boleh memiliki tingkat ketajaman yang bertolak belakang.
3. **Perspektif Cakrawala (Horizon Line Alignment)**:
   - Titik lenyap (*vanishing point*) dan garis cakrawala objek wajib sejajar dengan garis horizon latar belakang.

---

## 2. Pembuatan Bayangan Tanah Alami (Synthetic Ground Shadows)

Bayangan realistis dibangun dari tiga komponen terpisah:

- **1. Contact Shadow**:
  - Dibuat tepat di titik kontak fisik antara objek dan tanah (misal: sol sepatu atau dasar ban mobil).
  - Sangat tipis ($2 - 4$ piksel), sangat gelap (opasitas $80 - 90\%$), blur minimal $1 - 2$ piksel.
- **2. Ambient Occlusion Shadow**:
  - Bayangan perangkap cahaya di kolong bawah objek.
  - Opasitas $40 - 55\%$, blur Gaussian $10 - 25$ piksel.
- **3. Cast Directional Shadow**:
  - Bayangan jatuh yang terbentang menjauhi sumber cahaya utama.
  - Terapkan **Field Blur** atau gradien blur yang semakin kabur dan memudar seiring semakin jauhnya jarak dari dasar objek.

---

## 3. Light Wrap & Bleed Masking

Saat objek gelap ditempatkan di depan sumber cahaya terang (misal matahari terbenam atau jendela kaca):
- Tepi siluet objek harus terpengaruh oleh difraksi cahaya atmosferik.
- Buat layer Light Wrap dengan blend mode **Screen**, isi dengan warna cahaya latar belakang, dan batasi dengan mask seleksi terinversi selebar $4 - 12$ piksel di sepanjang batas luar subjek.
