# DesignCraft Configuration (Panel Tata Letak & Publikasi)

Dokumen ini adalah saklar konfigurasi desain tata letak cetak & digital di **DesignCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. FORMAT HALAMAN & DIMENSI
# ========================================================
page_format: "a4"               # a4 (210x297mm) | a5 | us_letter | b5_book | custom
orientation: "portrait"         # portrait | landscape
pages_type: "facing_pages"      # facing_pages (buku berdampingan) | single_page

# ========================================================
# 2. MARGIN & PRE-PRESS (CETAK)
# ========================================================
print_setup:
  bleed_mm: 3.0                 # Tarikan lebihan cetak (standar 3mm)
  slug_mm: 5.0                  # Area catatan teknis percetakan
  margins_mm:
    top: 20.0
    bottom: 25.0
    inside: 25.0                # Margin dalam lebih lebar untuk jilid punggung
    outside: 18.0
  color_space: "cmyk_fogra39"   # cmyk_fogra39 (Cetak offset) | srgb (Digital PDF)

# ========================================================
# 3. GRID & TIPOGRAFI
# ========================================================
layout:
  columns_count: 3              # 2, 3, atau 4 kolom teks
  column_gutter_mm: 5.0         # Jarak antar kolom
  baseline_grid_pt: 12.0        # Grid dasar perataan baris teks
```
