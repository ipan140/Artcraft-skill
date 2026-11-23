# Modul 02: Formula Dinamis Modern & Optimasi Kecepatan (Modern Formulas & Dynamic Arrays)

Modul ini menetapkan pemakaian formula spreadsheet modern (Excel 365, Google Sheets), keunggulan fungsi `XLOOKUP`, optimasi efisiensi komputasi dengan `LET`, pembuatan fungsi kustom dengan `LAMBDA`, array dinamis (`FILTER`, `SORT`, `UNIQUE`), serta larangan tegas penggunaan fungsi volatil usang.

---

## 1. Standar Pencarian: Mengapa `XLOOKUP` Wajib Menggantikan `VLOOKUP`

Fungsi `VLOOKUP` memiliki kelemahan fatal: mengandalkan indeks angka kolom statis yang akan rusak jika ada kolom baru disisipkan, tidak bisa mencari ke arah kiri (*left lookup*), dan melambatkan spreadsheet:

### Perbandingan Sintaks:
```excel
❌ VLOOKUP Lama (Rapuh & Rentan Rusak):
=IFERROR(VLOOKUP(A2, Data!A:E, 4, FALSE), "Not Found")

✅ XLOOKUP Modern (Cepat, Aman & Tahan Geser Kolom):
=XLOOKUP(A2, Data!A:A, Data!D:D, "Not Found", 0)
```

- **Pencarian Dua Arah (Two-Way Matrix Lookup)**:
```excel
=XLOOKUP(Target_Baris, Rentang_Baris, XLOOKUP(Target_Kolom, Rentang_Header, Tabel_Data))
```

---

## 2. Optimasi Kinerja Spreadsheet dengan Fungsi `LET`

Fungsi `LET` memungkinkan Anda mendefinisikan variabel lokal di dalam sebuah sel, menghitung ekspresi matematika hanya satu kali, lalu menggunakan kembali hasilnya berkali-kali. Ini meningkatkan kecepatan komputasi hingga 10x lipat:

```excel
=LET(
    revenue, SUM(B2:B100),
    cogs, SUM(C2:C100),
    gross_profit, revenue - cogs,
    margin_percent, gross_profit / revenue,
    IF(margin_percent > 0.4, "High Margin (" & TEXT(margin_percent, "0.0%") & ")", "Review Pricing")
)
```

---

## 3. Manipulasi Array Dinamis: `FILTER`, `SORT`, `UNIQUE`
1. **FILTER**: Mengekstrak baris data yang memenuhi kondisi tertentu tanpa perlu membuat Pivot Table:
   `=FILTER(Tabel_Penjualan, Kolom_Wilayah = "Jakarta", "Tidak Ada Data")`
2. **UNIQUE & SORT**: Menghasilkan daftar unik yang langsung terurut abjad:
   `=SORT(UNIQUE(Kolom_Kategori_Produk))`

---

## 4. Larangan Khusus: Larangan Fungsi Volatil (`OFFSET`, `INDIRECT`)
- **Bahaya Fungsi Volatil**: Fungsi seperti `OFFSET()`, `INDIRECT()`, `TODAY()`, dan `NOW()` akan memicu kalkulasi ulang (*recalculation*) di seluruh workbook setiap kali ada satu sel apa pun yang diubah.
- Jika spreadsheet memiliki 10.000 baris dengan rumus `OFFSET`, spreadsheet akan macet dan mengalami jeda beberapa detik (*spreadsheet freeze*).
- **Solusi**: Gantikan `OFFSET()` dengan pasangan fungsi dinamis berbasis `INDEX()` atau `XLOOKUP()`.
