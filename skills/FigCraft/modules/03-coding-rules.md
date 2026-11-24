# Modul 03: Aturan Koding (Coding Rules) & Aksesibilitas

Modul ini menetapkan aturan ketat penulisan kode, konvensi TypeScript, optimasi performa, dan pemenuhan standar aksesibilitas antarmuka.

---

## 1. Standar TypeScript

1. **Dilarang Menggunakan `any`**:
   - Selalu gunakan tipe eksplisit, generic, atau `unknown` jika tipe belum pasti.
2. **Discriminated Unions**:
   - Gunakan discriminated unions untuk state yang saling eksklusif (misal: `idle`, `loading`, `success`, `error`):
     ```typescript
     type AsyncState<T> =
       | { status: 'idle'; data: null; error: null }
       | { status: 'loading'; data: null; error: null }
       | { status: 'success'; data: T; error: null }
       | { status: 'error'; data: null; error: Error };
     ```
3. **Props Interface Naming**:
   - Berikan akhiran `Props` untuk setiap interface komponen (contoh: `ButtonProps`, `UserCardProps`).
   - Ekspor tipe props agar dapat digunakan kembali oleh komponen pembungkus.

---

## 2. Prinsip Clean Code

- **Early Return**: Hindari nesting `if-else` bertingkat; gunakan guard clauses.
- **Hindari Magic Numbers / Magic Strings**: Pindahkan angka atau status tetap ke konstanta atau enum bertipe string.
- **Penamaan Variabel & Fungsi**:
  - Boolean: diawali `is`, `has`, `should`, atau `can` (contoh: `isLoading`, `hasPermission`).
  - Event Handlers: diawali `handle` pada implementasi (`handleClick`) dan `on` pada props (`onClick`).

---

## 3. Standar Aksesibilitas (WCAG AA)

1. **Semantic HTML**:
   - Jangan gunakan `<div>` sebagai tombol atau link. Gunakan `<button>` untuk aksi dan `<a>` untuk navigasi.
2. **Focus Rings**:
   - Setiap elemen yang dapat menerima fokus keyboard **wajib** memiliki styling focus ring yang terlihat jelas:
     ```css
     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
     ```
3. **Labels & ARIA**:
   - Tombol yang hanya berupa ikon **wajib** memiliki `aria-label="Deskripsi fungsi"`.
   - Form input wajib terhubung dengan elemen `<label>` melalui atribut `htmlFor` dan `id`.
4. **Warna & Kontras**:
   - Rasio kontras teks terhadap background minimal **4.5:1** untuk teks normal dan **3:1** untuk teks besar (WCAG AA).

---

## 4. Performa & Optimasi

- Hindari inline function anonim di props komponen list besar untuk mencegah re-render yang tidak perlu.
- Gunakan lazy loading (`React.lazy` atau `dynamic import`) untuk komponen besar yang tidak langsung terlihat di awal (seperti Modal, Drawer, Chart).
- Terapkan `loading="lazy"` dan tentukan `width` / `height` eksplisit pada elemen gambar untuk mencegah Cumulative Layout Shift (CLS).
