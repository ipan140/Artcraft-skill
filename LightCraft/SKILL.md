---
name: lightcraft-skill
description: >-
  Panduan pengolahan foto RAW, balancing eksposur, manipulasi tone curve,
  koreksi warna split toning/color grading, dan optimasi ketajaman gambar di LightCraft.
---

# LightCraft Skill

Skill ini memandu AI dalam merekomendasikan parameter pengembangan foto RAW non-destruktif, perbaikan white balance, dan manajemen aset foto digital di **LightCraft**.

---

## 📷 Alur Pengembangan RAW

1. **White Balance & Exposure Base**:
   - Kalibrasi temperatur kelvin berdasarkan titik netral (abu-abu 18%).
   - Geser exposure hingga histogram terdistribusi rata tanpa menyentuh batas clipping.
2. **Highlight & Shadow Recovery**:
   - Tarik highlight ke kiri untuk memunculkan detail awan/langit; dorong shadow ke kanan untuk membuka area gelap.
3. **Tone Curve S-Curve**:
   - Bentuk S-curve halus pada kurva RGB untuk kontras pop yang natural.
4. **Color Calibration (HSL/Color Grading)**:
   - Sesuaikan Hue, Saturation, dan Luminance per kelompok warna.

---

## 📋 Alur Eksekusi AI
1. Periksa parameter di [config.md](./config.md).
2. Berikan instruksi slider numerik (Exposure, Contrast, Highlights, Shadows, Whites, Blacks, Dehaze).
