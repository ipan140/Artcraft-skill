# Modul 07: Sheet Metal Mechanics & Flat Pattern Unfolding

Modul ini menetapkan formula perhitungan deformasi plastis penekukan pelat logam, kalkulasi kelonggaran tekukan (*Bend Allowance & Bend Deduction*), dan ekspor pola bentangan datar 2D.

---

## 1. Fisika Deformasi Tekukan (Neutral Axis & K-Factor)

Saat pelat logam ditekuk:
- Serat material bagian dalam mengalami kompresi (pemendekan).
- Serat material bagian luar mengalami tegangan tarik (pemanjangan).
- Di antara keduanya terdapat **Sumbu Netral (Neutral Axis)** yang panjangnya tidak berubah:

$$\text{Bend Allowance (BA)} = \frac{\pi \cdot A}{180} \left( R + K \cdot T \right)$$

Di mana:
- $A$ = Sudut penekukan dalam derajat (misal $90^\circ$).
- $R$ = Radius tekuk dalam ($mm$).
- $T$ = Ketebalan nominal pelat ($mm$).
- $K$ = K-Factor (posisi sumbu netral terhadap ketebalan, berkisar $0.30 - 0.50$).

---

## 2. Pengurangan Tekukan (Bend Deduction - BD)

Untuk menghitung panjang pola bentangan datar (*Flat Length*) dari dimensi luar flensa ($OSSB_1$ dan $OSSB_2$):

$$\text{BD} = 2 \cdot (R + T) \cdot \tan\left(\frac{A}{2}\right) - \text{BA}$$
$$\text{Panjang Pola Datar} = \text{Flensa}_1 + \text{Flensa}_2 - \text{BD}$$

---

## 3. Ekspor Pola Bentangan Datar (Flat Pattern DXF)

Pola bentangan datar yang diekspor untuk mesin pemotong laser CNC (*Laser Cutting*) wajib memiliki layer terpisah:

| Nama Layer DXF | Tipe Geometri | Warna Standar | Makna Operasional Mesin |
|---|---|---|---|
| `CUT_OUTER` | Polyline Tertutup | Putih / Hitam | Garis batas potong luar pelat |
| `CUT_INNER` | Lingkaran / Slot | Kuning | Lubang tembus dalam dan bukaan ventilasi |
| `BEND_UP` | Garis Putus-Putus | Merah | Garis penekukan arah ke atas |
| `BEND_DOWN` | Garis Putus-Putus | Biru | Garis penekukan arah ke bawah |
| `ETCH_ENGRAVE` | Teks / Garis | Hijau | Nomor part atau teks penanda grafir laser |
