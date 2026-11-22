# PhotoCraft Configuration (Panel Kendali Manipulasi Foto)

Dokumen ini adalah saklar konfigurasi editing gambar berbasis layer di **PhotoCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. KANVAS & KEDALAMAN WARNA
# ========================================================
color_mode: "rgb"               # rgb | cmyk | grayscale
bit_depth: 16                   # 8-bit | 16-bit (Mencegah banding gradasi)
working_profile: "srgb"

# ========================================================
# 2. TEKNIK EDITING
# ========================================================
workflow:
  non_destructive: true         # Selalu gunakan adjustment layers & smart objects
  use_clipping_masks: true
  export_web_optimization: true
```
