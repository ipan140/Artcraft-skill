# Modul 05: Color Palettes, Gradients & Shading Systems

Modul ini menetapkan formula harmonisasi palet warna vektor, konfigurasi gradien linear dan radial dalam SVG, manajemen gamut CMYK vs RGB, dan pemodelan pencahayaan datar (*flat shading*).

---

## 1. Gamut Warna: Digital RGB vs Cetak CMYK

- **Gamut Layar Digital (sRGB / Display P3)**:
  - Mengizinkan warna-warna neon elektrik terang (seperti Cyan Hex `#00FFFF` atau Lime Green `#00FF00`).
- **Gamut Cetak Offset (CMYK)**:
  - Tinta fisik (Cyan, Magenta, Yellow, Key Black) memiliki ruang warna yang jauh lebih sempit.
  - Logo yang dirancang dengan warna neon di RGB akan tampak kusam (*muddy muted tone*) saat dicetak jika tidak dikalibrasi sejak awal.
  - Gunakan palet warna aman yang memiliki nilai ekuivalen cetak pantone solid (*Pantone Matching System / PMS*).

---

## 2. Struktur Sintaks Gradien SVG

Gradien dalam berkas SVG didefinisikan di dalam elemen `<defs>` dan direferensikan menggunakan atribut `url(#id)`:

```xml
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradien Linear dengan Sudut 45 Derajat -->
    <linearGradient id="primaryBrandGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0F2027" stop-opacity="1" />
      <stop offset="50%" stop-color="#203A43" stop-opacity="1" />
      <stop offset="100%" stop-color="#2C5364" stop-opacity="1" />
    </linearGradient>

    <!-- Gradien Radial untuk Sorotan Cahaya -->
    <radialGradient id="highlightGlow" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="100" height="100" rx="20" fill="url(#primaryBrandGrad)" />
  <circle cx="50" cy="50" r="30" fill="url(#highlightGlow)" />
</svg>
```

---

## 3. Shading Berbasis Masker Opasitas (Opacity Masks)

- Gunakan elemen `<mask id="...">` untuk menciptakan bayangan bertingkat yang mengikuti kelengkungan bentuk tanpa perlu memotong kurva dasar secara permanen.
- Warna putih di dalam masker menampilkan objek 100%, warna hitam menyembunyikan, dan gradien abu-abu menghasilkan transisi transparansi yang halus.
