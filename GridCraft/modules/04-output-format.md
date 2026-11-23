# Modul 04: Format Output Standar AI (Spreadsheet Output Specification)

Modul ini mendikte bagaimana AI harus menyajikan rancangan tabel lembar kerja, koordinat sel yang jelas, sintaks formula yang siap disalin (*copy-paste*), penjelasan logika bisnis, dan checklist verifikasi integritas audit.

---

## 1. Struktur Respon Wajib AI

Setiap kali AI menyajikan model spreadsheet atau solusi rumus formula berdasarkan skill ini, respon **WAJIB** mengikuti urutan 5 bagian berikut:

1. **Ringkasan Model & Arsitektur Lembar Kerja**:
   - Jelaskan tipe model (`financial-3statement`, `saas-unit-economics`, dsb.), arsitektur sheet (Inputs, Engine, Dashboard), format mata uang (`currency_idr` / `currency_usd`), dan engine target (Excel / Google Sheets).
2. **Representasi Tabel Sel Markdown (Cell Coordinates View)**:
   - Sajikan tabel yang menyertakan header huruf kolom (`A`, `B`, `C`...) dan nomor baris (`1`, `2`, `3`...) sehingga pengguna tahu persis di mana harus menempelkan formula.
3. **Daftar Rumus Formula Resmi (Ready-to-Use Formulas)**:
   - Tuliskan formula per sel penting dengan sintaks baku tanpa pemotongan placeholder komentar.
4. **Penjelasan Logika Bisnis & Perhitungan Finansial**:
   - Uraikan alasan di balik pemilihan rumus (mengapa menggunakan `XLOOKUP`, logika tie-in laba bersih ke kas, dll.).
5. **Checklist Kualitas & Audit Keseimbangan (Spreadsheet QC Checklist)**:
   - Verifikasi ketat tidak ada referensi melingkar (*circular references*), ketiadaan fungsi volatil, dan sel audit seimbang.

---

## 2. Template Output Markdown Resmi

Contoh format yang harus diikuti oleh AI:

````markdown
### 📊 Model Spreadsheet: [Nama Model / Analisa]
Tipe: `[Model Archetype]` | Engine: `[Excel 365 / Google Sheets]` | Format: `Rp #,##0`

#### 1. Tata Letak Sel & Data (`Sheet: Engine_Calculation`)
| Baris | A (Indikator / Pos Akun) | B (Jan 2026) | C (Feb 2026) | D (Mar 2026) |
| :---: | :--- | :---: | :---: | :---: |
| **04** | Pendapatan Kotor (Gross Revenue) | Rp 150.000.000 | Rp 175.000.000 | Rp 210.000.000 |
| **05** | Beban Pokok Pendapatan (COGS) | (Rp 45.000.000) | (Rp 52.500.000) | (Rp 63.000.000) |
| **06** | **Laba Kotor (Gross Profit)** | **Rp 105.000.000** | **Rp 122.500.000** | **Rp 147.000.000** |
| **07** | Margin Laba Kotor (%) | 70,0% | 70,0% | 70,0% |

#### 2. Sintaks Formula Kunci
- **Sel B6 (Gross Profit)**:
  ```excel
  =B4 + B5
  ```
- **Sel B7 (Gross Margin %)**:
  ```excel
  =LET(
      rev, B4,
      gp, B6,
      IF(rev > 0, gp / rev, 0)
  )
  ```
- **Sel B25 (Audit Check-Sum Neraca)**:
  ```excel
  =IF(ROUND(B15 - B24, 2) = 0, "BALANCED", "ERROR: " & TEXT(B15 - B24, "Rp #,##0"))
  ```

#### 3. Logika Finansial & Arsitektur
- **Nilai Input**: Angka target pertumbuhan ditarik dinamis dari sel `Inputs!$B$3` tanpa di-hardcode di dalam formula.
- **Efisiensi**: Formula menggunakan fungsi `LET` untuk mengeliminasi pembagian berulang.

#### ✅ Checklist Verifikasi Kualitas Spreadsheet:
- [x] Nol fungsi volatil (`OFFSET`, `INDIRECT` tidak digunakan)
- [x] Nol referensi melingkar (*Zero circular references*)
- [x] Seluruh input asumsi diwarnai kuning lembut (#FEF3C7)
- [x] Sel audit keseimbangan neraca terverifikasi "BALANCED"
- [x] Angka negatif ditampilkan rapi di dalam tanda kurung `(Rp 1,000)`
````

---

## 3. Larangan Khusus untuk AI
- **Dilarang Menghilangkan Koordinat Baris & Kolom**: Selalu sertakan referensi sel seperti `B4`, `C12`, `Inputs!$A$1`.
- **Dilarang Menulis Rumus dengan Angka Statis**: Jangan menghasilkan `=B4 * 1.15`; gunakan referensi ke sel asumsi `=B4 * (1 + Inputs!$B$5)`.
- **Dilarang Mengabaikan `config.md`**: Selalu baca bahasa formula (Inggris) dan format mata uang (`IDR` vs `USD`).
