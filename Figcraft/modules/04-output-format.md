# Modul 04: Format Output Standar AI

Modul ini mendikte bagaimana AI harus memformat dan menyajikan respon ketika menghasilkan kode komponen atau solusi arsitektur.

---

## 1. Struktur Respon Wajib

Setiap kali AI menghasilkan kode berdasarkan skill ini, respon harus mengikuti urutan berikut:

1. **Ringkasan Singkat Solusi**: 1-2 kalimat menjelaskan apa yang dibuat dan profil perangkat yang ditargetkan.
2. **File Path Header**: Menyebutkan lokasi berkas yang disarankan secara jelas.
3. **Blok Kode Lengkap**: Kode bebas dari placeholder seperti `// tambahkan kode lain di sini...`; kode harus siap pakai (*production-ready*).
4. **Poin Keputusan Desain & Perangkat**: Penjelasan singkat mengapa token atau pola tertentu dipilih sesuai target perangkat.
5. **Checklist Kualitas & Aksesibilitas**: Daftar centang verifikasi kelayakan kode.

---

## 2. Template Output Markdown

Contoh format yang harus diikuti oleh AI:

````markdown
### 🚀 Implementasi: [Nama Komponen]
Target: `[Target Device dari config.md]` | Stack: `[Framework + Styling]`

#### Berkas: `src/components/[kategori]/[nama-komponen].tsx`

```tsx
import * as React from "react";
// ... kode lengkap tanpa pemotongan ...
```

#### 💡 Keputusan Teknis & Adaptasi Perangkat:
- **Device Adaptation**: Menerapkan touch target 48px dan `pb-safe` untuk optimasi profil mobile.
- **Tokens**: Menggunakan `primary-600` untuk kontras rasio WCAG AA dan `rounded-xl` untuk konsistensi card.
- **A11y**: Focus-visible ring aktif pada navigasi keyboard.

#### ✅ Checklist Verifikasi:
- [x] TypeScript strict type safety (tanpa `any`)
- [x] Mendukung Dark Mode (`dark:*`)
- [x] Touch target & spacing sesuai profil perangkat terpilih
- [x] Validasi ARIA & keyboard navigation
````

---

## 3. Larangan Khusus untuk AI
- **Dilarang Menyingkat Kode Inti**: Jangan menulis `/* tambahkan logic Anda sendiri */` untuk fungsi-fungsi utama yang diminta pengguna.
- **Dilarang Hardcoded Arbitrary Colors**: Jangan menghasilkan class seperti `bg-[#123456]` kecuali jika diminta secara eksplisit oleh pengguna.
- **Dilarang Mengabaikan `config.md`**: Selalu cek apakah modul terkait aktif sebelum menuliskan konvensinya.
