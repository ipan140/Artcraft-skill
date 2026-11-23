# Profil Perangkat: Desktop (Laptop & Monitor Standar)

Profil ini mengatur aturan antarmuka untuk layar desktop dan laptop (viewport 1280px s/d 1920px+).

---

## 1. Spesifikasi Viewport & Resolusi

* **Resolusi Acuan**:
  - Laptop: `1280px` s/d `1440px` (Tailwind: `xl`)
  - Monitor FHD / QHD: `1920px` (Tailwind: `2xl`)
* **Maksimal Lebar Konten (Max Width)**:
  - Batasi kontainer bacaan: `max-w-7xl` (1280px) atau `max-w-6xl` (1152px) di tengah layar (`mx-auto`) untuk menjaga kenyamanan jarak pandang mata.
  - Untuk dashboard analitik padat (data dense): dapat menggunakan `max-w-full px-8`.
* **Grid Kolom**: 4, 6, atau 12 Kolom.

---

## 2. Presisi Kursor Mouse & Efek Hover

* **Interaksi Kursor**: Pengguna memiliki presisi kursor pixel-perfect.
  - Ukuran target interaktif dapat lebih kompak: `32px` s/d `40px` (misal tombol tabel, dropdown menu).
* **Hover State yang Kaya**:
  - Berikan feedback hover yang jelas pada semua elemen interaktif (perubahan warna latar, tooltip keterangan, bayangan terangkat halus).
  - Tampilkan tombol aksi tersembunyi (misal: tombol edit/delete pada baris tabel) saat baris di-hover.

---

## 3. Navigasi & Pintasan Keyboard (Shortcuts)

1. **Pola Navigasi**:
   - Sidebar vertikal tetap (*fixed sidebar*) dengan hierarki menu bertingkat.
   - Header atas memuat breadcrumbs, global search bar, dan profile menu.
2. **Command Palette (`Cmd+K` / `Ctrl+K`)**:
   - Sangat direkomendasikan untuk aplikasi desktop kompleks agar pengguna pro dapat bernavigasi tanpa mouse.
3. **Pintasan Keyboard**:
   - `Esc`: Menutup modal atau dropdown.
   - Tombol Panah: Navigasi item menu atau opsi autocomplete.

---

## 4. Tampilan Data Padat (Dense Data Display)

* **Tabel Kompleks (Data Tables)**:
  - Mendukung sorting kolom, multi-filtering, sticky table header, dan pagination di bawah.
* **Modal Dialog Terpusat**:
  - Dialog pop-up di tengah layar dengan backdrop blur (`bg-black/50 backdrop-blur-xs`) dan animasi zoom-in halus.
* **Panel Multi-Kolom**:
  - Kemampuan menampilkan 3 hingga 4 kartu metrik berdampingan dalam satu baris.
