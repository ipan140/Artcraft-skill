# VectorCraft Configuration (Panel Kendali Ilustrasi Vektor & Logo)

Dokumen ini adalah saklar konfigurasi utama untuk perancangan ilustrasi vektor, penempatan anchor point efisien, operasi boolean kurva Bézier, dan ekspor SVG teroptimasi di **VectorCraft**.

---

## 🎛️ Pengaturan Aktif (Active Configurations)

```yaml
# ========================================================
# 1. PEMILIHAN DOMAIN TARGET (Domain Target Selector)
# ========================================================
# Pilih salah satu profil target dari folder domains/:
# - brand-identity-logos
# - iconography-systems
# - editorial-vector-illustrations
# - custom-vector-asset
target_domain: "brand-identity-logos"

# ========================================================
# 2. KANVAS & KELAYAKAN GRID PIKSEL
# ========================================================
color_space: "rgb"                   # rgb (Layar/Digital) | cmyk (Cetak Offset)
snap_to_pixel_grid: true             # Mencegah anti-aliasing buram pada icon
precision_decimal_places: 2          # Batasi desimal koordinat path (misal 12.38)
viewbox_dimensions: "0 0 512 512"    # ViewBox responsif standar

# ========================================================
# 3. DISIPLIN KURVA & TIPOGRAFI
# ========================================================
rules:
  enforce_anchor_extrema: true       # Letakkan titik simpul hanya pada titik puncak kurva
  orthogonal_handles_only: true      # Lengan handle wajib horizontal/vertikal pada extrema
  convert_text_to_outlines: true     # Wajib ubah tag font ke kurva vektor tertutup
  closed_paths_only: true            # Pastikan perintah Z menutup semua bentuk terisi

# ========================================================
# 4. AKTIVASI MODUL (Module Switches)
# ========================================================
modules_enabled:
  01_bezier_curves_anchor_economy: true
  02_pixel_grid_snapping_alignment: true
  03_boolean_path_operations: true
  04_output_format: true
  05_color_gradients_palettes: true
  06_typography_outlines_kerning: true
  07_svg_optimization_svgo: true
  08_export_standards_multi_format: true

# ========================================================
# 5. PROTOKOL EKSPOR MULTI-FORMAT
# ========================================================
export:
  primary: "svg"                     # svg | eps | pdf_vector
  minify_svg: true                   # Jalankan pembersihan kompresi SVGO
  generate_monochrome_variants: true # Sediakan versi hitam pekat dan putih murni
```

---

## 🛠️ Panduan Penggunaan Konfigurasi
1. Tetapkan `target_domain` sesuai jenis proyek (misal: `brand-identity-logos` untuk lambang merek atau `iconography-systems` untuk paket ikon antarmuka).
2. Pertahankan `snap_to_pixel_grid: true` dan `precision_decimal_places: 2` untuk menjaga keringanan ukuran file dan ketajaman tampilan pada layar digital.
3. Jalankan penyusunan kurva Bézier dan operasi Boolean mengikuti panduan di folder `modules/`.
