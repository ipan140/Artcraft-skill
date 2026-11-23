# Modul 07: Format Angka Akuntansi & Standar Teks (Number Formatting & Accounting Styles)

Modul ini menetapkan format kustom angka spreadsheet (*custom number formatting string*), penyajian angka negatif dalam kurung, penanganan nilai nol, dan konsistensi desimal.

---

## 1. Kode Format Angka Akuntansi Baku (Custom Number Format Strings)

Dalam Excel dan Google Sheets, format angka kustom terdiri dari 4 bagian yang dipisahkan oleh tanda titik koma (`;`):

$$\text{[Format Positif]} ; \text{[Format Negatif]} ; \text{[Format Nol]} ; \text{[Format Teks]}$$

### 1.1 Format Mata Uang Rupiah (IDR):
```text
Rp #,##0 ; (Rp #,##0) ; "-" ; @
```
- Angka `1500000` ditampilkan: `Rp 1,500,000`
- Angka `-500000` ditampilkan: `(Rp 500,000)` (di dalam tanda kurung akuntansi)
- Angka `0` ditampilkan: `-` (tanda strip rapi di tengah sel, bukan angka 0 besar yang mengotori tabel)

### 1.2 Format Mata Uang Dollar AS (USD):
```text
$#,##0 ; ($#,##0) ; "-" ; @
```

### 1.3 Format Persentase Finansial:
```text
0.0% ; (0.0%) ; "0.0%" ; @
```
- Selalu sertakan tepat 1 desimal untuk persentase margin (misal: `74.5%`). Menampilkan 0 desimal (`75%`) menghilangkan presisi, sedangkan menampilkan 3 desimal (`74.523%`) menimbulkan beban kognitif berlebih.

---

## 2. Perataan Sel (Cell Alignment Rules)
1. **Angka Numerik & Mata Uang**: **Wajib Rata Kanan (Right-Aligned)** agar seluruh koma desimal dan digit ribuan sejajar lurus secara vertikal.
2. **Teks Deskripsi & Nama Akun**: **Rata Kiri (Left-Aligned)**.
3. **Tanggal & Status Kode (OK / PENDING / ERROR)**: **Rata Tengah (Centered)**.

---

## 3. Penulisan Angka Satuan Ribuan & Jutaan (Scale Multipliers)
Pada laporan tahunan korporat besar, tampilkan angka dalam ribuan atau jutaan:
- Format dalam Jutaan Rupiah: `Rp #,##0,,\M` (menampilkan Rp 1.500.000.000 sebagai `Rp 1,500M`).
- Cantumkan catatan resmi di sudut kanan atas tabel: *(Dinyatakan dalam Jutaan Rupiah, kecuali disebutkan lain)*.
