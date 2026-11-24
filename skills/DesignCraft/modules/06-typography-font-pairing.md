# Modul 06: Pasangan Font & Detail Tipografi Cetak (Typography & Font Pairing)

Modul ini menetapkan seni pemilihan pasangan font cetak (*font pairing*), pengaturan kerning optis, tracking spasi huruf, pemakaian ligatur, angka proporsional (*old-style figures*), dan eliminasi baris cacat (*widows & orphans*).

---

## 1. Formula Pasangan Font Klasik (Classic Font Pairing)

Dalam publikasi editorial dan majalah, gunakan kontras yang tegas antara font Judul (*Display*) dan font Teks Isi (*Body Text*):

| Kategori Publikasi | Font Judul (Display / Header) | Font Isi (Body Copy) | Karakteristik Visual |
| :--- | :--- | :--- | :--- |
| **Majalah Arsitektur & Seni** | `Playfair Display` / `Bodoni` (Serif Didone) | `Inter` / `Helvetica Neue` (Sans Netral) | Kontras tinggi: Elegan, modern, kontemporer. |
| **Buku Sastra & Esai Panjang** | `Garamond Premier` / `Caslon` (Serif Oldstyle) | `Adobe Garamond Pro` (Serif Klasik) | Harmonis: Ritme membaca sangat lembut, mata tidak lelah. |
| **Laporan Finansial & Bisnis** | `Cinzel` / `Merriweather` (Serif Tegas) | `Plus Jakarta Sans` / `Roboto` (Sans Humanis) | Otoritatif: Kredibel, formal, bersih di layar dan cetak. |
| **Majalah Mode & Gaya Hidup** | `Didot` (Serif Kontras Ekstrem) | `Futura` / `Avenir` (Sans Geometris) | Mewah, modis, ekspresif, tajam. |

---

## 2. Fitur Tipografi Lanjutan (OpenType Features)

1. **Ligatur Standar (Ligatures - `dlig`, `liga`)**:
   - Pasangan huruf seperti `fi`, `fl`, `ffi`, dan `ffl` harus digabungkan menjadi satu glif ligatur untuk mencegah tabrakan antara titik huruf `i` dengan kait huruf `f`.
2. **Angka Gaya Lama (Old-Style Figures / Lowercase Numbers - `onum`)**:
   - Untuk buku bacaan teks panjang, gunakan angka bertinggi bervariasi yang menyatu alami dengan huruf kecil (misal: angka `3`, `4`, `5`, `7`, `9` memiliki ekor turun / *descender*).
   - Untuk tabel laporan keuangan, **wajib** gunakan angka berjajar seragam (*Tabular Lining Figures - `tnum`*) agar seluruh angka desimal sejajar lurus vertikal.
3. **Small Caps Asli (True Small Capitals - `smcp`)**:
   - Jangan pernah memperkecil ukuran huruf besar biasa secara manual (*scaled faux small caps*), karena ketebalan garis huruf akan menjadi terlalu kurus. Gunakan glif Small Caps asli dari font OpenType.

---

## 3. Eliminasi Cacat Baris: Widows, Orphans, & Hyphenation
- **Widow (Janda)**: Baris terakhir paragraf yang hanya berisi 1 kata pendek sendirian di baris baru. Wajib diselesaikan dengan menyesuaikan tracking sebesar `±5` atau `±10` ribu unit em.
- **Orphan (Yatim)**: Baris pertama paragraf yang berdiri sendirian di bagian paling bawah kolom atau halaman, sementara sisa paragrafnya melompat ke kolom berikutnya.
- **Batasan Pemenggalan Kata (Hyphenation Rules)**:
  - Maksimal 2 baris berturut-turut yang berujung pada tanda hubung (*no more than 2 consecutive hyphens*).
  - Kata terakhir di sebuah halaman tidak boleh dipenggal dan disambung ke halaman seberang.
