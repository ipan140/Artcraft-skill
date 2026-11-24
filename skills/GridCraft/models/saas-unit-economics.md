# Profil Model: Metrik Bisnis SaaS & Kohort (SaaS Unit Economics & Cohorts)

Profil ini mengatur aturan permodelan bisnis berbasis langganan (*subscription economy*), jembatan pendapatan berulang (*MRR / ARR Waterfall*), analisa retensi kohort (*Cohort Retention Heatmap*), dan rasio kelayakan unit bisnis (*LTV:CAC, CAC Payback*).

---

## 1. Jembatan Pendapatan Berulang (MRR Waterfall)

Pendapatan Bulanan Berulang (*Monthly Recurring Revenue - MRR*) dihitung melalui 5 komponen dinamis:

$$\text{Ending MRR} = \text{Starting MRR} + \text{New MRR} + \text{Expansion MRR} - \text{Contraction MRR} - \text{Churned MRR}$$

1. **New MRR**: Pendapatan dari pelanggan baru yang pertama kali mendaftar.
2. **Expansion MRR**: Pelanggan lama yang melakukan upgrade paket atau menambah lisensi pengguna (*seat expansions*).
3. **Contraction MRR**: Pelanggan lama yang menurunkan paket (*downgrade*).
4. **Churned MRR**: Pelanggan yang membatalkan langganan seutuhnya (*lost revenue*).
5. **Net New MRR**: $\text{New} + \text{Expansion} - \text{Contraction} - \text{Churn}$.

---

## 2. Metrik Kunci Kesehatan Unit Bisnis (Unit Economics)

Model spreadsheet wajib menghitung 4 rasio kelayakan finansial:

| Metrik | Formula Kalkulasi Excel | Nilai Ideal Industri | Makna Bisnis |
| :--- | :--- | :---: | :--- |
| **Gross Margin %** | `(Revenue - COGS) / Revenue` | `> 75%` | Margin kotor software tinggi tanpa biaya fisik. |
| **CAC** | `Total Sales & Marketing Spend / New Customers Acquired` | Rendah | Biaya yang dikeluarkan untuk memikat 1 pelanggan baru. |
| **LTV** | `(ARPU * Gross Margin %) / Churn Rate %` | Tinggi | Estimasi total laba kotor dari 1 pelanggan seumur hidup. |
| **Rasio LTV:CAC** | `LTV / CAC` | **`> 3.0x`** | Tolok ukur apakah mesin akuisisi menguntungkan atau bakar uang. |
| **CAC Payback** | `CAC / (ARPU * Gross Margin %)` | **`< 12 Bulan`**| Jumlah bulan yang dibutuhkan untuk mengembalikan biaya akuisisi. |

---

## 3. Matriks Retensi Kohort (Cohort Retention Matrix)
- Baris tabel mewakili bulan bergabungnya kelompok pelanggan (*Cohort Month*, misal Jan 2026, Feb 2026).
- Kolom tabel mewakili usia masa aktif pelanggan (Bulan ke-0, Bulan ke-1, Bulan ke-2 ... Bulan ke-12).
- Diisi persentase pelanggan yang masih aktif membayar: `=Aktif_Bulan_X / Pelanggan_Awal`.
- Berikan pewarnaan **Conditional Formatting Gradasi Hijau-Putih**: Sel dengan retensi > 90% berwarna hijau pekat, dan memudar saat retensi menurun.
