# Profil Perangkat: Tablet & iPad (Portrait & Landscape)

Profil ini mengatur perilaku antarmuka untuk perangkat tablet berukuran menengah (iPad, Android Tablet) dengan rentang viewport 768px hingga 1024px+.

---

## 1. Spesifikasi Viewport & Grid

* **Rentang Resolusi**:
  - Portrait: `768px` s/d `834px` (Tailwind: `md`)
  - Landscape: `1024px` s/d `1180px` (Tailwind: `lg`)
* **Struktur Grid**:
  - Portrait: 2 Kolom untuk card / feeds.
  - Landscape: 3 s/d 4 Kolom atau layout Master-Detail (Split View).
* **Margin Kontainer**: `24px` (`px-6`) s/d `32px` (`px-8`).

---

## 2. Navigasi & Pola Layout

### 2.1 Sidebar Adaptif (Rail vs Full Sidebar)
* **Mode Portrait**: Sidebar dapat diciutkan (*collapsed*) menjadi *icon-only rail* (lebar 64px-72px) atau tersembunyi dalam drawer toggle.
* **Mode Landscape**: Sidebar penuh permanen atau semi-permanen (lebar 240px-280px) untuk navigasi cepat.

### 2.2 Master-Detail Layout (Split View)
Sangat ideal untuk aplikasi daftar pesan, email, dashboard, atau settings:
- Kolom Kiri (Master List): Lebar 320px - 360px menampilkan daftar item.
- Kolom Kanan (Detail View): Sisa lebar layar menampilkan detail konten yang dipilih.

---

## 3. Input Hibrida (Touch + Trackpad / Apple Pencil)

* Tablet mendukung sentuhan jari sekaligus mouse/trackpad keyboard cover.
* **Touch Target**: Tetap pertahankan minimal **40px - 44px**.
* **Hover State**:
  - Terapkan media query `@media (hover: hover)` agar efek hover tidak tertahan (*sticky hover bug*) saat pengguna menyentuh layar menggunakan jari.
  - Sediakan visual feedback aktif baik untuk sentuhan maupun kursor trackpad.

---

## 4. Adaptasi Orientasi (Orientation Switching)

* Pastikan konten tidak terpotong (*overflow*) saat pengguna memutar tablet dari Landscape ke Portrait.
* Gunakan CSS container queries atau responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) agar elemen mengalir secara luwes tanpa refresh halaman.
