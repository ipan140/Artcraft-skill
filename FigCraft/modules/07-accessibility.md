# Modul 07: Aksesibilitas (Accessibility / a11y)

Modul ini menetapkan pedoman kepatuhan aksesibilitas berstandar **WCAG 2.1 Level AA** agar antarmuka dapat dioperasikan secara optimal oleh semua pengguna, termasuk pengguna dengan alat bantu pembaca layar (*screen reader*) dan navigasi keyboard.

---

## 1. Rasio Kontras Warna (Color Contrast)

Semua perpaduan warna latar (background) dan teks harus mematuhi rasio kontras berikut:

* **Teks Normal (< 18px)**: Rasio kontras minimal **4.5 : 1** terhadap latar belakangnya.
* **Teks Besar ( $\ge$ 18px tebal atau $\ge$ 24px reguler)**: Rasio kontras minimal **3.0 : 1**.
* **Elemen UI Interaktif & Border Form**: Rasio kontras minimal **3.0 : 1** terhadap latar sekitarnya.

### Pantangan Warna:
- Dilarang menggunakan teks abu-abu terang (`text-slate-400` atau lebih terang) di atas latar putih untuk teks informasi penting.
- Dilarang hanya mengandalkan warna untuk menyampaikan status (misal: hanya warna merah tanpa teks atau ikon penjelas pada pesan error).

---

## 2. Navigasi Keyboard Penuh

Semua fitur dan elemen interaktif harus dapat dioperasikan tanpa menggunakan mouse:

| Tombol Keyboard | Perilaku Wajib |
| :--- | :--- |
| `Tab` | Pindah fokus ke elemen interaktif berikutnya dalam urutan logis DOM. |
| `Shift + Tab` | Pindah fokus ke elemen interaktif sebelumnya. |
| `Enter` | Menjalankan aksi tombol utama, submit form, atau membuka link. |
| `Space` | Menekan tombol, toggle checkbox/switch, atau scroll halaman. |
| `Escape` | Menutup modal dialog, drawer, dropdown menu, atau popover tooltip. |
| `Arrow Keys` | Berpindah opsi di dalam listbox, radio group, atau navigasi tab panel. |

---

## 3. Indikator Fokus yang Terlihat Jelas (Visible Focus Rings)

Dilarang keras menghilangkan focus outline dengan `outline-none` tanpa menyediakan styling pengganti!

### Standar Focus Ring:
Gunakan kelas utilitas kombinasi ring dengan offset agar terlihat kontras di mode terang maupun gelap:

```css
/* Tailwind Class Standar */
focus-visible:outline-none 
focus-visible:ring-2 
focus-visible:ring-primary-500 
focus-visible:ring-offset-2 
dark:focus-visible:ring-offset-slate-900
```

---

## 4. Aturan Tombol Icon-Only & ARIA Labels

Setiap tombol yang hanya menampilkan ikon grafis tanpa teks visual **WAJIB** memiliki atribut `aria-label`:

```tsx
// ❌ SALAH: Pembaca layar tidak dapat membacanya
<button onClick={handleDelete}>
  <TrashIcon className="h-5 w-5" />
</button>

// ✅ BENAR:
<button
  type="button"
  onClick={handleDelete}
  aria-label="Hapus item dari keranjang"
  className="rounded-lg p-2 text-slate-500 hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-500"
>
  <TrashIcon className="h-5 w-5" aria-hidden="true" />
</button>
```

---

## 5. Struktur Semantik & Label Form

1. **Gunakan Elemen Asli (Native Semantic)**:
   - Gunakan `<button>` bukan `<div onClick=...>`
   - Gunakan `<a>` dengan atribut `href` untuk navigasi antar halaman.
   - Gunakan `<nav>`, `<header>`, `<main>`, `<aside>`, dan `<footer>` sebagai landmark struktur halaman.
2. **Keterkaitan Form**:
   - Selalu pasangkan `<label htmlFor="id_input">` dengan `<input id="id_input">`.
   - Hubungkan pesan error dengan input menggunakan `aria-describedby="id_error"` dan `aria-invalid="true"`.
