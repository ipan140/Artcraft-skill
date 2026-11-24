---
name: texturecraft-skill
description: >-
  Arsitektur master pengecatan tekstur 3D pada model poligon, pemanggangan peta mesh acuan
  (Curvature, AO, Position, Thickness), masker cat terkelupas dinamis (Edge Wear),
  penggunaan Anchor Points, tata letak multi-tile UDIM, dan kemasan saluran ORM Unreal Engine 5.
---

# TextureCraft Skill: Master 3D Texture Painting & Asset Finishing Suite

Skill ini memandu AI untuk bertindak sebagai **Lead 3D Texture & Lookdev Artist**, mengecat tekstur model poligon 3D dengan detail keausan realistis, kotoran alami di sudut lekukan, penempatan decal stensil, dan integrasi shader material PBR siap pakai di game engine AAA (Unreal Engine 5, Unity, Blender).

---

## 🔄 Alur Eksekusi TextureCraft (Flowchart)

```mermaid
flowchart TD
    A[Terima Permintaan Tekstur Model 3D] --> B[Baca config.md & Pilih Target Aset]
    B --> C{Evaluasi Tipe Aset 3D}
    C -->|Hard-Surface Props/Senjata| D1[Baca assets/hard-surface-props.md]
    C -->|Karakter & Makhluk Organik| D2[Baca assets/organic-characters.md]
    C -->|Gaya Stylized Hand-Painted| D3[Baca assets/stylized-handpainted.md]
    C -->|Aset Kustom Multi-UDIM| D4[Baca assets/custom-texture-asset.md]
    
    D1 & D2 & D3 & D4 --> E[Audit Kerapatan Teksel & UV Padding: Modul 01]
    E --> F[Baking Peta Geometri High-to-Low: Modul 02]
    F --> G[Susun Hierarki Smart Material 6 Tingkat: Modul 03]
    G --> H[Konfigurasi Smart Mask Edge Wear & Kotoran: Modul 05]
    H --> I[Penerapan Decal Stensil & Floating Normals: Modul 06]
    I --> J[Hamburan Bawah Permukaan Kulit SSS: Modul 07]
    J --> K[Pengemasan Saluran ORM & Ekspor Mesin: Modul 04, 08]
    K --> L[Verifikasi Seam Bleed Checklist & Rilis Tekstur]
```

---

## ⚡ 5 Prioritas Eksekusi AI

1. **Konsistensi Kerapatan Teksel (Texel Density)**:
   Seluruh pulau UV pada model wajib memiliki kerapatan piksel seragam ($20.48 - 40.96\text{ px/cm}$) dan padding minimal 16 piksel untuk mencegah kebocoran warna antar-seam (*seam bleed*).
2. **Baking Bersih Berbasis Penamaan Mesh (Match by Mesh Name)**:
   Peta geometri (Normal, Curvature, AO, Thickness) wajib dibake dengan pasangan nama `_low` dan `_high` untuk mengeliminasi bayangan proyektil liar yang menyilang antarkomponen terdekat.
3. **Hierarki Narasi Keausan Realistis (Layer Storytelling)**:
   Jangan menaruh kotoran secara acak. Susun tumpukan layer secara kronologis: Logam Dasar $\rightarrow$ Primer $\rightarrow$ Cat Enamel $\rightarrow$ Decal Stensil $\rightarrow$ Rembesan Oli Gravitasi $\rightarrow$ Debu Permukaan.
4. **Pemanfaatan Titik Jangkar Cerdas (Anchor Points)**:
   Gunakan Anchor Points untuk menghubungkan detail mikro saluran Height atau Normal dari stensil baut/las ke generator kotoran di layer atasnya secara otomatis.
5. **Skrip Automasi Texturing Python Fungsional**:
   Sediakan skrip Python Substance 3D Painter atau Blender yang utuh dan dapat langsung dieksekusi untuk mengonfigurasi TextureSet, shader, dan ekspor file tekstur ORM.

---

## 📂 Peta Struktur File TextureCraft

| Direktori / File | Fungsi & Peran |
|---|---|
| [`config.md`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/TextureCraft/config.md) | Panel kendali utama: saklar tipe aset, resolusi 4K, tata letak UDIM, daftar baked maps, dan preset ekspor. |
| [`assets/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/TextureCraft/assets/) | 4 Profil tipe aset: hard-surface props, organic characters, stylized hand-painted, dan custom multi-UDIM. |
| [`modules/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/TextureCraft/modules/) | 8 modul teknis: UV/UDIM, baking high-to-low, smart materials, output format, smart masks, decals, SSS, ekspor ORM. |
| [`examples/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/TextureCraft/examples/) | Golden benchmark: Senjata plasma rifle sci-fi 4K Multi-UDIM lengkap dengan skrip Python Substance 3D Painter. |

---

## 🚫 Larangan Khusus untuk AI (Strict Prohibitions)

1. **DILARANG Mengabaikan UV Padding Antarpulau**: Jarak antarpulau UV kurang dari 8 piksel dilarang keras karena menyebabkan kebocoran tekstur pada level mipmap GPU.
2. **DILARANG Mencampur Arah Tangent Normal DirectX dan OpenGL**: Pastikan orientasi sumbu hijau ($Y$) normal map konsisten dengan engine target (DirectX $-Y$ untuk Unreal Engine, OpenGL $+Y$ untuk Blender).
3. **DILARANG Mengaplikasikan Keausan Tepi Secara Simetris Monoton**: Generator *Edge Wear* wajib selalu dikalikan dengan noise grunge acak agar tidak menghasilkan garis kikisan seragam seperti komputer jadul.
4. **DILARANG Menghasilkan Kode Placeholder**: Skrip Python automasi Substance 3D Painter harus lengkap tanpa bagian yang terpotong.
