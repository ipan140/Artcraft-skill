# Modul 01: Dekonstruksi DOM & Layout UI (DOM & Layout Reverse Engineering)

Modul ini menetapkan metodologi pembongkaran pohon dokumen (DOM Tree), isolasi sistem tata letak (Flexbox & CSS Grid), serta penerjemahan gaya tampilan usang/terobfuskasi ke utilitas Tailwind modern.

---

## 1. Langkah Pembongkaran Hierarki DOM

Saat menganalisa cuplikan HTML atau antarmuka yang ada, ikuti 4 langkah dekonstruksi sistematis:

1. **Eliminasi Wrapper Berlebih (Div-Soup Pruning)**:
   - Seringkali website asli memuat banyak elemen `<div>` bersarang yang hanya digunakan untuk styling lama atau tracking.
   - Pangkas container tak berguna dan sederhanakan menjadi elemen semantik: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, dan `<footer>`.
2. **Identifikasi Orientasi Sumbu Layout**:
   - Tentukan apakah komponen anak ditata dalam satu dimensi (baris horizontal / kolom vertikal $\rightarrow$ Flexbox: `flex flex-col` atau `flex flex-row`) atau dua dimensi (tabel kartu bertingkat $\rightarrow$ Grid: `grid grid-cols-1 md:grid-cols-3 gap-6`).
3. **Analisa Spacing & Alignment**:
   - Terjemahkan margin dan padding manual menjadi sistem token: `gap-4`, `p-6`, `items-center`, `justify-between`.
4. **Pola Posisi Khusus (Positioning)**:
   - Tangkap elemen melayang: `fixed top-0` (navbar lengket), `sticky top-20` (daftar isi samping), atau `absolute right-2 top-2` (tombol close modal).

---

## 2. Reverse Engineering CSS ke Modern Tailwind CSS

| Pola CSS Tradisional / Terobfuskasi | Terjemahan Tailwind Rebuild | Analisa Kegunaan |
| :--- | :--- | :--- |
| `display: flex; justify-content: space-between; align-items: center;` | `flex items-center justify-between` | Baris navigasi atau kartu header standar. |
| `display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;` | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` | Galeri kartu katalog barang responsif. |
| `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` | `truncate` | Memotong teks panjang judul agar tidak meluap. |
| `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);` | `shadow-md` | Elevasi kartu melayang halus. |
| `backdrop-filter: blur(8px); background: rgba(255, 255, 255, 0.75);` | `backdrop-blur-md bg-white/75` | Efek kaca modern (glassmorphism) pada navbar. |

---

## 3. Identifikasi Elemen Interaktif & Kondisi Semu (Pseudo-Classes)
- **Hover**: Catat transformasi skala (`hover:scale-105`), perubahan warna (`hover:bg-primary-700`), atau kemunculan bayangan (`hover:shadow-lg`).
- **Focus-Visible**: Tangkap cincin aksesibilitas (`focus-visible:ring-2 focus-visible:ring-primary-500`).
- **Disabled State**: Periksa opasitas dan pencegahan klik kursor (`disabled:opacity-50 disabled:cursor-not-allowed`).
