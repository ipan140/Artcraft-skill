# Contoh Kasus Ideal: Card Komponen Dinamis

Dokumen ini adalah acuan emas (*golden example*) bagi AI untuk meniru gaya penulisan kode, penanganan semua kondisi visual (states), rasio media, aksesibilitas, dan tema.

---

## 1. Input Desain (Permintaan User / Spesifikasi Figma)

```yaml
Component: "CourseCard"
Deskripsi:
  - Kartu kursus online interaktif dengan thumbnail 16:9 di atas.
  - Terdapat badge status kategori (misal: "Pemula" atau "Populer") di sudut gambar.
  - Menampilkan judul kursus (maksimal 2 baris), deskripsi singkat, nama instruktur beserta avatar inisial fallback.
  - Bagian bawah memiliki harga kursus dan tombol "Daftar Sekarang".
  - Wajib mendukung kondisi:
      1. Loading State (Skeleton pulse yang bentuknya persis sama)
      2. Image Fallback jika cover kursus rusak/kosong
      3. Dark mode, focus ring penuh, dan touch target ramah mobile/desktop
```

---

## 2. Output Kode Ideal (Production-Ready React + TypeScript + Tailwind)

```tsx
import * as React from "react";

// ============================================================================
// 1. Tipe Data Kontrak
// ============================================================================
export interface Instructor {
  name: string;
  avatarUrl?: string;
}

export interface CourseCardProps {
  id: string;
  title: string;
  description?: string;
  category: string;
  thumbnailUrl?: string;
  instructor: Instructor;
  price: number;
  formattedPrice?: string;
  isLoading?: boolean;
  onEnroll?: (courseId: string) => void;
  className?: string;
}

// ============================================================================
// 2. Komponen Skeleton (Loading State)
// ============================================================================
export const CourseCardSkeleton = () => {
  return (
    <div
      aria-busy="true"
      aria-label="Memuat kartu kursus..."
      className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-0 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Thumbnail 16:9 Skeleton */}
      <div className="aspect-video w-full animate-pulse bg-slate-200 dark:bg-slate-800" />

      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category Badge & Price Placeholder */}
        <div className="flex items-center justify-between gap-2">
          <div className="h-5 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="h-5 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Title Placeholder (2 lines) */}
        <div className="mt-3 space-y-2">
          <div className="h-5 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Instructor Placeholder */}
        <div className="mt-4 flex items-center gap-2.5">
          <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-24 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Button Placeholder */}
        <div className="mt-6 pt-2">
          <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. Komponen Utama (CourseCard)
// ============================================================================
export const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  category,
  thumbnailUrl,
  instructor,
  price,
  formattedPrice,
  isLoading = false,
  onEnroll,
  className = "",
}) => {
  const [imageError, setImageError] = React.useState(false);

  // Jika kondisi loading aktif, tampilkan skeleton loader yang presisi
  if (isLoading) {
    return <CourseCardSkeleton />;
  }

  // Fallback inisial nama instruktur
  const instructorInitials = instructor.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const displayPrice =
    formattedPrice ||
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {/* Media Thumbnail dengan Aspect-Video & Fallback */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {!imageError && thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-slate-400">
            <svg
              className="h-8 w-8 stroke-[1.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs">Gambar Pratinjau</span>
          </div>
        )}

        {/* Badge Kategori Terapung */}
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-slate-900/70 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-xs">
          {category}
        </span>
      </div>

      {/* Konten Kartu */}
      <div className="flex flex-1 flex-col p-5">
        {/* Harga */}
        <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          {displayPrice}
        </div>

        {/* Judul dengan Batasan 2 Baris (line-clamp-2) */}
        <h3
          title={title}
          className="mt-1.5 line-clamp-2 text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          {title}
        </h3>

        {/* Deskripsi Opsional */}
        {description && (
          <p className="mt-1.5 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}

        {/* Profil Instruktur dengan Fallback Avatar */}
        <div className="mt-4 flex items-center gap-2.5 pt-2">
          {instructor.avatarUrl ? (
            <img
              src={instructor.avatarUrl}
              alt={instructor.name}
              className="h-8 w-8 shrink-0 rounded-full object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-300"
            >
              {instructorInitials}
            </div>
          )}
          <span className="truncate text-xs font-medium text-slate-700 dark:text-slate-300">
            {instructor.name}
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-5 pt-2">
          <button
            type="button"
            onClick={() => onEnroll?.(id)}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white shadow-xs transition-colors duration-150 hover:bg-primary-700 active:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
```

---

## 3. Poin Evaluasi Kepatuhan Standar Modul

Perhatikan bagaimana komponen di atas memenuhi semua modul aturan:
1. **Modul 05 (States & Motion)**: Memiliki `CourseCardSkeleton` mandiri yang identik dengan layout asli, transisi hover halus `-translate-y-1` (200ms ease-out).
2. **Modul 06 (Assets & Media)**: Rasio `aspect-video` dengan `object-cover`, penanganan `onError` image fallback, dan avatar initial fallback.
3. **Modul 07 (Accessibility)**: Focus ring lengkap dengan `ring-offset`, tombol min-h 44px, semantic `<article>` dan `<h3>`, `aria-busy="true"` pada skeleton.
4. **Modul 08 (Theme & i18n)**: Pasangan class `dark:*` pada seluruh permukaan dan teks; format mata uang dinamis menggunakan `Intl.NumberFormat`.
