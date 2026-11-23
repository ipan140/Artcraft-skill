# Workflow Profile: High-End Beauty & Portrait Retouching

Profil ini menetapkan panduan penyuntingan kecantikan tingkat tinggi (*commercial beauty & editorial portraiture*), mempertahankan tekstur pori-pori alami kulit, teknik pemisahan frekuensi 16-bit, dan pemahatan volume *micro dodge & burn*.

---

## 1. Standar Teknis Retouching Komersial

- **Ruang Warna & Bit Depth**: 16-bit ProPhoto RGB atau Adobe RGB 1998 untuk mencegah *banding* gradasi saat memanipulasi kurva warna kulit.
- **Prinsip Utama Tekstur**: Dilarang keras memburamkan (*blurring*) kulit secara langsung atau menggunakan filter penghalus otomatis yang menghasilkan efek "kulit lilin/plastik" (*plastic skin*).
- **Target Anatomi Retouching**:
  - Mata: Penajaman iris, pembersihan pembuluh darah sklera (*whites of the eyes*) dengan menyisakan bayangan alami kelopak mata atas.
  - Bibir: Pembersihan pecah-pecah mikro, penajaman cupid's bow, dan penambahan kilap spekular lembut.
  - Gigi: Desaturasi warna kuning secara selektif tanpa mengubah gigi menjadi putih kapur buatan.

---

## 2. Susunan Tumpukan Layer Retouching (Layer Stack)

```
[Group: Color Grading & Final Polish] (Curves, Selective Color, Grain)
        ↑
[Group: Eye & Teeth Enhancement] (Sclera desaturate, Iris contrast Curves)
        ↑
[Group: Dodge & Burn Sculpting] (Micro D&B untuk noda, Macro D&B untuk volume pipi/hidung)
        ↑
[Group: Frequency Separation 16-bit]
    ├── Layer: High Frequency (Texture, Pores, Fine Lines - Blend Mode: Linear Light)
    └── Layer: Low Frequency (Tones, Colors, Transitions - Blend Mode: Normal)
        ↑
[Layer: Raw Cleanup / Blemish Removal] (Healing Brush untuk jerawat/rambut liar)
        ↑
[Layer: Background / Base Plate] (Smart Object Original)
```

---

## 3. Batas Toleransi Dodge & Burn

- Gunakan dua layer **Curves** terpisah (satu dinaikkan $10\%$ untuk *Dodge*, satu diturunkan $10\%$ untuk *Burn*), dibalikkan ke mask hitam pekat (`Invert Mask`).
- Sapukan dengan kuas *Soft Round Brush* beropasitas $1 - 3\%$ dan alur (*flow*) $1\%$.
- Fokuskan mikro D&B untuk meratakan bercak gelap-terang tanpa merusak relief pori-pori mikro kulit.
