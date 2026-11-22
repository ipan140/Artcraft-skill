# 🎨 ArtCraft Suite — AI Skills & Design Hub

Koleksi resmi 19 modul skill otomasi cerdas (*agent skills*) untuk seluruh ekosistem aplikasi **ArtCraft (Craft App Suite)**. Repositori ini memandu kecerdasan buatan (AI) untuk menghasilkan standar desain, kode, formula, model 3D, timeline audio/video, dan dokumen profesional siap pakai.

---

## 👤 Kepemilikan & Hak Cipta (Copyright)

```text
Copyright (c) 2026 Ivano Rossi. All rights reserved.
Developed for and compatible with the ArtCraft App Suite ecosystem.
Licensed under the ArtCraft Suite Protective End-User License (ArtCraft-PEUL).
```

* **Author & Maintainer**: **Ivano Rossi**
* **Ecosystem Platform**: ArtCraft Suite
* **Version**: 2.0.0 (Comprehensive Multi-App Release)

---

## 📚 Katalog 19 Skill Aplikasi ArtCraft

Setiap aplikasi memiliki folder mandiri yang memuat `config.md` (panel kendali teknis) dan `SKILL.md` (aturan inti AI):

| No | Aplikasi | Kategori | Fokus Utama & Spesifikasi |
| :---: | :--- | :--- | :--- |
| 1 | [Figcraft](./Figcraft) | UI/UX & Web | Desain komponen frontend, design tokens, responsive breakpoints, dark mode, dan a11y (WCAG AA). |
| 2 | [AniCraft](./AniCraft) | Animasi 2D | Animasi vektor 2D berbasis timeline, 12 prinsip animasi, graph editor, dan ekspor Lottie JSON/SVG. |
| 3 | [CADCraft](./CADCraft) | Teknik & Drafting | Gambar kerja 2D/3D standar ISO/ANSI, standarisasi layer (kontur, tersembunyi, sumbu), dan toleransi GD&T. |
| 4 | [CraftAnything](./CraftAnything) | Reverse Engineering | Dekonstruksi struktur website/aplikasi/game, inspeksi DOM/API, dan rekonstruksi kode bersih. |
| 5 | [DeckCraft](./DeckCraft) | Presentasi & Slide | Slide eksekutif 16:9, storytelling Minto Pyramid, prinsip *cognitive ease* (1 ide per slide), dan speaker notes. |
| 6 | [DesignCraft](./DesignCraft) | Publikasi & Cetak | Tata letak majalah/buku/brosur, baseline grid, facing pages, gutter margin jilid, bleed 3mm, dan separasi CMYK. |
| 7 | [EffectCraft](./EffectCraft) | VFX & Compositing | Compositing berbasis graf simpul (*node graph*), green screen despill, tracking 3D, dan pipeline linear 32-bit float. |
| 8 | [FilmCraft](./FilmCraft) | Video Editing | Editing NLE, potongan berirama (J-Cut, L-Cut, cutting on action), color grading Rec.709, dan audio ducking. |
| 9 | [GridCraft](./GridCraft) | Spreadsheet & Data | Permodelan keuangan 3-sheet, formula modern (`XLOOKUP`, `LET`, `LAMBDA`), dan formatting dinamis. |
| 10 | [LightCraft](./LightCraft) | Foto RAW | Pengembangan foto RAW non-destruktif, tone curves (S-Curve), koreksi distorsi lensa, dan kalibrasi HSL. |
| 11 | [MailCraft](./MailCraft) | Surel & Kalender | Korespondensi surel bisnis berbobot eksekutif, action items, batas waktu tegas, dan payload kalender `.ics`. |
| 12 | [MaterialCraft](./MaterialCraft) | 3D PBR Shaders | Material prosedural resolusi tak terbatas berbasis node graph (Albedo, Roughness, Metallic, Normal, Height). |
| 13 | [PdfCraft](./PdfCraft) | PDF Workbench | Form PDF interaktif, proteksi enkripsi AES-256, redaksi permanen data sensitif, dan standar arsip PDF/A-2b. |
| 14 | [PhotoCraft](./PhotoCraft) | Image Editing | Manipulasi raster berbasis layer non-destruktif, frequency separation retouching kulit, dan layer masks. |
| 15 | [SolidCraft](./SolidCraft) | Parametric 3D CAD | Pemodelan benda padat (B-Rep), sketsa 2D berkendala penuh (*fully constrained*), dan ekspor STEP/STL CNC. |
| 16 | [SoundCraft](./SoundCraft) | Audio & DAW | Perekaman suara, vocal signal chain (subtractive EQ, de-esser, comp), multitrack stems, dan -14.0 LUFS mastering. |
| 17 | [TextureCraft](./TextureCraft) | Pengecatan 3D | Melukis tekstur langsung pada mesh 3D, UV UDIM multi-tile, baking peta AO/Curvature, dan efek *edge-wear*. |
| 18 | [VectorCraft](./VectorCraft) | Ilustrasi Vektor | Menggambar kurva bezier presisi, jumlah anchor point minimal, operasi boolean path, dan ekspor SVG/EPS. |
| 19 | [WordCraft](./WordCraft) | Pengolah Kata | Laporan korporat formal, bab hirarkis Heading 1-3, Executive Summary, Daftar Isi otomatis, dan sitasi APA 7th. |

