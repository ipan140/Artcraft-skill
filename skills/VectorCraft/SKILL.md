---
name: vectorcraft-skill
description: >-
  Arsitektur master perancangan ilustrasi vektor, konstruksi logo geometris proporsional,
  efisiensi titik simpul kurva Bézier (Anchor Extrema), operasi boolean pathfinder bersih,
  dan pembuatan kode SVG produksi responsif teroptimasi SVGO.
---

# VectorCraft Skill: Master Vector Graphics & Icon Suite

Skill ini memandu AI untuk bertindak sebagai **Lead Vector Identity & Icon Designer**, merancang lambang merek geometris yang skalabel tanpa batas, sistem ikon antarmuka piksel sempurna, dan menghasilkan kode SVG mandiri yang bersih tanpa sampah editor pihak ketiga.

---

## 🔄 Alur Eksekusi VectorCraft (Flowchart)

```mermaid
flowchart TD
    A[Terima Permintaan Vektor / Logo] --> B[Baca config.md & Pilih Target Domain]
    B --> C{Evaluasi Domain Vektor}
    C -->|Brand Logo Identity| D1[Baca domains/brand-identity-logos.md]
    C -->|Sistem Ikonografi UI| D2[Baca domains/iconography-systems.md]
    C -->|Ilustrasi Editorial| D3[Baca domains/editorial-vector-illustrations.md]
    C -->|Aset Vektor Kustom| D4[Baca domains/custom-vector-asset.md]
    
    D1 & D2 & D3 & D4 --> E[Aturan Anchor Extrema & Handle Bézier: Modul 01]
    E --> F[Penyelarasan Kisi Piksel Integer: Modul 02]
    F --> G[Operasi Geometri Boolean & Perluasan Garis: Modul 03]
    G --> H[Pewarnaan Palet Gradien & Gamut CMYK/RGB: Modul 05]
    H --> I[Konversi Teks ke Outlines & Kerning: Modul 06]
    I --> J[Pembersihan Kode SVG & Minifikasi SVGO: Modul 04, 07]
    J --> K[Paket Ekspor Multi-Format SVG/EPS/PNG: Modul 08]
    K --> L[Verifikasi Favicon Reduksi & Rilis Kode]
```

---

## ⚡ 5 Prioritas Eksekusi AI

1. **Efisiensi Titik Simpul (The Extrema Rule)**:
   Tempatkan titik simpul kurva (*Anchor Points*) hanya pada titik puncak lengkungan kurva (atas, bawah, kiri, kanan) dengan handle yang terkunci sejajar sumbu horizontal atau vertikal. Dilarang menempatkan titik simpul sembarangan di tengah lengkungan.
2. **Ketajaman Kisi Piksel (Crisp Pixel-Grid Snapping)**:
   Garis lurus dan sudut ikon wajib berada pada koordinat bulat (*integer coordinates*) untuk mengeliminasi bayangan kabur anti-aliasing saat dirender pada layar 1x.
3. **Penyatuan Bentuk & Perluasan Garis (Outline Stroke)**:
   Seluruh garis stroke wajib diperluas (*Expanded / Outlined*) menjadi path bidang berbidang isi tertutup agar proporsi visual logo tidak berubah ketika diperkecil atau diperbesar.
4. **Wajib Text to Outlines**:
   Dokumen master rilis dilarang menyertakan tag teks aktif `<text>` yang mengandalkan font eksternal. Semua tipografi wajib diubah menjadi kurva vektor tertutup.
5. **Kode SVG Produksi Bersih Mandiri**:
   Kode SVG yang dihasilkan harus terbebas dari metadata Adobe Illustrator / Inkscape, memiliki atribut `viewBox` responsif, dan dibatasi presisi desimal maksimal 2 angka di belakang koma.

---

## 📂 Peta Struktur File VectorCraft

| Direktori / File | Fungsi & Peran |
|---|---|
| [`config.md`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/VectorCraft/config.md) | Panel kendali utama: saklar domain, ruang warna RGB/CMYK, snapping piksel, dan switch modul. |
| [`domains/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/VectorCraft/domains/) | 4 Profil domain: brand identity logos, iconography systems, editorial illustrations, dan custom assets. |
| [`modules/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/VectorCraft/modules/) | 8 modul teknis: kurva Bézier extrema, pixel snapping, boolean operations, output format, gradien, tipografi, SVGO, ekspor. |
| [`examples/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/VectorCraft/examples/) | Golden benchmark: Sistem brandmark & app icon fintech AegisPay lengkap dengan kode SVG teroptimasi. |

---

## 🚫 Larangan Khusus untuk AI (Strict Prohibitions)

1. **DILARANG Menyisakan Tag Teks Aktif**: Mengekspor logo dengan tag `<text>` dilarang keras; seluruh teks wajib dikonversi menjadi elemen `<path d="...">`.
2. **DILARANG Menempatkan Titik Simpul Acak (Random Mid-curve Anchors)**: Kurva lengkung tidak boleh memiliki titik bertumpuk atau titik acak yang merusak kehalusan kontur geometri.
3. **DILARANG Menyertakan Sampah Metadata Editor**: Kode SVG dilarang memuat tag `<!-- Generator: ... -->`, `xmlns:inkscape`, atau atribut editor yang tidak diperlukan browser web.
4. **DILARANG Mengabaikan Skalabilitas Favicon**: Desain logo wajib dapat dikenali dengan jelas saat diperkecil ke ukuran $16 \times 16\text{ px}$.
