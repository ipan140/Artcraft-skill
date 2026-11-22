# AniCraft: Format Ekspor & Spesifikasi Teknis

Dokumen ini menjelaskan standar ekspor animasi dari **AniCraft** untuk berbagai platform (Web, Android, iOS, Video, dan Media Sosial).

---

## 1. Lottie JSON (Bodymovin)

Format standar industri untuk animasi vektor interaktif di aplikasi seluler dan website.

* **Keunggulan**:
  - Ukuran berkas sangat kecil (biasanya < 50 KB).
  - Skalabel tanpa pecah (*infinite vector scaling*).
  - Dapat dikontrol secara dinamis melalui kode (play on hover, scroll-driven, loop count, progress scrubbing).
* **Aturan Optimasi File**:
  - Gunakan shape murni (*parametric shapes & bezier paths*).
  - Batasi jumlah trim paths bertumpuk karena membutuhkan komputasi tinggi pada ponsel lawas.
  - Hapus layer tersembunyi yang tidak terpakai sebelum ekspor.
* **Standar File `.lottie` (dotLottie)**:
  - Kemasan arsip zip terkompresi yang menyertakan metadata dan font, mengurangi ukuran file hingga 80% dibanding JSON biasa.

---

## 2. Animated SVG (SVG + CSS / SMIL)

* **Penggunaan**: Ikon animasi web murni tanpa ketergantungan library JavaScript tambahan.
* **Metode**:
  - Menggunakan deklarasi CSS `@keyframes` atau elemen `<animate>` / `<animateTransform>` bawaan SVG standar W3C.

---

## 3. Video & Raster Sequence (MP4 / WebM / ProRes)

* **MP4 (H.264 / H.265)**:
  - Untuk pratinjau klien, media sosial, atau integrasi video editor non-linear.
* **WebM dengan Alpha Channel (VP9)**:
  - Format video web modern yang mendukung transparansi latar belakang dengan ukuran file kecil.
* **Apple ProRes 4444**:
  - Untuk ekspor kualitas master tanpa penurunan kualitas (*lossless*), menyertakan saluran transparansi penuh (RGBA 16-bit).
