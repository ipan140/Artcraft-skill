# Modul 08: Standar Ekspor & Interoperabilitas (Export & Spreadsheet Interoperability)

Modul ini menetapkan kompatibilitas formula lintas aplikasi (Excel 365, Google Sheets, LibreOffice Calc), ekspor data bersih ke CSV, dan integrasi otomasi spreadsheet menggunakan script Python (`openpyxl` & `pandas`).

---

## 1. Kompatibilitas Formula: Excel vs Google Sheets

Meskipun sebagian besar rumus identik, perhatikan perbedaan sintaks fungsi dinamis:

| Fitur / Fungsi | Microsoft Excel 365 | Google Sheets | Catatan Kompatibilitas |
| :--- | :--- | :--- | :--- |
| **Pencarian Modern** | `=XLOOKUP(...)` | `=XLOOKUP(...)` | Kompatibel 100% di kedua platform. |
| **Variabel Lokal** | `=LET(...)` | `=LET(...)` | Kompatibel di Excel 365 dan Google Sheets modern. |
| **Array Expansion** | Otomatis meluap (*spill*) | `=ARRAYFORMULA(...)` | Google Sheets versi lama butuh `ARRAYFORMULA` untuk rumus array manual. |
| **Regex Extraction** | `=REGEXTEST()`, `=REGEXEXTRACT()` | `=REGEXEXTRACT(...)` | Excel baru merilis fungsi Regex native di channel Beta/Current. |
| **Pemisah Argumen** | Titik koma (`;`) di Windows ID | Koma (`,`) di US Locale | Formula di modul GridCraft menggunakan koma (`,`) standar internasional. |

---

## 2. Standar Ekspor CSV Bersih (Clean CSV Export)
- **Karakter Pemisah**: Koma `,` standar RFC 4180.
- **Enkoding Berkas**: **UTF-8 dengan BOM** (Byte Order Mark) agar huruf aksen atau karakter non-Latin tidak rusak saat dibuka ganda di Excel dan Notepad.
- **Pembersihan Rumus**: Saat mengekspor ke CSV untuk pipeline machine learning atau database SQL, seluruh sel formula harus dibekukan menjadi nilai statis murni (*Copy $\rightarrow$ Paste Values*), dan tanda titik koma/koma di dalam teks teks harus diapit tanda petik ganda (`"teks, dengan koma"`).

---

## 3. Otomasi Python dengan `openpyxl`
Contoh script Python untuk menghasilkan spreadsheet GridCraft 3-tier secara terprogram:

```python
import openpyxl
from openpyxl.styles import PatternFill, Font, Alignment, Border, Side

wb = openpyxl.Workbook()

# Setup Sheet 3-Lapis
ws_inputs = wb.active
ws_inputs.title = "Inputs"
ws_engine = wb.create_sheet(title="Engine_Calculations")
ws_dash = wb.create_sheet(title="Dashboard")

# Styling Input Cell (Kuning Muda #FEF3C7)
yellow_fill = PatternFill(start_color="FEF3C7", end_color="FEF3C7", fill_type="solid")
blue_font = Font(name="Calibri", size=11, color="1E40AF", bold=True)

ws_inputs["A1"] = "Asumsi Tingkat Pertumbuhan"
ws_inputs["B1"] = 0.15
ws_inputs["B1"].fill = yellow_fill
ws_inputs["B1"].font = blue_font
ws_inputs["B1"].number_format = "0.0%"

# Formula Dinamis di Engine Sheet
ws_engine["A1"] = "Proyeksi Pendapatan Jan 2026"
ws_engine["B1"] = "=100000000 * (1 + Inputs!B1)"
ws_engine["B1"].number_format = "Rp #,##0"

wb.save("model_keuangan_otomatis.xlsx")
print("Buku kerja spreadsheet berhasil digenerate: model_keuangan_otomatis.xlsx")
```
