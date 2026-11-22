# CADCraft Configuration (Panel Kendali Gambar Teknik & Drafting)

Dokumen ini adalah saklar konfigurasi proyek drafting 2D/3D teknis di **CADCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. STANDAR & SATUAN UKURAN
# ========================================================
standard: "iso"                 # iso (metrik) | ansi (imperial) | din | jis
unit: "millimeters"             # millimeters | meters | inches | feet
precision_decimals: 3           # Jumlah desimal presisi (0.001 mm)
projection_angle: "third_angle" # third_angle (AS/Asia) | first_angle (Eropa)

# ========================================================
# 2. SISTEM LAYER & GARIS
# ========================================================
layers:
  visible_contours:
    color: "white"
    lineweight_mm: 0.50
    linetype: "continuous"
  hidden_lines:
    color: "cyan"
    lineweight_mm: 0.25
    linetype: "dashed"
  centerlines:
    color: "red"
    lineweight_mm: 0.25
    linetype: "dash_dot"
  dimensions:
    color: "green"
    lineweight_mm: 0.25
    text_height_mm: 3.5

# ========================================================
# 3. EKSPOR & DRAFTING OUTPUT
# ========================================================
export:
  primary_format: "dxf"         # dxf | dwg | pdf_vector
  scale: "1:1"                  # 1:1 | 1:5 | 1:10 | 1:50 | 1:100
  include_title_block: true     # Sertakan kepala gambar (etiket standar)
```
