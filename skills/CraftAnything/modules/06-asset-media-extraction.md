# Modul 06: Ekstraksi Token Desain & Media (Asset & Media Extraction)

Modul ini menetapkan metode pemanenan palet warna, tipografi, penulisan ikon SVG secara inline/mandiri, dan pengelolaan media dari software yang dibedah.

---

## 1. Pemanenan Token Desain (Design Tokens Harvesting)

Saat menganalisa stylesheet atau berkas bundel JS:
1. **Palet Warna**:
   - Cari variabel CSS root (`:root { --primary: #0969da; }`) atau konstanta hex.
   - Kategorisasikan ke dalam token semantik:
     - `brand-primary`: Warna aksi utama / tombol primer.
     - `surface-bg`: Warna kanvas latar belakang.
     - `surface-card`: Warna latar kartu atau panel kontainer.
     - `text-primary` & `text-muted`: Warna tipografi utama dan sekunder.
     - `border-color`: Warna garis pemisah.
2. **Skala Spacing & Radius**:
   - Identifikasi apakah desain menggunakan radius sudut membulat tajam (`rounded-md: 6px`) atau modern lembut (`rounded-2xl: 16px`).

---

## 2. Inlining & Normalisasi Ikon Vektor SVG

Hindari ketergantungan pada CDN gambar eksternal yang rawan rusak (*broken image link*). Gunakan salah satu dari 2 pendekatan:

1. **Paket Standar `lucide-react`**:
   - Petakan ikon asli ke nama padanan resmi di Lucide Icons (misal: tombol tambah $\rightarrow$ `<Plus className="w-4 h-4" />`, sampah $\rightarrow$ `<Trash2 className="w-4 h-4" />`, drag handle $\rightarrow$ `<GripVertical className="w-4 h-4" />`).
2. **Inline SVG Mandiri (Zero Dependency)**:
   - Jika ikon memiliki siluet khusus yang tidak ada di paket icon, tuliskan elemen `<svg>` inline lengkap dengan atribut `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, dan `strokeWidth={2}` agar warnanya mewarisi class Tailwind (`text-slate-500 hover:text-slate-900`).

---

## 3. Ekstraksi Lembar Sprite & Audio (Game / Media Target)
- **Sprite Sheet Slicing**:
  - Catat koordinat $X, Y$, lebar (*width*), dan tinggi (*height*) per frame animasi.
  - Buat helper function untuk merender frame: `ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`.
- **Efek Suara (Web Audio API Synthesizer)**:
  - Untuk game atau notifikasi sederhana, gunakan Web Audio API synthesizer (`OscillatorNode`) untuk menghasilkan suara beep/klik/menang secara mandiri tanpa memerlukan file `.mp3` eksternal.
