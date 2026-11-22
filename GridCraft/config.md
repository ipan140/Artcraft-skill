# GridCraft Configuration (Panel Kendali Spreadsheet & Data)

Dokumen ini adalah saklar konfigurasi pengolahan angka dan permodelan data di **GridCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. STANDAR KALKULASI & FORMULA
# ========================================================
formula_syntax: "english"       # english (SUM, IF, XLOOKUP)
number_format: "currency_idr"   # currency_idr | currency_usd | standard_decimal
decimal_places: 2
date_format: "yyyy-mm-dd"

# ========================================================
# 2. STRUKTUR WORKBOOK
# ========================================================
workbook_architecture:
  use_3_tier_sheets: true       # Inputs -> Engine/Calculation -> Output/Dashboard
  highlight_input_cells: true   # Sel input pengguna diwarnai kuning lembut (#FEF3C7)
  protect_formula_cells: true   # Kunci sel formula agar tidak tertimpa
```
