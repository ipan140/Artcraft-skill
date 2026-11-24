# Domain Profile: Custom Vector Asset Template

Template ini digunakan untuk merancang aset vektor kustom (misalnya: packaging die-cut template, peta topografi garis vektor, grafik pola tekstil berulang/seamless pattern, atau stensil cutting plotter).

---

## 1. Deklarasi Parameter Aset Vektor

```yaml
asset_name: "custom_vector_graphics"
domain_category: "die_cut_packaging"
color_space: "cmyk" # cmyk (Cetak) | rgb (Digital Web)

canvas:
  width_mm: 210
  height_mm: 297
  bleed_mm: 3.0
  precision_decimal_places: 2 # Pembulatan koordinat path

geometry:
  snap_to_grid: true
  min_anchor_points: true
  closed_paths_enforced: true # Semua path wajib ditutup (Z) sebelum ekspor
  convert_text_to_outlines: true
```

---

## 2. Diagram Alir Konstruksi Geometri

```
[Sketsa Konsep Primitif] ──┐
                            ├──> [Operasi Boolean Pathfinder] ──> [Pengurangan Anchor Extrema] ──> [Optimasi SVG]
[Grid & Pemandu Vektor] ────┘                                                                           │
                                                                                                        ▼
                                                                                           [Ekspor Multi-Format]
                                                                                           (SVG / EPS / PDF-X)
```

---

## 3. Matriks Pengendali Modul Aktif

1. **Anchor Economy**: Kurangi titik-titik simpul yang tidak perlu tanpa mengubah bentuk siluet visual.
2. **Path Closure**: Pastikan tidak ada path terbuka (*unclosed paths*) pada elemen yang memiliki isian warna (*fill*).
3. **Optimasi SVG**: Hapus metadata editor internal (seperti tag khusus Illustrator atau Inkscape) agar file berukuran seringan mungkin.
