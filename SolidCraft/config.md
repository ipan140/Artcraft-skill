# SolidCraft Configuration (Panel Kendali Parametric 3D CAD)

Dokumen ini adalah saklar konfigurasi pemodelan benda padat di **SolidCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. UNIT & TOLERANSI MODELING
# ========================================================
unit: "millimeters"             # millimeters | meters | inches
angular_unit: "degrees"
linear_precision: 0.001

# ========================================================
# 2. ATURAN FITUR PARAMETRIK
# ========================================================
features:
  enforce_fully_constrained: true # Sketsa wajib fully constrained sebelum diekstrusi
  default_draft_angle_deg: 2.0    # Sudut bukaan cetakan injeksi plastik
tolerance_class: "medium_m"     # ISO 2768 Medium
export_format: "step"           # step (AP214) | iges | stl
```
