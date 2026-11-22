# Modul 08: Tema & Multi-Bahasa (Theme & i18n)

Modul ini mengatur tata cara adaptasi antarmuka terhadap pergantian tema (Light/Dark Mode) serta kesiapan multi-bahasa (Internationalization / Localization).

---

## 1. Sistem Tema: Dark Mode & Light Mode

Setiap komponen yang dihasilkan harus mendukung skema warna ganda tanpa menyebabkan *Flash of Unstyled Content (FOUC)*.

### 1.1 Tabel Pasangan Warna Tema (Theme Mapping)

| Elemen UI | Mode Terang (Light) | Mode Gelap (Dark) | Tailwind Classes |
| :--- | :--- | :--- | :--- |
| **App Background** | `#F8FAFC` (`slate-50`) | `#020617` (`slate-950`) | `bg-slate-50 dark:bg-slate-950` |
| **Card / Surface** | `#FFFFFF` (`white`) | `#0F172A` (`slate-900`) | `bg-white dark:bg-slate-900` |
| **Card Elevated** | `#FFFFFF` + `shadow-md` | `#1E293B` (`slate-800`) | `bg-white dark:bg-slate-800` |
| **Border Garis** | `#E2E8F0` (`slate-200`)| `#1E293B` (`slate-800`)| `border-slate-200 dark:border-slate-800` |
| **Teks Utama** | `#0F172A` (`slate-900`)| `#F8FAFC` (`slate-50`) | `text-slate-900 dark:text-slate-50` |
| **Teks Sekunder** | `#64748B` (`slate-500`)| `#94A3B8` (`slate-400`)| `text-slate-500 dark:text-slate-400` |
| **Input Surface** | `#FFFFFF` | `#0F172A` | `bg-white dark:bg-slate-900` |

---

## 2. Kesiapan Multi-Bahasa (i18n Readiness)

### 2.1 Larangan Hardcoded Strings
Dilarang menanam string teks bahasa secara langsung (*hardcoded*) di dalam komponen yang reusable.
- Gunakan props teks fleksibel atau hook terjemahan (seperti `t("key")` dari `react-i18next` / `next-intl`):

```tsx
// ❌ HINDARI:
<button>Kirim Pesan</button>

// ✅ LEBIH BAIK (Reusable Component):
interface ActionButtonProps {
  label?: string; // Dapat dioper dari dictionary i18n
}
export const ActionButton = ({ label = "Submit" }: ActionButtonProps) => { ... }
```

### 2.2 Antisipasi Pemanjangan Teks (Text Expansion Buffer)
Teks dalam bahasa tertentu (seperti Bahasa Indonesia dan Jerman) rata-rata **20% hingga 35% lebih panjang** daripada Bahasa Inggris.
* *Contoh*: "Save" (4 karakter) $\rightarrow$ "Simpan Perubahan" (16 karakter).
* **Aturan Tata Letak**:
  1. **Hindari Lebar Statis**: Jangan gunakan lebar tombol kaku seperti `w-[100px]`. Gunakan `min-w-[100px] px-4` agar tombol dapat melebar secara dinamis.
  2. **Flex Wrapping**: Pada button group atau navigasi header, gunakan `flex-wrap` agar elemen tidak keluar dari layar (*overflow horizontal*) ketika teks lebih panjang.
  3. **Penanganan Truncation**: Jika teks harus dipotong dalam 1 baris, gunakan `truncate` dan sertakan atribut `title={fullText}` agar pengguna tetap dapat membaca teks lengkap saat kursor diarahkan.

### 2.3 Properti Logis Tata Letak (Logical Properties untuk LTR/RTL)
Jika proyek berpotensi mendukung bahasa dari kanan-ke-kiri (seperti Arab / Ibrani):
- Utamakan properti logis:
  - `start` / `end` daripada `left` / `right`
  - Tailwind: `ms-2` (margin-inline-start), `me-2` (margin-inline-end), `ps-4`, `pe-4`.
