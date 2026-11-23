# Modul 07: Channel Packing & Texture Optimization

Modul ini menetapkan protokol penggabungan (*packing*) beberapa peta greyscale ke dalam saluran warna tunggal (RGBA) guna menghemat memori video (VRAM), mengurangi panggilan draw-call sampler tekstur, dan memaksimalkan performa game engine.

---

## 1. Standar Kemasan Unreal Engine (ORM / ORD Packing)

Format industri paling umum untuk Unreal Engine 5 dan game engine real-time:

| Saluran Tekstur (Channel) | Peta yang Disimpan | Ruang Warna | Keterangan |
|---|---|---|---|
| **Red (R)** | **Ambient Occlusion (AO)** | Linear / Non-Color | Digunakan untuk bayangan statis celah |
| **Green (G)** | **Roughness** | Linear / Non-Color | Saluran hijau memiliki resolusi kuantisasi tertinggi pada kompresi DXT1/BC1 |
| **Blue (B)** | **Metallic** | Linear / Non-Color | Mask biner isolator vs konduktor |
| **Alpha (A)** *(Opsional)* | **Displacement / Height** | Linear / Non-Color | Untuk tessellation atau parallax occlusion mapping |

> [!TIP]
> Saluran **Green (Hijau)** selalu diprioritaskan untuk **Roughness** karena skema kompresi GPU (seperti BC1/DXT1 dan BC7) memberikan bit kedalaman ekstra untuk saluran hijau untuk menyesuaikan sensitivitas mata manusia.

---

## 2. Standar Kemasan Unity HDRP (MaskMap)

| Saluran Tekstur | Peta yang Disimpan | Keterangan |
|---|---|---|
| **Red (R)** | **Metallic** | Nilai kelogaman |
| **Green (G)** | **Ambient Occlusion** | Bayangan mikro celah |
| **Blue (B)** | **Detail Mask / Height** | Masker blending tekstur detail mikro |
| **Alpha (A)** | **Smoothness (Inverted Roughness)** | $1.0 - \text{Roughness}$ |

---

## 3. Optimasi Resolusi & Mipmapping

1. **Power of Two ($2^n$)**: Resolusi tekstur wajib berupa kelipatan kuadrat: $1024 \times 1024$, $2048 \times 2048$, $4096 \times 4096$.
2. **Kaiser Mipmap Filter**: Gunakan filter Kaiser atau Lanczos saat mem-bake mipmap tekstur normal untuk mencegah hilangnya informasi vektor permukaan pada jarak jauh.
