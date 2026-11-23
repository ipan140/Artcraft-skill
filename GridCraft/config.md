# Master Configuration (Panel Kendali Permodelan Data & Spreadsheet)

Dokumen ini berfungsi sebagai panel kendali utama untuk **GridCraft Skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke tipe model spreadsheet (Financial 3-Statement, SaaS Unit Economics, Inventory Operations), arsitektur 3-lapis, formula modern (XLOOKUP, LET, LAMBDA), modul aktif, serta format akuntansi angka.

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TIPE MODEL SPREADSHEET (MODEL ARCHETYPE)
# Pilihan: financial-3statement | saas-unit-economics | inventory-operations | custom-model
# ========================================================
target_model: "financial-3statement"

# Jika memilih 'custom-model', tentukan jenisnya di bawah:
# Pilihan: marketing-roas | hr-kpi-tracker | investment-portfolio | project-boq
custom_model_type: "marketing-roas"

# ========================================================
# 2. STANDAR KALKULASI & SINTAKS FORMULA
# ========================================================
calculation_settings:
  spreadsheet_engine: "excel_modern" # excel_modern (Excel 365/2021+) | google_sheets | libreoffice_calc
  formula_language: "english"         # english (SUM, XLOOKUP, LET) | indonesian (JUMLAH, JIKA)
  number_format: "currency_idr"       # currency_idr (Rp #,##0) | currency_usd ($#,##0) | standard_decimal
  decimal_places: 2                   # 0 | 2 | 4
  date_format: "yyyy-mm-dd"           # yyyy-mm-dd | dd/mm/yyyy

# ========================================================
# 3. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  three_tier_architecture: true       # modules/01-three-tier-architecture.md (Inputs, Engine, Outputs)
  modern_formulas_arrays: true        # modules/02-modern-formulas-arrays.md (XLOOKUP, LET, LAMBDA, FILTER)
  financial_logic_tieins: true        # modules/03-financial-logic-tieins.md (Balance Check, P&L, Cash Flow)
  output_format: true                 # modules/04-output-format.md (Template Spesifikasi Tabel Sel & Rumus)
  data_validation_controls: true      # modules/05-data-validation-controls.md (Dropdown, Range Guards)
  conditional_formatting_kpi: true    # modules/06-conditional-formatting-kpi.md (Heatmaps, Sparklines)
  number_formatting_accounting: true  # modules/07-number-formatting-accounting.md (Format Akuntansi (1,000), -)
  export_interoperability: true       # modules/08-export-interoperability.md (XLSX, Google Sheets, Python openpyxl)

# ========================================================
# 4. PREFERENSI & AUDIT INTEGRITAS DATA
# ========================================================
preferences:
  ban_volatile_functions: true        # Dilarang menggunakan OFFSET & INDIRECT (penyebab spreadsheet lambat)
  require_audit_checksums: true       # Wajibkan sel audit pengecekan keseimbangan (=IF(Assets=Liabilities+Equity,"OK","ERROR"))
  highlight_inputs: true              # Warnai sel asumsi/input dengan kuning muda (#FEF3C7)
  strictness: "strict"                # strict | balanced | permissive
  refer_to_examples: true             # Wajib mengacu ke examples/saas-financial-model-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Pilih Tipe Model**: Ubah `target_model` ke `"financial-3statement"`, `"saas-unit-economics"`, `"inventory-operations"`, atau `"custom-model"` sebelum menyusun lembar kalkulasi.
2. **Kustomisasi Format Mata Uang**: Sesuaikan `number_format` ke `"currency_idr"` (Rupiah) atau `"currency_usd"` (Dollar AS).
3. **Aktifkan / Matikan Modul**: Atur nilai di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
