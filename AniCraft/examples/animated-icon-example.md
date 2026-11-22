# Contoh Kasus: Animasi Ikon Hamburger ke Tombol 'X' (AniCraft)

Dokumen ini menunjukkan contoh konkret perancangan animasi mikro UI di AniCraft dari storyboard, tabel keyframe, hingga representasi kode Lottie JSON.

---

## 1. Konsep Animasi

* **Objek**: Ikon navigasi 3 garis (Hamburger Menu).
* **Aksi**: Berubah menjadi simbol silang penutup (Close 'X') saat menu terbuka.
* **Durasi**: `15 frame` (@ 30 fps = 0.5 detik).
* **Karakter Gerak**: Garis tengah memudar cepat (*fade out & shrink*), sementara garis atas dan bawah berputar 45° berlawanan arah menuju titik tengah.

---

## 2. Rincian Breakdown Timeline

| Layer | Properti | Frame 0 (Start) | Frame 6 (Anticipation) | Frame 15 (End / X State) | Easing Curve |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Garis Atas** | Posisi Y | `Y: 6px` | `Y: 8px` (Turun sedikit) | `Y: 12px` (Pusat) | `cubic-bezier(0.16, 1, 0.3, 1)` |
| | Rotasi | `0°` | `-5°` (Anticipation) | `45°` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Garis Tengah** | Skala X | `100%` | `110%` | `0%` (Menyusut ke tengah) | `ease-in` |
| | Opasitas | `100%` | `100%` | `0%` | `linear` |
| **Garis Bawah** | Posisi Y | `Y: 18px` | `Y: 16px` (Naik sedikit) | `Y: 12px` (Pusat) | `cubic-bezier(0.16, 1, 0.3, 1)` |
| | Rotasi | `0°` | `+5°` (Anticipation) | `-45°` | `cubic-bezier(0.16, 1, 0.3, 1)` |

---

## 3. Implementasi Kode Web (React + SVG CSS Animation)

Berikut adalah representasi kode komponen hasil animasi yang dapat langsung digunakan pada aplikasi frontend:

```tsx
import * as React from "react";

interface HamburgerProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const AnimatedMenuButton: React.FC<HamburgerProps> = ({
  isOpen,
  onToggle,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
      aria-expanded={isOpen}
      className={`relative flex h-10 w-10 items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-slate-200 dark:hover:bg-slate-800 ${className}`}
    >
      <div className="relative flex h-5 w-6 flex-col justify-between">
        {/* Garis Atas */}
        <span
          className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "translate-y-2 rotate-45" : "translate-y-0 rotate-0"
          }`}
        />

        {/* Garis Tengah */}
        <span
          className={`h-0.5 w-full rounded-full bg-current transition-all duration-200 ease-out ${
            isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
          }`}
        />

        {/* Garis Bawah */}
        <span
          className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "-translate-y-2.5 -rotate-45" : "translate-y-0 rotate-0"
          }`}
        />
      </div>
    </button>
  );
};

export default AnimatedMenuButton;
```

---

## 4. Evaluasi Kualitas Animasi
- **Timing Ringkas**: 300ms cukup cepat untuk interaksi UI sehingga pengguna tidak merasa tertahan (*responsive feel*).
- **Kurva Lembut**: Perputaran tidak kaku karena menggunakan easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Aksesibilitas**: Dilengkapi `aria-expanded` dan `aria-label` yang dinamis sesuai kondisi buka/tutup.
