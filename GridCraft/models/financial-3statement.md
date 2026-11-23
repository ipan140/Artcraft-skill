# Profil Model: Permodelan Finansial 3 Laporan (3-Statement Financial Model)

Profil ini mengatur aturan penyusunan model keuangan terintegrasi: Laporan Laba Rugi (*Income Statement / P&L*), Neraca (*Balance Sheet*), dan Laporan Arus Kas (*Cash Flow Statement*).

---

## 1. Hubungan Silang Antar Laporan (The Three-Statement Tie-Ins)

Ketiga laporan keuangan bukan dokumen yang berdiri sendiri, melainkan terikat oleh siklus matematika akuntansi:

```mermaid
flowchart TD
    PL[Income Statement: Laba Bersih / Net Income] --> RetainedEarnings[Neraca: Laba Ditahan / Retained Earnings]
    PL --> OperatingCash[Cash Flow: Net Income sebagai Titik Awal]
    
    DeprSchedule[Jadwal Penyusutan Aktiva Tetap (PP&E)] --> PLDepr[P&L: Beban Depresiasi]
    DeprSchedule --> BSAssets[Neraca: Akumulasi Penyusutan Mengurangi PP&E]
    DeprSchedule --> NonCashAdd[Cash Flow: Tambahkan Kembali Depresiasi Non-Kas]
    
    OperatingCash --> NetCashChange[Total Perubahan Kas Bersih]
    NetCashChange --> EndingCash[Kas Akhir Periode]
    EndingCash --> BSCash[Neraca: Posisi Kas & Setara Kas Lancar]
```

---

## 2. Struktur Neraca & Baris Audit Keseimbangan (Balance Check)

Neraca **wajib seimbang sempurna** pada setiap kolom periode tahun/bulan:

$$\text{Total Aset (Aktiva)} = \text{Total Liabilitas (Kewajiban)} + \text{Total Ekuitas (Modal)}$$

### Sel Audit Wajib (The Check-Sum Cell):
Di baris paling bawah lembar Neraca, sertakan sel pengecekan:
```excel
=IF(ROUND(Total_Aset - (Total_Liabilitas + Total_Ekuitas), 2) = 0, "BALANCED", "ERROR: SELISIH " & TEXT(Total_Aset - (Total_Liabilitas + Total_Ekuitas), "Rp #,##0"))
```
Jika nilai sel audit tidak sama dengan nol (bahkan selisih Rp 1), model dianggap cacat dan tidak boleh diserahkan ke klien/atasan.

---

## 3. Jadwal Pendukung (Supporting Schedules)
1. **Jadwal Modal Kerja (Working Capital Schedule)**:
   - Piutang Usaha (*Accounts Receivable*): Dihitung berdasarkan *Days Sales Outstanding (DSO)*.
   - Hutang Usaha (*Accounts Payable*): Dihitung berdasarkan *Days Payable Outstanding (DPO)*.
2. **Jadwal Amortisasi Utang & Bunga (Debt Schedule)**:
   - Saldo Awal Utang $\rightarrow$ Penambahan Pinjaman Baru $\rightarrow$ Pembayaran Pokok $\rightarrow$ Saldo Akhir Utang.
   - Beban bunga dihitung dari rata-rata saldo utang: `Beban Bunga = AVERAGE(Saldo_Awal, Saldo_Akhir) * Suku_Bunga`.
