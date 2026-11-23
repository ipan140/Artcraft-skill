# PhotoCraft Configuration (Panel Kendali Manipulasi Foto & Retouching)

Dokumen ini adalah saklar konfigurasi utama untuk penyuntingan gambar berbasis layer non-destruktif, retouching frekuensi tinggi, dan compositing di **PhotoCraft**.

---

## 🎛️ Pengaturan Aktif (Active Configurations)

```yaml
# ========================================================
# 1. PEMILIHAN PROFIL ALUR KERJA (Workflow Target Selector)
# ========================================================
# Pilih salah satu profil target dari folder workflows/:
# - high-end-beauty-retouch
# - commercial-product-composite
# - creative-matte-painting
# - custom-photo-edit
target_workflow: "high-end-beauty-retouch"

# ========================================================
# 2. KANVAS & KEDALAMAN WARNA (Color Management)
# ========================================================
color_mode: "rgb"                    # rgb | cmyk | grayscale
bit_depth: 16                        # 8-bit | 16-bit (Mencegah banding saat grading)
working_space: "Adobe RGB (1998)"    # Adobe RGB (1998) | ProPhoto RGB | sRGB
export_space: "sRGB IEC61966-2.1"    # Standar universal web & sosial media
target_resolution_dpi: 300           # 72 (Layar) | 300 (Cetak / Editorial)

# ========================================================
# 3. TEKNIK EDITING NON-DESTRUKTIF
# ========================================================
workflow:
  non_destructive_enforced: true     # Selalu gunakan adjustment layers & layer masks
  use_smart_objects: true            # Lindungi layer piksel dasar dari degradasi transformasi
  use_clipping_masks: true           # Lokalisir dampak penyesuaian warna
  frequency_separation_16bit: true   # Formula 16-bit: Add, Invert, Scale 2, Offset 0
  dual_curves_dodge_burn: true       # Kurva terpisah untuk Dodge dan Burn

# ========================================================
# 4. AKTIVASI MODUL (Module Switches)
# ========================================================
modules_enabled:
  01_layer_stack_architecture: true
  02_frequency_separation_retouching: true
  03_dodge_burn_tonal_sculpting: true
  04_output_format: true
  05_advanced_masking_cutouts: true
  06_color_grading_adjustment_layers: true
  07_compositing_light_wrap_shadows: true
  08_export_sharpening_color_spaces: true

# ========================================================
# 5. PREFERENSI PENAJAMAN & EKSPOR
# ========================================================
preferences:
  high_pass_sharpen_radius_px: 1.4   # Radius penajaman mikro akhir
  high_pass_blend_mode: "soft_light" # soft_light (halus) | overlay (tegas)
  dither_downsampling: true          # Aktifkan dither saat konversi 16-bit ke 8-bit
```

---

## 🛠️ Panduan Penggunaan Konfigurasi
1. Tentukan `target_workflow` sesuai jenis tugas (misal: `high-end-beauty-retouch` untuk kecantikan wajah atau `commercial-product-composite` untuk produk).
2. Pertahankan `bit_depth: 16` selama proses manipulasi kurva untuk menjaga kelancaran gradasi warna kulit dan latar belakang.
3. Jalankan penyusunan tumpukan layer dengan mengikuti modul-modul aktif di folder `modules/`.