---

## 🚀 Panduan Tata Cara Penggunaan (How to Use)

### 1. Cara Mengarahkan AI ke Skill Tertentu
Saat Anda memberikan instruksi kepada AI assistant, sebutkan nama aplikasinya secara spesifik. AI akan secara otomatis memuat pedoman dari `SKILL.md` aplikasi bersangkutan:

* **Contoh untuk Figcraft**:
  > *"Gunakan standar **Figcraft** untuk membuat komponen kartu keranjang belanja e-commerce lengkap dengan dark mode dan skeleton loading."*
* **Contoh untuk DeckCraft**:
  > *"Susun outline presentasi 7 slide dengan **DeckCraft** tentang strategi peluncuran produk baru, lengkapi dengan Action Titles dan Speaker Notes."*
* **Contoh untuk SolidCraft**:
  > *"Buat langkah-langkah pemodelan parametrik benda padat di **SolidCraft** untuk casing remote kontrol plastik dengan draft angle 2 derajat."*
* **Contoh untuk GridCraft**:
  > *"Tuliskan formula **GridCraft** menggunakan `XLOOKUP` dan `SUMIFS` untuk menghitung total komisi penjualan bulanan per agen."*

### 2. Mengubah Konfigurasi Proyek (`config.md`)
Sebelum memulai pekerjaan besar pada salah satu aplikasi, Anda dapat membuka berkas `config.md` pada folder aplikasi tersebut untuk mengatur saklar teknis:
- **Di FilmCraft**: Ubah `project_format` ke `"vertical_reels"` jika ingin membuat video format TikTok/Reels 9:16.
- **Di CADCraft**: Ubah `standard` ke `"ansi"` jika proyek menggunakan satuan inci (imperial).
- **Di Figcraft**: Ubah `target_device` ke `"mobile"` jika fokus mendesain antarmuka ponsel.

### 3. Penempatan di Repositori Proyek (Auto-Discovery)
Jika Anda memiliki proyek koding atau desain tertentu di tempat lain dan ingin Antigravity membaca salah satu skill ini secara otomatis:
- Cukup salin folder skill pilihan Anda ke dalam direktori `.agents/skills/<NamaFolder>` pada root repositori proyek Anda.

---

## 🔒 Lisensi & Keamanan ArtCraft (ArtCraft License Terms)

Repositori ini dilindungi di bawah **ArtCraft Suite Protective End-User License (ArtCraft-PEUL)**:

1. **Hak Cipta Pengguna**:
   - Seluruh arsitektur skill, dokumentasi modul, konfigurasi, dan kurasi dibuat oleh **Ivano Rossi** (2026).
2. **Penggunaan yang Diizinkan**:
   - Anda berhak menggunakan, memodifikasi, dan mengintegrasikan seluruh skill ini untuk keperluan pribadi, kreatif, edukasi, maupun komersial bersama ekosistem ArtCraft Suite.
3. **Integritas & Keamanan Sistem**:
   - Dilarang menyalahgunakan skill ini untuk merusak sistem berkas, merekayasa instruksi berbahaya (*prompt injection*), atau menghapus atribusi hak cipta tanpa izin tertulis.
4. **Kepatuhan Merek Dagang**:
   - Nama *ArtCraft*, *FigCraft*, *AniCraft*, *FilmCraft*, dan aplikasi terkait adalah merek dagang dari masing-masing pemilik ekosistem ArtCraft. Penggunaan di sini adalah sebagai referensi interoperabilitas otomasi AI.

Untuk rincian lengkap teks hukum lisensi, silakan baca berkas [LICENSE](./LICENSE).
