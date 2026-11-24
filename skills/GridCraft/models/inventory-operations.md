# Profil Model: Manajemen Rantai Pasok & Inventaris (Inventory & Operations)

Profil ini mengatur aturan penyusunan model pergudangan, peramalan persediaan (*inventory forecasting*), stok pengaman (*safety stock*), kuantitas pesanan ekonomis (*Economic Order Quantity - EOQ*), dan titik pemesanan kembali (*Reorder Point*).

---

## 1. Rumus Kuantitas Pesanan Ekonomis (EOQ)

Untuk meminimalkan total biaya pemesanan (*ordering cost*) dan biaya penyimpanan gudang (*holding cost*):

$$\text{EOQ} = \sqrt{\frac{2 \times D \times S}{H}}$$

- **$D$ (Annual Demand)**: Total permintaan unit tahunan.
- **$S$ (Order Cost)**: Biaya tetap setiap kali melakukan pemesanan (biaya administrasi, pengiriman, handling).
- **$H$ (Holding Cost)**: Biaya penyimpanan per unit per tahun (sewa gudang, asuransi, depresiasi/kerusakan barang).

Formula Excel:
```excel
=SQRT((2 * Annual_Demand * Order_Cost) / Holding_Cost_Per_Unit)
```

---

## 2. Stok Pengaman & Titik Pemesanan Kembali (Reorder Point)

Untuk mencegah kekosongan stok (*stockout*) saat terjadi lonjakan permintaan tak terduga atau keterlambatan pengiriman pemasok:

$$\text{Safety Stock} = Z \times \sigma_L \times \sqrt{L}$$
$$\text{Reorder Point (ROP)} = (\text{Rata-rata Penjualan Harian} \times \text{Lead Time Hari}) + \text{Safety Stock}$$

- **$Z$ (Service Level Factor)**: Nilai z-score untuk tingkat layanan yang diinginkan (misal $95\% \rightarrow Z = 1.65$; $99\% \rightarrow Z = 2.33$).
- Formula Excel untuk Z-score: `=NORM.S.INV(Service_Level_Percent)`.

---

## 3. Klasifikasi Analisa ABC Inventaris
Gunakan fungsi array dinamis untuk membagi SKU barang ke dalam 3 kelas Pareto:
- **Kelas A (Prioritas Tinggi)**: 20% item teratas yang menyumbang 80% dari total nilai perputaran uang.
- **Kelas B (Prioritas Sedang)**: 30% item berikutnya yang menyumbang 15% dari total nilai uang.
- **Kelas C (Prioritas Rendah)**: 50% sisa item yang hanya menyumbang 5% dari total nilai uang.
