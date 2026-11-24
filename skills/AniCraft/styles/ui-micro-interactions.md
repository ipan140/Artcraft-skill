# Style Profile: UI Micro-Interactions & App State Transitions

Profil ini menetapkan aturan animasi mikro pada komponen antarmuka digital (*Micro-Interactions*), tombol morphing dinamis, saklar toggle, status loading interaktif, dan animasi ikon Lottie untuk aplikasi web dan mobile.

---

## 1. Parameter Waktu & Durasi Standar UI

- **Durasi Ideal Interaksi Mikro**:
  - Tombol Hover / Tap Feedback: $100\text{ ms} - 150\text{ ms}$
  - Ikon Morphing (Hamburger ke Cross 'X'): $250\text{ ms} - 350\text{ ms}$
  - Dialog Modal Pop-up / Drawer: $300\text{ ms} - 400\text{ ms}$
  - Skeleton Loader Pulse: $1200\text{ ms} - 1500\text{ ms}$ (Looping berkelanjutan)
- **Kurva Easing Wajib**:
  - Interaksi Masuk / Reaksi Cepat: `cubic-bezier(0.16, 1, 0.3, 1)` (Ultra Smooth Ease-Out).
  - Jangan gunakan transisi `linear` kaku untuk elemen UI manusiawi.

---

## 2. Kontrol Bobot & Ukuran Aset Lottie

- Seluruh animasi ikon UI harus diekspor dalam format **Lottie JSON** atau **dotLottie**:
  - Ukuran file JSON maksimal: $\le 25\text{ KB}$ per ikon.
  - Jumlah titik simpul kurva (*vertices*) maksimal $12$ titik per shape path untuk menjaga frame rate $60\text{ FPS}$ stabil pada perangkat ponsel kelas menengah.
- **Titik Poros (Anchor Point)**: Selalu posisikan tepat di pusat geometris $(50\%, 50\%)$ atau titik rotasi spesifik sebelum memasang keyframe putaran.

---

## 3. Dukungan Aksesibilitas Gerak (Prefers-Reduced-Motion)

- Setiap animasi UI wajib memiliki penanganan fallback:
  - Jika pengguna mengaktifkan pengaturan sistem `prefers-reduced-motion: reduce`: Ganti animasi translasi/rotasi dinamis dengan transisi memudar halus (*opacity fade 100ms*) atau matikan pergerakan sepenuhnya.
