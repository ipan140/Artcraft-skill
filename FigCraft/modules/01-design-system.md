# Modul 01: Design System

Modul ini menetapkan standar fondasi visual antarmuka: warna, tipografi, grid, spacing, border-radius, dan elevasi.

---

## 1. Skala Warna (Color Palette)

### 1.1 Brand Primary & Neutral
- **Primary**: Warna utama interaksi (CTA, link, selected states).
  - Skala: `50` (#F0F7FF) s/d `900` (#0A2540). Default aksi: `primary-600` (#0969DA).
- **Neutral (Slate/Gray)**: Warna teks, border, background permukaan.
  - Background: `slate-50` (terang), `slate-950` (gelap/dark mode).
  - Surface/Card: `white` (terang), `slate-900` (gelap).
  - Border: `slate-200` (terang), `slate-800` (gelap).
  - Teks Utama: `slate-900` (terang), `slate-100` (gelap).
  - Teks Muted: `slate-500` (terang), `slate-400` (gelap).

### 1.2 Feedback / Semantic Colors
- **Success**: Emerald (`emerald-600` / `#059669`)
- **Warning**: Amber (`amber-600` / `#D97706`)
- **Danger**: Rose/Red (`red-600` / `#DC2626`)
- **Info**: Sky/Blue (`sky-600` / `#0284C7`)

---

## 2. Tipografi (Typography)

* **Font Utama**: `Inter, system-ui, -apple-system, sans-serif`
* **Font Monospace**: `JetBrains Mono, Menlo, monospace`

| Tingkat | Ukuran (px/rem) | Weight | Line Height | Penggunaan |
| :--- | :--- | :--- | :--- | :--- |
| `caption` | 12px / 0.75rem | 400 | 16px | Helper text, badge, timestamps |
| `body-sm` | 14px / 0.875rem | 400 / 500 | 20px | Button kecil, secondary text, input |
| `body-md` | 16px / 1.00rem | 400 / 500 | 24px | Paragraf default, form fields |
| `heading-sm`| 18px / 1.125rem | 600 | 28px | Card header, list group header |
| `heading-md`| 24px / 1.50rem | 600 | 32px | Sub-section header, modal title |
| `heading-lg`| 32px / 2.00rem | 700 | 38px | Page title, dashboard banner |
| `display` | 40px+ / 2.50rem+ | 700 / 800 | 48px | Landing page hero |

---

## 3. Spacing & Layout Grid (Kelipatan 4px)

Semua jarak (padding, margin, gap) **wajib** mengikuti skala 4px:
- `4px` (`gap-1` / `p-1`): Jarak elemen mikro (icon + teks).
- `8px` (`gap-2` / `p-2`): Jarak komponen kompak.
- `12px` (`gap-3` / `p-3`): Padding vertikal form input.
- `16px` (`gap-4` / `p-4`): Padding card standar, gutter kolom.
- `24px` (`gap-6` / `p-6`): Padding card besar, jarak antar kelompok konten.
- `32px` (`gap-8` / `p-8`): Margin antar section halaman.

---

## 4. Border Radius & Elevasi (Shadow)

- **Radius**:
  - `rounded-md` (6px): Form controls, small badges.
  - `rounded-lg` (8px): Button, interactive elements.
  - `rounded-xl` (12px): Standard Cards, dropdown panels.
  - `rounded-2xl` (16px): Modal dialogs, major container cards.
  - `rounded-full` (9999px): Avatar, pill tags.
- **Shadows**:
  - `shadow-sm`: Flat card border replacement.
  - `shadow-md`: Hover states, popovers, dropdowns.
  - `shadow-xl`: Modal dialogs, drawer menus.

---

## 5. Aturan Dark Mode
- Jangan gunakan warna hitam pekat `#000000` sebagai background utama; gunakan `slate-950` atau `zinc-900`.
- Kurangi kontras teks muted di dark mode agar tidak terlalu menyilaukan (gunakan `slate-400`).
- Pastikan semua border memiliki varian gelap (misal: `border-slate-200 dark:border-slate-800`).
