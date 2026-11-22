# Profil Perangkat: Custom Device (Template Bebas)

Dokumen ini menyediakan spesifikasi dan panduan adaptasi untuk perangkat-perangkat non-standar, seperti **Layar Lipat (Foldables)**, **Smart TV (10-Foot UI)**, **Monitor Ultrawide (21:9 / 32:9)**, dan **Terminal Kiosk**.

---

## 📱 1. Template: Layar Lipat (Foldable Devices)

Perangkat seperti Galaxy Z Fold, Pixel Fold, atau laptop berlayar ganda.

* **Postur Layar (Posture States)**:
  - `folded` (Cover Screen): Layar sempit tinggi (rasio ~23:9, lebar 320px-360px). Terapkan profil [mobile.md](./mobile.md).
  - `unfolded` (Inner Screen): Layar hampir bujur sangkar (~8:7, lebar 700px-800px).
  - `half-folded` (Flex Mode / Tent Mode): Layar ditekuk 90 derajat.
* **Aturan Implementasi CSS**:
  - Gunakan media feature `spanning` dan `screen-folding-posture`:
    ```css
    @media (horizontal-viewport-segments: 2) {
      /* Pisahkan UI menjadi dua sisi engsel (hinge area) */
      .app-layout {
        display: grid;
        grid-template-columns: env(viewport-segment-width 0 0) env(viewport-segment-width 1 0);
        gap: env(viewport-segment-gap-width 0 0);
      }
    }
    ```
  - **Flex Mode UI**: Bagian atas menampilkan video/konten tampilan, bagian bawah menampilkan panel kontrol / komentar.

---

## 📺 2. Template: Smart TV & Layar Jarak Jauh (10-Foot UI)

Antarmuka yang dioperasikan dari sofa berjarak 3 meter menggunakan remote control D-pad (Atas, Bawah, Kiri, Kanan, OK/Select).

* **Jarak Pandang**: Skala elemen harus jauh lebih besar dari layar biasa.
* **Tipografi**:
  - Ukuran font terkecil minimal **24px**; judul utama **48px - 64px**.
* **Navigasi Spasial (D-pad Focus)**:
  - Tidak ada kursor mouse. State fokus **sangat mencolok**:
    - Skala membesar saat fokus: `transform: scale(1.08)`.
    - Border fokus cerah dengan glow: `ring-4 ring-primary-400 shadow-xl`.
* **Layout**:
  - Carousel horizontal (*horizontal shelf / swimlanes*) untuk daftar konten (film/acara).
  - Margin tepi luar aman (*Overscan margin*) minimal `5%` atau `64px` agar tidak terpotong oleh bezel TV.

---

## 🖥️ 3. Template: Monitor Ultrawide (21:9 & 32:9)

Resolusi lebar ekstrim seperti 3440x1440px atau 5120x1440px.

* **Masalah Utama**: Teks yang membentang dari ujung kiri ke kanan layar menyebabkan leher pengguna pegal dan sulit dibaca.
* **Solusi Layout**:
  - **Hard Max-Width**: Jangan biarkan konten teks membentang tanpa batas. Batasi area bacaan utama pada `max-w-6xl` atau `max-w-7xl` di tengah.
  - **Multi-Pane Dashboard**: Manfaatkan lebar ekstra untuk membuka 3 hingga 4 panel informasi simultan tanpa perlu tab bergantian (misal: Sidebar Nav + Master List + Detail View + Activity Inspector).

---

## 🏧 4. Template: Kiosk & Touch Display Publik

Layar sentuh berdiri di tempat umum (restoran fast food, ATM, mesin antrian).

* **Tangan Pengguna**: Beragam posisi tinggi badan, sering kali terburu-buru.
* **Touch Target**: Ekstra besar, minimal **64px x 64px**.
* **Timeout & Reset**: Sediakan mekanisme idle timer (misal: kembali ke layar selamat datang jika 60 detik tanpa interaksi).
* **Kontras Ekstra Tinggi**: Pertimbangkan paparan cahaya luar / lampu ruangan terang.
