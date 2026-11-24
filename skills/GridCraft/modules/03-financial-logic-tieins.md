# Modul 03: Logika Keuangan & Sel Verifikasi Audit (Financial Logic & Check-Sums)

Modul ini menetapkan integrasi matematis antar laporan keuangan, skedul penyusutan aktiva tetap (*depreciation schedule*), pemodelan utang, serta perancangan sel audit dengan toleransi selisih nol (*zero-tolerance balance check*).

---

## 1. Mekanisme Keterkaitan 3 Laporan Keuangan

Kunci integritas model finansial adalah aliran angka yang tidak boleh diputus manual:

1. **Dari Laba Rugi ke Arus Kas**:
   - Baris pertama di Arus Kas Operasi (*Cash Flow from Operations - CFO*) **wajib mengambil nilai dari Laba Bersih (*Net Income*)** pada baris terbawah Laporan Laba Rugi.
   - Tambahkan kembali (*add-back*) beban non-kas seperti **Beban Depresiasi & Amortisasi**.
2. **Dari Arus Kas ke Neraca**:
   - Saldo Kas Akhir Periode pada Laporan Arus Kas menjadi nilai yang dimasukkan ke dalam pos **Kas & Setara Kas (Cash & Cash Equivalents)** pada aset lancar Neraca.
3. **Dari Laba Rugi ke Ekuitas Neraca**:
   - Pos Laba Ditahan (*Retained Earnings*) dihitung dinamis:
   $$\text{Laba Ditahan Akhir} = \text{Laba Ditahan Awal} + \text{Laba Bersih Periode Berjalan} - \text{Dividen yang Dibagikan}$$

---

## 2. Skedul Penyusutan Aktiva Tetap (PP&E Waterfall)

Jangan pernah menghitung depresiasi langsung di dalam satu baris neraca. Buat tabel air terjun (*waterfall schedule*):

```text
Saldo Awal Nilai Buku Aset Tetap
+ Pengeluaran Modal Baru (Capital Expenditures / CapEx)
- Beban Depresiasi Periode Berjalan
- Penjualan / Pelepasan Aset
= Saldo Akhir Nilai Buku Aset Tetap (Masuk ke Neraca)
```

- **Metode Garis Lurus (Straight-Line Depreciation)**:
  `=SLN(Biaya_Perolehan, Nilai_Sisa, Umur_Ekonomis_Tahun)`

---

## 3. Sel Audit Keseimbangan Mutlak (The Golden Check-Sum)

Model keuangan profesional wajib memiliki blok audit di baris paling bawah setiap sheet:

```excel
=LET(
    assets, C45,
    liab_equity, C80,
    variance, ROUND(assets - liab_equity, 2),
    IF(variance = 0, "OK: BALANCED", "ERR: IMBALANCE " & TEXT(variance, "Rp #,##0"))
)
```

- Berikan **Format Bersyarat**:
  - Jika bernilai `"OK: BALANCED"` $\rightarrow$ Teks hijau tua latar abu-abu lembut.
  - Jika bernilai `"ERR..."` $\rightarrow$ Teks merah tebal berkedip latar merah muda (#FEE2E2).
