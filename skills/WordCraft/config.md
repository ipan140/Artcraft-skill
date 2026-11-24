# WordCraft Configuration (Panel Kendali Dokumen & Naskah Korporat)

Dokumen ini adalah saklar konfigurasi utama untuk perancangan proposal bisnis, laporan eksekutif C-Level, hirarki judul desimal, dan otomasi dokumen Word di **WordCraft**.

---

## 🎛️ Pengaturan Aktif (Active Configurations)

```yaml
# ========================================================
# 1. PEMILIHAN TEMPLATE TARGET (Template Target Selector)
# ========================================================
# Pilih salah satu profil target dari folder templates/:
# - corporate-annual-report
# - tender-commercial-proposal
# - academic-research-paper
# - standard-operating-procedure
target_template: "tender-commercial-proposal"

# ========================================================
# 2. TATA LETAK HALAMAN & MARGIN (Page Setup)
# ========================================================
page_size: "a4"                      # a4 (210x297mm) | us_letter (8.5x11 inch)
margins_mm:
  top: 25.4                          # 1 inch
  bottom: 25.4                       # 1 inch
  left: 30.0                         # Margin ekstra untuk penjilidan (Gutter/Binding)
  right: 25.0
header_margin_mm: 12.7               # 0.5 inch dari tepi atas kertas
footer_margin_mm: 12.7               # 0.5 inch dari tepi bawah kertas

# ========================================================
# 3. TIPOGRAFI & GAYA NASKAH
# ========================================================
typography:
  preset: "corporate"                # corporate (Inter/Calibri) | academic (Times New Roman)
  heading_font: "Calibri"
  body_font: "Calibri"
  body_font_size_pt: 11.0
  line_spacing: 1.15                 # 1.15 | 1.25 | 1.5 | 2.0 (Double)
  paragraph_space_after_pt: 6.0      # Jarak antarparagraf tanpa indentasi tab
  citation_style: "apa_7"            # apa_7 | ieee | chicago
  auto_table_of_contents: true

# ========================================================
# 4. AKTIVASI MODUL (Module Switches)
# ========================================================
modules_enabled:
  01_heading_hierarchy_numbering: true
  02_executive_summary_bluf: true
  03_tables_captions_data_layout: true
  04_output_format: true
  05_headers_footers_page_breaks: true
  06_citations_references_bibliography: true
  07_callouts_sidebars_visual_breaks: true
  08_docx_pandoc_programmatic_tooling: true

# ========================================================
# 5. ATURAN PENOMORAN & HALAMAN
# ========================================================
numbering:
  prelims_format: "roman_lowercase"  # i, ii, iii...
  body_format: "arabic_decimal"      # 1, 2, 3...
  heading_numbering_depth: 3         # 1.1.1
  keep_headings_with_next: true      # Cegah judul bab menggantung di dasar halaman
  widow_orphan_control: true
```

---

## 🛠️ Panduan Penggunaan Konfigurasi
1. Tentukan `target_template` sesuai jenis naskah (misal: `tender-commercial-proposal` untuk proposal tender atau `corporate-annual-report` untuk laporan tahunan).
2. Pertahankan `left: 30.0` pada margin kiri untuk memberikan ruang jilid spiral/buku tanpa menutupi teks dokumen.
3. Jalankan penyusunan draf dokumen dan eksekusi skrip `python-docx` mengikuti panduan di folder `modules/`.
