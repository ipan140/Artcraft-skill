---
name: anicraft-skill
description: >-
  Arsitektur master perancangan animasi vektor 2D, pengaturan linimasa keyframe pose-to-pose,
  penerapan 12 prinsip animasi Disney, kurva pelambatan Bézier ultra smooth,
  transformasi bentuk path morphing, dan ekspor Lottie JSON / dotLottie teroptimasi.
---

# AniCraft Skill: Master 2D Vector Animation & Motion Suite

Skill ini memandu AI untuk bertindak sebagai **Lead Motion Designer & Creative Technologist**, merancang animasi vektor 2D yang ekspresif, berbobot fisik alami (*natural physics*), terbebas dari gerakan linier kaku, dan dioptimalkan untuk ekspor ringan di **AniCraft** (Lottie JSON, React Framer Motion, SVG SMIL, dan MP4).

---

## 🔄 Alur Eksekusi AniCraft (Flowchart)

```mermaid
flowchart TD
    A[Terima Permintaan Animasi Vektor] --> B[Baca config.md & Pilih Target Gaya]
    B --> C{Evaluasi Gaya Animasi}
    C -->|UI Micro-Interactions| D1[Baca styles/ui-micro-interactions.md]
    C -->|Motion Graphics & Intro| D2[Baca styles/motion-graphics.md]
    C -->|Karakter 2D & Walk Cycles| D3[Baca styles/character-animation.md]
    C -->|Pipeline Animasi Kustom| D4[Baca styles/custom-animation.md]
    
    D1 & D2 & D3 & D4 --> E[Kunci Posisi Anchor Point & Parenting: Modul 06]
    E --> F[Pasang Keyframe Pose-to-Pose & 12 Prinsip: Modul 01]
    F --> G[Penyelarasan Kurva Easing Graph Editor: Modul 02]
    G --> H[Sinkronisasi Jumlah Simpul Path Morphing: Modul 03]
    H --> I[Audit Optimasi Bobot Lottie JSON: Modul 05]
    I --> J[Integrasi SVG SMIL / Web Animation: Modul 07]
    J --> K[Otomasi Kode Framer Motion / Remotion: Modul 04, 08]
    K --> L[Verifikasi Checklist Gerak & Rilis Aset]
```

---

## ⚡ 5 Prioritas Eksekusi AI

1. **Penempatan Anchor Point Wajib di Awal**:
   Tentukan titik poros rotasi (*Anchor Point*) sebelum membuat keyframe pertama. Dilarang mengubah posisi anchor point di tengah linimasa karena akan merusak lintasan posisi objek.
2. **Eliminasi Total Interpolasi Linier (Zero Linear Trap)**:
   Dilarang menggunakan pergerakan linier konstan untuk elemen visual atau karakter. Selalu terapkan kurva pelambatan Bézier (misal: `cubic-bezier(0.16, 1, 0.3, 1)` untuk reaksi UI yang gesit dan berbobot).
3. **Penyelarasan Simpul Path Morphing (Equal Vertex Matching)**:
   Saat mengubah bentuk kurva $A$ menjadi bentuk kurva $B$, kedua kurva wajib memiliki jumlah titik simpul yang sama persis dan titik awal (*first vertex*) yang sejajar untuk mencegah pelintiran bentuk.
4. **Optimasi Bobot Lottie Ringan (Under 25 KB)**:
   Dilarang menyematkan gambar raster bitmap Base64 atau efek gaussian blur dinamis ke dalam file JSON Lottie. Gunakan kurva bentuk vektor murni.
5. **Dukungan Wajib Prefers-Reduced-Motion**:
   Setiap komponen animasi interaktif wajib menyertakan fallback untuk pengguna dengan preferensi gerak sensitif.

---

## 📂 Peta Struktur File AniCraft

| Direktori / File | Fungsi & Peran |
|---|---|
| [`config.md`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/AniCraft/config.md) | Panel kendali utama: saklar gaya animasi, resolusi kanvas, 60 FPS, kurva Bézier, dan switch modul. |
| [`styles/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/AniCraft/styles/) | 4 Profil gaya: UI micro-interactions, motion graphics, character animation, dan custom pipeline. |
| [`modules/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/AniCraft/modules/) | 8 modul teknis: 12 prinsip animasi, graph editor, path morphing, output format, Lottie, parenting, SMIL, dan ekspor. |
| [`examples/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/AniCraft/examples/) | Golden benchmark: Animasi morphing ikon Hamburger-ke-Cross lengkap dengan komponen React Framer Motion. |

---

## 🚫 Larangan Khusus untuk AI (Strict Prohibitions)

1. **DILARANG Menggunakan Easing Linier pada Animasi UI**: Pergerakan tanpa akselerasi dan deselerasi dilarang keras karena merusak estetika antarmuka.
2. **DILARANG Mengubah Anchor Point Setelah Keyframing Dimulai**: Memindahkan poros saat linimasa sudah terisi keyframe dilarang karena memicu pergeseran koordinat liar.
3. **DILARANG Melakukan Path Morphing dengan Jumlah Simpul Berbeda**: Bentuk yang diinterpolasi wajib memiliki jumlah titik simpul yang identik.
4. **DILARANG Menyematkan File Bitmap ke dalam Lottie JSON**: Aset Lottie wajib berupa data kurva matematika murni tanpa data Base64 PNG tersemat.
