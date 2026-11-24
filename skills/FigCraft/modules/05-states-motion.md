# Modul 05: UI States & Animasi (States & Motion)

Modul ini mewajibkan AI untuk tidak hanya membuat tampilan normal (*happy path*), melainkan juga menangani semua kondisi dinamis antarmuka serta interaksi gerak halus.

---

## 1. Penanganan Kondisi UI (UI States)

Setiap komponen yang menampilkan data dinamis atau menerima interaksi pengguna **wajib** memiliki 4 kondisi visual:

```
[Normal/Success State] ─── Default tampilan dengan data valid
[Loading State]        ─── Skeleton loader atau spinner indikator
[Empty State]          ─── Data kosong / hasil pencarian nihil
[Error State]          ─── Kegagalan fetch data / validasi input form
```

### 1.1 Loading State (Skeleton vs Spinner)
- **Skeleton Loader (Prioritas Utama untuk Card & List)**:
  - Bentuk skeleton harus meniru bentuk komponen asli (*layout matching*).
  - Berikan animasi denyut halus: `animate-pulse bg-slate-200 dark:bg-slate-800 rounded-md`.
  - Hindari satu spinner besar di tengah layar jika konten berupa kartu/daftar.
- **Spinner Loader (Gunakan untuk Button & Inline Action)**:
  - Gunakan spinner SVG putar `animate-spin` saat tombol ditekan atau aksi sedang diproses.
  - Jangan hilangkan ukuran tombol saat loading; pertahankan dimensi (*preserve dimensions*) agar layout tidak bergeser (*layout shift*).

### 1.2 Empty State (Tampilan Data Kosong)
Ketika data `data.length === 0` atau hasil pencarian tidak ditemukan:
- **Anatomi Wajib**:
  1. **Ilustrasi / Ikon**: Ikon netral yang relevan berukuran besar (48px - 64px) dengan latar lingkaran halus (`bg-slate-100 dark:bg-slate-800 p-4 rounded-full text-slate-400`).
  2. **Judul Singkat**: Penjelasan lugas, misal *"Belum Ada Transaksi"* atau *"Data Tidak Ditemukan"*.
  3. **Deskripsi Solutif**: Panduan langkah berikutnya (1-2 kalimat), misal *"Mulai buat proyek pertamamu untuk melihat progres di sini."*
  4. **Tombol Tindakan (CTA)**: Tombol untuk memicu pembuatan data baru atau tombol reset filter.

### 1.3 Error State (Kondisi Kesalahan)
- **Inline Error (Form Input)**:
  - Border input berubah menjadi merah: `border-red-500 focus:border-red-500 focus:ring-red-500`.
  - Pesan error muncul di bawah input dengan ikon seru mini (`text-xs text-red-600 dark:text-red-400 flex items-center gap-1.5 mt-1`).
- **Section / Page Error (Gagal Fetch Data)**:
  - Tampilkan banner peringatan atau panel retry dengan tombol *"Coba Lagi"* (`onClick={refetch}`).

---

## 2. Micro-interactions & Animasi

### 2.1 Durasi & Timing Function Standar
* **Micro-interactions (Hover, Active, Toggle)**:
  - Durasi: **150ms – 200ms**
  - Easing: `ease-out` atau `cubic-bezier(0.16, 1, 0.3, 1)`
  - Tailwind: `transition-all duration-200 ease-out`
* **Elemen Masuk / Muncul (Modal, Dropdown, Toast)**:
  - Durasi: **200ms – 300ms**
  - Efek: Fade in halus (`opacity-0` ke `opacity-100`) dikombinasikan dengan translasi mikro (`translate-y-1` ke `translate-y-0` atau `scale-95` ke `scale-100`).
* **Elemen Keluar**:
  - Durasi: **100ms – 150ms** (lebih cepat dari saat masuk agar terasa responsif).

### 2.2 Aksesibilitas Gerak (`prefers-reduced-motion`)
Untuk pengguna yang sensitif terhadap mabuk gerak (*motion sickness*), matikan atau sederhanakan animasi:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
*Dalam Tailwind*: gunakan utilitas `motion-reduce:transition-none` atau `motion-safe:animate-bounce`.
