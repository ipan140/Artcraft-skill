# SolidCraft Configuration (Panel Kendali Parametric 3D Solid Modeling)

Dokumen ini adalah saklar konfigurasi utama untuk pemodelan benda padat parametrik, relasi sketsa kendala penuh, aturan DFM manufaktur, dan ekspor berkas pertukaran industri di **SolidCraft**.

---

## 🎛️ Pengaturan Aktif (Active Configurations)

```yaml
# ========================================================
# 1. METODE MANUFAKTUR TARGET (Manufacturing Method Selector)
# ========================================================
# Pilih salah satu profil target dari folder manufacturing/:
# - cnc-machined-parts
# - injection-molded-plastics
# - additive-3d-printing
# - sheet-metal-fabrication
target_method: "cnc-machined-parts"

# ========================================================
# 2. UNIT & TOLERANSI MODELING
# ========================================================
unit: "millimeters"                  # millimeters | meters | inches
angular_unit: "degrees"
linear_precision: 0.001              # Presisi hingga 3 desimal
tolerance_class: "medium_m"          # ISO 2768 Medium (f, m, c, v)
standard_fit_system: "iso_286_hole"  # H7 basic hole basis

# ========================================================
# 3. DISIPLIN POHON FITUR PARAMETRIK
# ========================================================
features:
  enforce_fully_constrained: true    # Sketsa wajib fully constrained (garis hitam)
  fillet_chamfer_at_end: true        # Fillet/chamfer wajib diletakkan di akhir pohon
  default_draft_angle_deg: 2.0       # Sudut draft bukaan cetakan injeksi plastik
  check_tool_clearance_radii: true   # Cegah sudut tajam 90° pada kantong CNC internal

# ========================================================
# 4. AKTIVASI MODUL (Module Switches)
# ========================================================
modules_enabled:
  01_parametric_sketch_constraints: true
  02_feature_tree_hierarchy: true
  03_dfm_tool_clearance_drafts: true
  04_output_format: true
  05_tolerances_fits_gdt: true
  06_assembly_mates_kinematics: true
  07_sheet_metal_unfolding: true
  08_export_step_cadquery_tooling: true

# ========================================================
# 5. PROTOKOL EKSPOR CAD
# ========================================================
export:
  primary_format: "step_ap214"       # step_ap214 (ISO 10303) | step_ap242 | stl
  stl_chord_tolerance_mm: 0.01       # Resolusi tessellation 3D printing
  stl_angular_tolerance_deg: 5.0
```

---

## 🛠️ Panduan Penggunaan Konfigurasi
1. Tetapkan `target_method` sesuai proses manufaktur lantai pabrik (misal: `injection-molded-plastics` untuk part plastik cetak injeksi).
2. Pastikan `enforce_fully_constrained: true` selalu aktif untuk mencegah keruntuhan pohon fitur saat parameter ukuran diedit.
3. Gunakan modul-modul aktif di folder `modules/` untuk menyusun spesifikasi teknis dan kode generator Python CadQuery / OpenSCAD.
