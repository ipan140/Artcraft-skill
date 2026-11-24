# PdfCraft Configuration (Panel Kendali PDF Workbench & Archival)

Dokumen ini adalah saklar konfigurasi utama untuk perancangan, manipulasi, sanitasi, dan eksekusi dokumen PDF di **PdfCraft**.

---

## 🎛️ Pengaturan Aktif (Active Configurations)

```yaml
# ========================================================
# 1. PEMILIHAN PROFIL DOKUMEN (Document Target Selector)
# ========================================================
# Pilih salah satu profil target dari folder documents/:
# - legal-contracts
# - interactive-forms
# - technical-reports
# - custom-document
target_document: "legal-contracts"

# ========================================================
# 2. STANDAR & KEPATUHAN ARSIP (Archival Standard)
# ========================================================
pdf_standard: "pdf_a_2b"             # pdf_a_2b (ISO 19005-2) | pdf_a_3 | standard_pdf_1_7 | pdf_x
embed_all_fonts: true
downsample_images_dpi: 150           # 72 (Layar) | 150 (Ebook/Email) | 300 (Cetak)
color_profile: "sRGB_v4"             # sRGB_v4 | Coated_FOGRA39_CMYK
linearize_fast_web_view: true        # Optimasi streaming web

# ========================================================
# 3. FORMULIR & KEAMANAN KRIPTOGRAFIS
# ========================================================
interactive_forms: true
security:
  encryption: "aes_256"              # aes_128 | aes_256 | none
  allow_printing: true               # high_resolution | low_resolution | false
  allow_copying: false               # false (mencegah pencurian teks)
  allow_modifying: false             # false (mencegah perubahan layout)
  allow_fill_forms: true             # true (mengizinkan pengisian form & tanda tangan)
  signature_standard: "pades"        # pades (ETSI) | pkcs7_detached

# ========================================================
# 4. AKTIVASI MODUL (Module Switches)
# ========================================================
modules_enabled:
  01_pdfa_archival_compliance: true
  02_interactive_acroforms_validation: true
  03_bookmarks_outlines_navigation: true
  04_output_format: true
  05_redaction_metadata_sanitization: true
  06_security_encryption_signatures: true
  07_compression_asset_optimization: true
  08_programmatic_generation_tooling: true

# ========================================================
# 5. PREFERENSI TAMPILAN AWAL (Viewer Preferences)
# ========================================================
preferences:
  display_doc_title: true
  page_mode: "UseOutlines"           # UseOutlines | UseNone | UseThumbs
  page_layout: "SinglePage"          # SinglePage | OneColumn | TwoColumnLeft
  garbage_collection_level: 4        # 1-4 (Tingkat pembersihan objek yatim)
```

---

## 🛠️ Panduan Penggunaan Konfigurasi
1. Tentukan `target_document` sesuai tujuan (misal: `interactive-forms` untuk form aplikasi pinjaman/pajak).
2. Aktifkan `pdf_standard: "pdf_a_2b"` untuk kontrak legal yang memerlukan pembuktian abadi.
3. Gunakan modul-modul di folder `modules/` untuk menyusun kode automasi PyMuPDF atau ReportLab.
