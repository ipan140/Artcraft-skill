# Workflow Profile: Custom Non-Destructive Editing Template

Template ini digunakan untuk mendefinisikan pipeline manipulasi gambar kustom baru (misalnya: restorasi foto kuno rusak, grading sinematik film poster, manipulasi surealis, atau batch color correction e-commerce).

---

## 1. Deklarasi Parameter Proyek

```yaml
project_name: "custom_photo_compositing"
workflow_type: "creative_manipulation"
canvas:
  width_px: 3840
  height_px: 2160
  resolution_dpi: 300
  color_mode: "rgb" # rgb | cmyk
  bit_depth: 16     # 16-bit disarankan untuk grading berat
  working_space: "Adobe RGB (1998)"

pipeline:
  non_destructive_enforced: true
  use_smart_filters: true
  enable_frequency_separation: false
  enable_dodge_burn: true
```

---

## 2. Struktur Tumpukan Layer Kustom

```
[Group: 05_Final Polish & Global Grade] (LUT, Film Grain, Global Contrast Curves)
        ↑
[Group: 04_Light & Atmosphere Integration] (Light Wrap, Flares, Color Cast Match)
        ↑
[Group: 03_Subject Adjustment Stack] (Clipping Masks: Curves, Selective Color, HSL)
        ↑
[Group: 02_Subject Isolation & Cutout] (Smart Object Base + Refined Layer Mask)
        ↑
[Group: 01_Background Plate & Cleanup] (Backplate + Generative Fill / Clone Stamp)
```

---

## 3. Matriks Pengendali Modul Aktif

1. **Layer Hierarchy**: Selalu organisasikan tumpukan ke dalam folder berkode warna.
2. **Mask Softness**: Selalu periksa radius feather agar tidak menciptakan garis putih mencolok (*white fringe halos*).
3. **Ekspor Akhir**: Pastikan berkas dikonversi ke ruang warna sRGB dengan profil ICC tertanam sebelum diunggah ke web.
