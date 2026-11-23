# Modul 08: Programmatic DOCX Generation & Pandoc Tooling

Modul ini menetapkan panduan integrasi alat pemrograman untuk generasi dokumen otomatis (*Automated Document Engineering*) menggunakan pustaka Python `python-docx` dan konversi Markdown ke DOCX menggunakan `pandoc`.

---

## 1. Pustaka Python `python-docx` Standar

`python-docx` adalah library standar untuk membuat, memodifikasi, dan memformat dokumen Microsoft Word (.docx) secara terprogram tanpa memerlukan instalasi aplikasi MS Word pada server:

```python
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT

def create_corporate_document():
    doc = docx.Document()
    
    # Konfigurasi Margin A4
    sections = doc.sections
    for section in sections:
        section.page_width = Inches(8.27)   # 210 mm
        section.page_height = Inches(11.69) # 297 mm
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.18)  # 30 mm
        section.right_margin = Inches(0.98) # 25 mm

    # Menambahkan Judul Bab
    h1 = doc.add_heading("BAB 1: RINGKASAN EKSEKUTIF", level=1)
    h1.paragraph_format.space_before = Pt(12)
    h1.paragraph_format.space_after = Pt(8)

    # Paragraf Isi
    p = doc.add_paragraph("Laporan ini menyajikan hasil evaluasi infrastruktur...")
    p.paragraph_format.line_spacing = 1.15
    p.paragraph_format.space_after = Pt(6)

    doc.save("Laporan_Kinerja_2026.docx")

if __name__ == "__main__":
    create_corporate_document()
```

---

## 2. Pipeline Konversi Markdown ke DOCX via Pandoc

Jika naskah ditulis dalam format Markdown, konversikan ke file Word dengan mempertahankan template gaya korporat:

```bash
pandoc input_document.md \
  --reference-doc=corporate_template.docx \
  --toc \
  --toc-depth=3 \
  --number-sections \
  -o Final_Executive_Report.docx
```

- `--reference-doc`: Menggunakan file DOCX acuan yang sudah memiliki konfigurasi warna heading, font, dan margin resmi perusahaan.
- `--toc`: Otomatis membuat Table of Contents interaktif di awal dokumen.
- `--number-sections`: Menerapkan penomoran desimal otomatis (`1.1`, `1.2`, dst).
