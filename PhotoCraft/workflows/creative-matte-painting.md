# Workflow Profile: Creative Matte Painting & Key Compositing

Profil ini menetapkan panduan penggabungan multi-gambar (*complex compositing*), penggantian langit (*sky replacement*), perspektif atmosferik (*aerial haze*), integrasi pembungkus cahaya (*light wrap*), dan penyelarasan sumber pencahayaan.

---

## 1. Penyelarasan Nilai Tonal & Arah Cahaya (Luminance Matching)

Sebelum menyamakan warna, samakan terlebih dahulu nilai kontras dan arah cahaya:

1. **Check Layer (Threshold/Desaturate)**:
   - Buat layer hitam-putih murni di posisi paling atas tumpukan untuk mengevaluasi apakah tingkat kegelapan hitam (*black point*) subjek selaras dengan latar belakang baru.
2. **Koreksi Black Point & White Point**:
   - Gunakan adjustment layer **Curves** (dikliping ke subjek). Geser slider bayangan dan sorotan agar sesuai dengan nilai absolut background plate.

---

## 2. Perspektif Atmosferik (Depth Haze & Aerial Perspective)

- Objek yang berada lebih jauh dari kamera mengalami penurunan kontras dan pergeseran warna mengikuti warna kabut langit (*sky fill*).
- Buat layer warna solid (*Solid Color*) dengan warna sampel langit jauh, turunkan opasitas menjadi $10 - 25\%$, dan gunakan gradien linear vertikal dari bawah ke atas.

---

## 3. Pembungkus Cahaya Tepi (Light Wrap Integration)

Untuk menyatukan tepi objek tajam dengan latar belakang terang:

1. Duplikat layer latar belakang dan posisikan tepat di atas layer subjek (clipping mask aktif).
2. Terapkan **Gaussian Blur** radius $15 - 35$ piksel.
3. Ubah Blend Mode ke **Screen** atau **Soft Light**.
4. Masking bagian tengah subjek sehingga efek cahaya latar hanya "merembes" tipis ($3 - 8$ piksel) di sepanjang garis siluet luar subjek.
