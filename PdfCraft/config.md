# PdfCraft Configuration (Panel Kendali PDF Workbench)

Dokumen ini adalah saklar konfigurasi manajemen berkas PDF di **PdfCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. STANDAR & KEPATUHAN ARSIP
# ========================================================
pdf_standard: "pdf_a_2b"        # pdf_a_2b (Arsip jangka panjang) | standard_pdf_1_7 | pdf_x
embed_all_fonts: true
downsample_images_dpi: 150      # 72 (Layar) | 150 (Ebook/Email) | 300 (Cetak)

# ========================================================
# 2. FORMULIR & KEAMANAN
# ========================================================
interactive_forms: true
security:
  encryption: "aes_256"         # aes_128 | aes_256 | none
  allow_printing: true
  allow_copying: false
  allow_modifying: false
```
