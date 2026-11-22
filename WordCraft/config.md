# WordCraft Configuration (Panel Kendali Dokumen & Naskah)

Dokumen ini adalah saklar konfigurasi penulisan dokumen resmi di **WordCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. TATA LETAK HALAMAN
# ========================================================
page_size: "a4"                 # a4 (210x297mm) | us_letter
margins_mm:
  top: 25.4
  bottom: 25.4
  left: 30.0                    # Margin kiri lebih lebar untuk penjilidan
  right: 25.0

# ========================================================
# 2. TIPOGRAFI & GAYA NASKAH
# ========================================================
typography:
  preset: "corporate"           # corporate (Calibri/Inter) | academic (Times New Roman)
  body_font_size_pt: 11.0
  line_spacing: 1.15            # 1.15 | 1.5 | double
  citation_style: "apa_7"       # apa_7 | ieee | chicago
  auto_table_of_contents: true
```
