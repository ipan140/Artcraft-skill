# 🎨 ArtCraft Suite — AI Skills & Design Hub

Koleksi panduan dan modul skill otomasi cerdas (*third-party agent skills*) independen untuk ekosistem aplikasi **ArtCraft (Craft App Suite)**. Dibuat untuk memandu kecerdasan buatan (AI) agar menghasilkan standar desain, kode, formula, model 3D, timeline audio/video, dan dokumen profesional yang presisi.

---

> [!IMPORTANT]
> ### ⚖️ Pernyataan Batasan Kepemilikan & Disclaimer
> * **Kepemilikan Ivano Rossi**: Hak cipta **HANYA** berlaku atas dokumen instruksi AI (*agent skills*), berkas panduan `SKILL.md`, saklar `config.md`, modul referensi, dan contoh kode yang ada di dalam repositori ini.
> * **Bukan Pemilik Aplikasi ArtCraft**: **Ivano Rossi BUKAN pemilik, bukan pembuat, dan tidak mengklaim kepemilikan apa pun atas perangkat lunak/aplikasi ArtCraft** (FigCraft, AniCraft, CADCraft, FilmCraft, DeckCraft, SolidCraft, dll.). Seluruh aplikasi, kode sumber software, logo, ikon, dan merek dagang ArtCraft adalah milik sah dan eksklusif dari developer resmi ArtCraft / Tangram Labs.
> * **Sifat Proyek**: Repositori ini murni merupakan alat bantu pendamping independen (*Third-Party AI Companion Tool*) agar pengguna mendapatkan hasil terbaik saat menggunakan aplikasi ArtCraft.

---

## 👤 Hak Cipta Modul Skill (Skill Copyright)

```text
Skill Collection Copyright (c) 2026 Ivano Rossi. All rights reserved.
Independent AI instructions designed for the ArtCraft App Suite.
Licensed under the ArtCraft Agent Skills End-User License (see LICENSE file).
```

* **Penulis / Kreator Koleksi Skill**: **Ivano Rossi**
* **Target Ekosistem yang Didukung**: ArtCraft App Suite (19 Aplikasi)
* **Versi Rilis**: 2.0.0 (Independent Community Skills Release)

---

## 📚 Katalog 19 Skill Aplikasi ArtCraft

Setiap aplikasi memiliki folder mandiri yang memuat `config.md` (panel kendali teknis) dan `SKILL.md` (aturan inti AI):

| No | Folder Skill | Aplikasi Terkait | Fokus Utama & Spesifikasi Panduan AI |
| :---: | :--- | :--- | :--- |
| 1 | [Figcraft](./Figcraft) | FigCraft | Desain komponen frontend, design tokens, responsive breakpoints, dark mode, dan a11y (WCAG AA). |
| 2 | [AniCraft](./AniCraft) | AniCraft | Animasi vektor 2D berbasis timeline, 12 prinsip animasi, graph editor, dan ekspor Lottie JSON/SVG. |
| 3 | [CADCraft](./CADCraft) | CADCraft | Gambar kerja 2D/3D standar ISO/ANSI, standarisasi layer (kontur, tersembunyi, sumbu), dan toleransi GD&T. |
| 4 | [CraftAnything](./CraftAnything) | Craft Anything | Dekonstruksi struktur website/aplikasi/game, inspeksi DOM/API, dan rekonstruksi kode bersih. |
| 5 | [DeckCraft](./DeckCraft) | DeckCraft | Slide eksekutif 16:9, storytelling Minto Pyramid, prinsip *cognitive ease* (1 ide per slide), dan speaker notes. |
| 6 | [DesignCraft](./DesignCraft) | DesignCraft | Tata letak majalah/buku/brosur, baseline grid, facing pages, gutter margin jilid, bleed 3mm, dan separasi CMYK. |
| 7 | [EffectCraft](./EffectCraft) | EffectCraft | Compositing berbasis graf simpul (*node graph*), green screen despill, tracking 3D, dan pipeline linear 32-bit float. |
| 8 | [FilmCraft](./FilmCraft) | FilmCraft | Editing NLE, potongan berirama (J-Cut, L-Cut, cutting on action), color grading Rec.709, dan audio ducking. |
| 9 | [GridCraft](./GridCraft) | GridCraft | Permodelan keuangan 3-sheet, formula modern (`XLOOKUP`, `LET`, `LAMBDA`), dan formatting dinamis. |
| 10 | [LightCraft](./LightCraft) | LightCraft | Pengembangan foto RAW non-destruktif, tone curves (S-Curve), koreksi distorsi lensa, dan kalibrasi HSL. |
| 11 | [MailCraft](./MailCraft) | MailCraft | Korespondensi surel bisnis berbobot eksekutif, action items, batas waktu tegas, dan payload kalender `.ics`. |
| 12 | [MaterialCraft](./MaterialCraft) | MaterialCraft | Material prosedural resolusi tak terbatas berbasis node graph (Albedo, Roughness, Metallic, Normal, Height). |
| 13 | [PdfCraft](./PdfCraft) | PdfCraft | Form PDF interaktif, proteksi enkripsi AES-256, redaksi permanen data sensitif, dan standar arsip PDF/A-2b. |
| 14 | [PhotoCraft](./PhotoCraft) | PhotoCraft | Manipulasi raster berbasis layer non-destruktif, frequency separation retouching kulit, dan layer masks. |
| 15 | [SolidCraft](./SolidCraft) | SolidCraft | Pemodelan benda padat (B-Rep), sketsa 2D berkendala penuh (*fully constrained*), dan ekspor STEP/STL CNC. |
| 16 | [SoundCraft](./SoundCraft) | SoundCraft | Perekaman suara, vocal signal chain (subtractive EQ, de-esser, comp), multitrack stems, dan -14.0 LUFS mastering. |
| 17 | [TextureCraft](./TextureCraft) | TextureCraft | Melukis tekstur langsung pada mesh 3D, UV UDIM multi-tile, baking peta AO/Curvature, dan efek *edge-wear*. |
| 18 | [VectorCraft](./VectorCraft) | VectorCraft | Menggambar kurva bezier presisi, jumlah anchor point minimal, operasi boolean path, dan ekspor SVG/EPS. |
| 19 | [WordCraft](./WordCraft) | WordCraft | Laporan korporat formal, bab hirarkis Heading 1-3, Executive Summary, Daftar Isi otomatis, dan sitasi APA 7th. |

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

## 🔒 Ketentuan Hukum & Lisensi (License)

Untuk membaca rincian teks hukum lengkap mengenai batasan hak cipta skill dan pengakuan merek dagang resmi ArtCraft, silakan buka berkas **[LICENSE](./LICENSE)**.
