# Modul 06: Aset, Gambar & Ikon (Assets & Media)

Modul ini menetapkan panduan penanganan media visual, rasio aspek, gambar cadangan (fallback), dan standarisasi ukuran ikon agar layout antarmuka selalu stabil dan rapi di semua ukuran layar.

---

## 1. Rasio Aspek (Aspect Ratio) & Fit

Selalu letakkan gambar di dalam kontainer berukuran terkontrol dengan `overflow-hidden` dan `object-cover` untuk mencegah distorsi atau pergeseran layout (*layout shift*).

| Rasio Aspek | Tailwind Class | Penggunaan Standar |
| :--- | :--- | :--- |
| **16:9** | `aspect-video` | Video player, card thumbnail blog, thumbnail tutorial |
| **4:3** | `aspect-[4/3]` | Foto produk e-commerce, galeri foto artikel |
| **1:1** | `aspect-square` | Foto profil (avatar), cover album, produk katalog kotak |
| **21:9** | `aspect-[21/9]` | Hero banner lanskap lebar, billboard promosi desktop |

### Penerapan Ideal:
```tsx
<div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
  <img
    src={imageUrl}
    alt={title}
    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
  />
</div>
```

---

## 2. Placeholder & Gambar Cadangan (Fallback Strategy)

Dilarang membiarkan gambar rusak (*broken image icon*) muncul ke layar pengguna jika URL gagal dimuat.

### 2.1 Avatar Fallback (Inisial Nama)
Ketika foto profil kosong atau gagal dimuat:
- Tampilkan inisial 1-2 huruf nama pengguna (misal: "John Doe" $\rightarrow$ `JD`).
- Gunakan background netral yang lembut dengan teks kontras tinggi:
  ```tsx
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-300">
    {getInitials(user.name)}
  </div>
  ```

### 2.2 Image Error Fallback
- Gunakan state `hasError: boolean` pada elemen `<img>`:
  - Jika error, tampilkan kontainer abu-abu dengan ikon gambar silang atau placeholder svg ilustrasi.

---

## 3. Standarisasi Ukuran Ikon (Icon Sizing Matrix)

Gunakan library ikon konsisten (misal: `lucide-react`, `heroicons`, atau `tabler-icons`). Hindari ukuran sembarang; ikuti matriks konteks berikut:

| Konteks Penggunaan | Dimensi (px) | Tailwind Size | Stroke Width |
| :--- | :--- | :--- | :--- |
| **Micro / Inline Tag** | 14px – 16px | `h-3.5 w-3.5` atau `h-4 w-4` | `stroke-[2]` |
| **Button Kecil (sm)** | 16px | `h-4 w-4` | `stroke-[2]` |
| **Button Standar (md) & Form Input** | 20px | `h-5 w-5` | `stroke-[1.75]` |
| **Navbar & Header Action** | 20px – 24px | `h-5 w-5` atau `h-6 w-6` | `stroke-[1.75]` |
| **Mobile Bottom Bar Item** | 24px | `h-6 w-6` | `stroke-[1.5]` |
| **Card Feature Highlight** | 32px – 40px | `h-8 w-8` atau `h-10 w-10` | `stroke-[1.5]` |
| **Empty State Hero Icon** | 48px – 64px | `h-12 w-12` atau `h-16 w-16` | `stroke-[1.25]` |

> **Catatan Ikon**: Selalu sertakan `aria-hidden="true"` pada ikon dekoratif dan sertakan `shrink-0` pada flex container agar ikon tidak menyusut saat teks memanjang.
