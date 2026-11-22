# LightCraft Configuration (Panel Pengembangan Foto RAW)

Dokumen ini adalah saklar konfigurasi alur kerja foto RAW di **LightCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. PROFILE WARNA & DEMOSAICING
# ========================================================
color_profile: "adobe_rgb"      # srgb | adobe_rgb | prophoto_rgb
raw_engine: "high_fidelity"     # high_fidelity | high_speed
lens_profile_corrections: true  # Otomatis koreksi distorsi lensa & vignette

# ========================================================
# 2. PARAMETER PENGEMBANGAN DEFAULT
# ========================================================
development:
  preserve_highlights: true     # Recover kliping highlight putih
  shadow_lift_strength: 0.15
  clarity_microcontrast: 0.10
  noise_reduction_luminance: 15

# ========================================================
# 3. BATCH EXPORT
# ========================================================
export:
  format: "jpeg_high"           # jpeg_high (95%) | tiff_16bit | dng_raw
  sharpening: "screen_standard"
  strip_location_metadata: true # Hapus koordinat GPS untuk privasi
```
