# VectorCraft Configuration (Panel Kendali Ilustrasi Vektor)

Dokumen ini adalah saklar konfigurasi pembuatan ilustrasi vektor di **VectorCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. KANVAS & WARNA
# ========================================================
color_space: "rgb"              # rgb (Layar/Digital) | cmyk (Cetak)
snap_to_pixel_grid: true        # Mencegah anti-aliasing buram pada icon
precision_points_limit: "optimized" # Bersihkan anchor point berlebih

# ========================================================
# 2. EKSPOR FORMAT
# ========================================================
export:
  primary: "svg"                # svg | eps | pdf_vector | ai
  minify_svg: true
  convert_text_to_outlines: true # Kunci font agar tidak berubah bentuk di komputer lain
```
