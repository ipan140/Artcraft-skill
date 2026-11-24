# Master Configuration (Panel Kendali Pengembangan Foto RAW & Warna)

Dokumen ini berfungsi sebagai panel kendali utama untuk **LightCraft Skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke tipe genre fotografi (Portrait Skin Tones, Landscape Nature, Architecture Interior), ruang warna kerja (ProPhoto RGB / Adobe RGB / sRGB), profil pengembangan RAW, modul aktif, serta format ekspor preset XMP.

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TIPE GENRE FOTOGRAFI (GENRE ARCHETYPE)
# Pilihan: portrait-skintones | landscape-nature | architecture-interior | custom-photography
# ========================================================
target_genre: "portrait-skintones"

# Jika memilih 'custom-photography', tentukan jenisnya di bawah:
# Pilihan: street-monochrome | commercial-product | astro-nightsky | sports-action
custom_photography_type: "street-monochrome"

# ========================================================
# 2. RUANG WARNA & PROFIL PENGEMBANGAN RAW
# ========================================================
raw_settings:
  working_color_space: "prophoto_rgb" # prophoto_rgb (Gamut Maksimal) | adobe_rgb | srgb
  raw_engine: "high_fidelity"         # high_fidelity | high_speed
  lens_profile_corrections: true      # Otomatis aktifkan profil distorsi & vignette lensa
  remove_chromatic_aberration: true   # Bersihkan fringing ungu/hijau di tepian kontras
  export_format: "xmp_preset"         # xmp_preset (.xmp) | dng_raw | tiff_16bit | jpeg_high

# ========================================================
# 3. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  raw_exposure_histogram: true        # modules/01-raw-exposure-histogram.md (Histogram, WB, Exposure)
  dynamic_range_recovery: true        # modules/02-dynamic-range-recovery.md (Highlights, Shadows, Clipping)
  tone_curve_scurve: true             # modules/03-tone-curve-scurve.md (Kurva S-Curve, RGB Point Curves)
  output_format: true                 # modules/04-output-format.md (Template Slider Numerik & Preset XMP)
  hsl_color_mixer: true               # modules/05-hsl-color-mixer.md (8 Saluran Warna HSL, Rona Kulit)
  color_grading_split_toning: true    # modules/06-color-grading-split-toning.md (3-Way Wheels, Shadows/Mid/High)
  detail_sharpening_denoise: true     # modules/07-detail-sharpening-denoise.md (Texture, Clarity, Masking)
  lens_optics_export: true            # modules/08-lens-optics-export.md (Koreksi Lensa, Upright, Ekspor)

# ========================================================
# 4. PREFERENSI & BATAS TOLERANSI EDITING
# ========================================================
preferences:
  protect_skin_textures: true         # Larang over-smoothing kulit agar tekstur pori-pori alami tetap ada
  zero_clipping_tolerance: true       # Cegah kliping putih 100% dan hitam pekat 0% di area subjek utama
  strip_location_metadata: true       # Hapus koordinat GPS untuk privasi saat ekspor final
  strictness: "strict"                # strict | balanced | permissive
  refer_to_examples: true             # Wajib mengacu ke examples/golden-hour-portrait-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Pilih Genre Fotografi**: Ubah `target_genre` ke `"portrait-skintones"`, `"landscape-nature"`, `"architecture-interior"`, atau `"custom-photography"` sesuai foto RAW yang sedang Anda olah.
2. **Kustomisasi Ruang Warna**: Gunakan `"prophoto_rgb"` untuk pengeditan rentang dinamis terluas, atau `"srgb"` untuk langsung siap tayang di media sosial.
3. **Aktifkan / Matikan Modul**: Atur nilai di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
