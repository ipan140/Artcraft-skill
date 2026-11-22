# Profil Perangkat: Mobile (Android & iOS)

Profil ini mendefinisikan aturan desain, tata letak, dan interaksi untuk smartphone dengan layar sentuh kecil hingga sedang (viewport 360px - 430px).

---

## 1. Spesifikasi Viewport & Layout

* **Lebar Viewport Standar**: `360px` s/d `430px` (Breakpoint Tailwind: `< sm` atau basis default mobile-first).
* **Grid Kolom**: 1 Kolom (single column vertical flow).
* **Margin Kontainer Horisontal**: `16px` (`px-4`) atau `20px` (`px-5`).
* **Gutter / Gap Komponen**: `12px` (`gap-3`) atau `16px` (`gap-4`).

---

## 2. Safe Area & Ergonomi Layar

### 2.1 Safe Area Insets (Notch & Home Indicator)
* Area atas (status bar & notch): gunakan `pt-safe` atau padding top ekstra.
* Area bawah (home indicator bar iOS / navigasi gestur Android): wajib menambahkan safe area padding:
  ```css
  padding-bottom: env(safe-area-inset-bottom, 16px);
  /* Tailwind: pb-[env(safe-area-inset-bottom,1rem)] */
  ```

### 2.2 Zona Jangkauan Jempol (Thumb-Friendly Zone)
* Tempatkan aksi utama dan navigasi primer di **sepertiga bawah layar**.
* Hindari menempatkan tombol aksi krusial di pojok kiri atas yang sulit dijangkau satu tangan.

---

## 3. Ukuran Touch Target (Sentuhan Jari)

* **Minimal Ukuran Tombol Interaktif**: **48px x 48px** (`min-h-[48px] min-w-[48px]` atau `h-12`).
  - Untuk ikon kecil (20px), bungkus dengan container hit-area minimal 44px-48px.
* **Jarak Antar Elemen Interaktif (Hit Target Gap)**: Minimal **8px** agar tidak terjadi salah sentuh (*mis-click*).

---

## 4. Pola Navigasi Mobile

1. **Bottom Navigation Bar**:
   - Menu utama (3-5 tab) ditempatkan tetap (*fixed*) di bagian bawah layar.
   - Tinggi standar: `56px` s/d `64px` + padding safe-area bawah.
2. **Bottom Sheet / Drawer**:
   - Gunakan Bottom Sheet (geser dari bawah) daripada Modal Dialog di tengah layar. Lebih alami dan mudah ditutup dengan gestur jempol.
3. **Sticky Top Bar**:
   - Header ringkas dengan judul halaman rata kiri atau tengah, tombol *back*, dan maksimal 1 aksi sekunder di kanan.

---

## 5. Input & Keyboard Handling

* **Font Size Input**: Gunakan minimal `16px` (`text-base`) pada form input untuk mencegah auto-zoom browser iOS Safari.
* **Tipe Keyboard (Virtual Keyboard)**:
  - Tentukan atribut `inputMode` yang sesuai:
    - `inputMode="numeric"` untuk PIN/OTP.
    - `inputMode="email"` untuk input surel.
    - `inputMode="tel"` untuk nomor telepon.
