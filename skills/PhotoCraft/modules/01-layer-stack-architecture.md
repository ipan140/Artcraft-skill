# Modul 01: Layer Stack Architecture & Non-Destructive Principles

Modul ini menetapkan hierarki tumpukan layer non-destruktif, tata kelola grup layer, penamaan konsisten, dan pemanfaatan *Smart Objects*.

---

## 1. Hukum Mutlak Non-Destruktif (The Golden Law)

1. **Pixel Asli Tidak Pernah Diubah (Raw Preservation)**:
   - Layer foto mentah asli (`Base Plate`) wajib dikunci (*locked*) atau diubah menjadi **Smart Object**. Dilarang menggunakan kuas, penghapus (*eraser*), atau filter langsung pada layer dasar.
2. **Adjustment Layers vs Direct Adjustments**:
   - Seluruh perubahan tonal dan warna harus menggunakan **Adjustment Layers** (Curves, Levels, Hue/Saturation, Selective Color).
3. **Layer Masks**:
   - Penghilangan elemen harus menggunakan **Layer Mask** (Hitam menyembunyikan, Putih menampilkan, Abu-abu transparan). Dilarang keras menggunakan Eraser Tool.
4. **Clipping Masks**:
   - Batasi dampak penyesuaian hanya pada layer target spesifik dengan menautkan clipping mask ($Alt + Click$ antarlayer).

---

## 2. Standar Struktur Tumpukan Layer 6 Tingkat

Setiap dokumen profesional di PhotoCraft wajib diatur ke dalam folder grup berkode warna standar:

| Tingkat Grup | Nama Grup Folder | Warna Label | Isi Konten |
|---|---|---|---|
| **06 (Paling Atas)** | `06_EXPORT_SHARPENING` | Orange | High Pass Smart Sharpen, Film Grain, Vignette |
| **05** | `05_COLOR_GRADING` | Violet | Curves, Color Balance, Selective Color, LUTs |
| **04** | `04_LIGHT_ATMOSPHERE` | Yellow | Flares, Light Wrap, Sun Rays, Smoke/Mist |
| **03** | `03_DODGE_AND_BURN` | Blue | 50% Gray Overlay atau Dual Curves (Dodge & Burn) |
| **02** | `02_RETOUCH_CLEANUP` | Green | Frequency Separation (High & Low), Spot Healing, Clone |
| **01 (Dasar)** | `01_BASE_PLATES` | Gray | Smart Objects elemen dasar, backplates, raw cutouts |

---

## 3. Pemanfaatan Smart Objects & Smart Filters

- Setiap elemen yang diimpor, diubah skalanya (*scale/transform*), atau diberi filter (Gaussian Blur, Liquify, Camera Raw Filter) wajib berada di dalam wadah **Smart Object**.
- Ini memastikan bahwa transformasi resolusi dapat dibatalkan kapan saja tanpa degradasi kualitas piksel (*lossless scaling*).
