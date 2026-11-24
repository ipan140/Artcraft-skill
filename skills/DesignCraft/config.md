# Master Configuration (Panel Kendali Tata Letak Editorial & Publikasi)

Dokumen ini berfungsi sebagai panel kendali utama untuk **DesignCraft Skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke tipe publikasi cetak/digital (majalah, buku, brosur korporat), format halaman, aturan margin & jilid, baseline grid, serta standar pra-cetak (pre-press CMYK).

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TIPE PUBLIKASI EDITORIAL (PUBLICATION TYPE)
# Pilihan: magazine-editorial | book-novel | corporate-brochure | custom-publication
# ========================================================
publication_type: "magazine-editorial"

# Jika memilih 'custom-publication', tentukan jenisnya di bawah:
# Pilihan: zine | product-catalog | restaurant-menu | tri-fold-brochure
custom_publication_type: "product-catalog"

# ========================================================
# 2. FORMAT HALAMAN & PARAMETER PRE-PRESS
# ========================================================
page_setup:
  format: "a4"                  # a4 (210x297mm) | a5 (148x210mm) | b5_book (176x250mm) | us_letter
  orientation: "portrait"       # portrait | landscape
  pages_mode: "facing_pages"    # facing_pages (spread 2 halaman buku/majalah) | single_page
  bleed_mm: 3.0                 # Tarikan lebihan cetak (standar 3mm s/d 5mm)
  slug_mm: 5.0                  # Area catatan teknis tepi percetakan
  margins_mm:
    top: 20.0
    bottom: 25.0
    inside: 25.0                # Margin punggung jilid (gutter) dibuat lebih lebar
    outside: 18.0
  color_space: "cmyk_fogra39"   # cmyk_fogra39 (Offset Eropa) | gracol (US) | srgb (Digital PDF)
  code_engine: "pagedjs-html"   # pagedjs-html (CSS Paged Media @page) | typst | indesign-script

# ========================================================
# 3. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  grid_baseline_alignment: true  # modules/01-grid-baseline-alignment.md (Baseline Grid, Snap to Grid)
  facing_pages_imposition: true  # modules/02-facing-pages-imposition.md (Verso/Recto, Punggung Jilid)
  prepress_bleed_slug: true      # modules/03-prepress-bleed-slug.md (Bleed, Trim Marks, Pre-press)
  output_format: true            # modules/04-output-format.md (Template Spesifikasi Layout & Kode)
  editorial_hierarchy: true      # modules/05-editorial-hierarchy-microcopy.md (Kicker, Drop Cap, Pull Quote)
  typography_font_pairing: true  # modules/06-typography-font-pairing.md (Serif/Sans Pairing, Kerning)
  color_cmyk_separation: true    # modules/07-color-cmyk-separation.md (100% K vs Rich Black, TAC <= 300%)
  export_pdf_standards: true     # modules/08-export-pdf-standards.md (Standar PDF/X-1a, PDF/X-4, 300 DPI)

# ========================================================
# 4. PREFERENSI TATA LETAK & GRID
# ========================================================
preferences:
  columns_count: 3              # 2 | 3 | 4 kolom per halaman
  column_gutter_mm: 5.0         # Jarak celah antar kolom
  baseline_grid_pt: 12.0        # Grid dasar perataan baris teks (kelipatan leading)
  strict_baseline_lock: true    # Wajibkan seluruh paragraf mengunci garis dasar
  prevent_widows_orphans: true  # Larang 1 kata/baris gantung di awal/akhir kolom
  strictness: "strict"          # strict | balanced | permissive
  refer_to_examples: true       # Wajib mengacu ke examples/magazine-spread-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Ganti Tipe Publikasi**: Ubah `publication_type` ke `"magazine-editorial"`, `"book-novel"`, `"corporate-brochure"`, atau `"custom-publication"` sebelum merancang tata letak.
2. **Kustomisasi Margin & Bleed**: Sesuaikan `bleed_mm` dan `margins_mm` dengan spesifikasi mesin percetakan offset atau vendor cetak Anda.
3. **Aktifkan / Matikan Modul**: Atur nilai di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
