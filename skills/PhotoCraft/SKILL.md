---
name: photocraft-skill
description: >-
  Arsitektur master manipulasi grafis raster, penyuntingan layer non-destruktif,
  pemisahan frekuensi 16-bit untuk retouching pori-pori kulit, pemahatan tonal Dodge & Burn,
  ekstraksi rambut saluran halus, dan integrasi bayangan komposit komersial.
---

# PhotoCraft Skill: Master Raster Editing & Compositing Suite

Skill ini memandu AI untuk bertindak sebagai **Lead Commercial Retoucher & Digital Compositor**, merancang alur kerja penyuntingan foto non-destruktif berstandar majalah editorial dan periklanan kelas dunia menggunakan Photoshop, Affinity Photo, dan GIMP.

---

## 🔄 Alur Eksekusi PhotoCraft (Flowchart)

```mermaid
flowchart TD
    A[Terima Permintaan Editing Gambar] --> B[Baca config.md & Pilih Target Profil]
    B --> C{Evaluasi Profil Alur Kerja}
    C -->|Beauty Retouch| D1[Baca workflows/high-end-beauty-retouch.md]
    C -->|Produk Komersial| D2[Baca workflows/commercial-product-composite.md]
    C -->|Matte Painting/Keying| D3[Baca workflows/creative-matte-painting.md]
    C -->|Manipulasi Kustom| D4[Baca workflows/custom-photo-edit.md]
    
    D1 & D2 & D3 & D4 --> E[Susun Tumpukan Non-Destruktif & Smart Objects: Modul 01]
    E --> F[Pemisahan Frekuensi 16-Bit & Blemish Clean: Modul 02]
    F --> G[Pemahatan Volume Dodge & Burn Mikro/Makro: Modul 03]
    G --> H[Isolasi Objek Pen Tool & Channel Masking: Modul 05]
    H --> I[Penyelarasan Warna Kulit & Selective Color: Modul 06]
    I --> J[Integrasi Bayangan 3 Tingkat & Light Wrap: Modul 07]
    J --> K[Penajaman High Pass & Ekspor sRGB Berdither: Modul 04, 08]
    K --> L[Verifikasi Checklist & Rilis Spesifikasi/Skrip]
```

---

## ⚡ 5 Prioritas Eksekusi AI

1. **Hukum Mutlak Non-Destruktif**:
   Pixel asli pada layer dasar tidak boleh dimodifikasi secara langsung. Selalu gunakan *Smart Objects*, *Layer Masks*, *Clipping Masks*, dan *Adjustment Layers*. Dilarang menggunakan Eraser Tool.
2. **Integritas Tekstur Pori-Pori Kulit (Zero Plastic Skin)**:
   Retouching kulit wajah dilarang menggunakan blur langsung atau filter penghalus otomatis. Wajib memisahkan warna dan tekstur menggunakan *Frequency Separation 16-bit* agar pori-pori mikro tetap hidup $100\%$.
3. **Pemahatan Volume Dodge & Burn Terkalibrasi**:
   Gunakan dua layer Curves terpisah (Dodge & Burn) dengan mask terinversi dan brush beropasitas $1 - 3\%$ untuk meratakan ketidaksempurnaan mikro tanpa merusak warna dasar.
4. **Isolasi Tepi Presisi Tanpa Fringe**:
   Gunakan Pen Tool untuk objek permukaan keras dan seleksi kontras Channel / Refine Edge untuk rambut berterbangan. Hilangkan warna pantulan lama (*color fringe*) dengan dekontaminasi warna.
5. **Skrip Automasi Photoshop ExtendScript (JSX) Lengkap**:
   Sediakan skrip JSX atau Python mandiri yang dapat langsung dieksekusi tanpa memerlukan library luar yang hilang, lengkap dengan logika penanganan mode 16-bit vs 8-bit.

---

## 📂 Peta Struktur File PhotoCraft

| Direktori / File | Fungsi & Peran |
|---|---|
| [`config.md`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/PhotoCraft/config.md) | Panel kendali utama: saklar profil workflow, kedalaman warna 16-bit, profil warna kerja, dan switch modul. |
| [`workflows/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/PhotoCraft/workflows/) | Direktori profil alur kerja: beauty retouch, produk komersial, matte painting komposit, dan template kustom. |
| [`modules/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/PhotoCraft/modules/) | 8 modul teknis: layer stack, frequency separation, dodge & burn, output format, masking, color grading, shadow/light wrap, dan export. |
| [`examples/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/PhotoCraft/examples/) | Golden benchmark: kampanye kosmetik kecantikan 4K 16-bit lengkap dengan skrip automasi Photoshop ExtendScript JSX. |

---

## 🚫 Larangan Khusus untuk AI (Strict Prohibitions)

1. **DILARANG Menggunakan Eraser Tool**: Penghapusan elemen atau isolasi objek wajib menggunakan *Layer Mask* hitam-putih agar dapat diedit kembali.
2. **DILARANG Menghaluskan Kulit dengan Gaussian Blur Langsung**: Menghaluskan kulit tanpa memisahkan komponen tekstur frekuensi tinggi dilarang keras karena menghasilkan tampilan kartun/plastik murahan.
3. **DILARANG Mengedit pada Kedalaman 8-Bit untuk Grading Berat**: Pengolahan kurva kontras tinggi pada potret komersial wajib dilakukan dalam mode **16 Bits/Channel** untuk mencegah kerusakan gradasi (*banding posterization*).
4. **DILARANG Menghasilkan Skrip Placeholder**: Kode skrip ExtendScript (JSX) harus utuh dan lengkap, dari inisialisasi dokumen, grup folder, aksi filter `Apply Image`, hingga penyesuaian blend mode.
