# Modul 02: Halaman Berdampingan & Imposisi Jilid (Facing Pages & Imposition)

Modul ini menetapkan aturan tata letak halaman kembar berhadapan (*spread*), perbedaan perlakuan halaman kiri (*Verso*) vs halaman kanan (*Recto*), serta kompensasi ketebalan punggung jilid (*gutter creep*).

---

## 1. Anatomi Spread: Halaman Kiri (Verso) vs Kanan (Recto)

Pada dokumen buku atau majalah berpenjilidan, halaman selalu dibaca berpasangan:

```text
┌──────────────────────────────────────┬──────────────────────────────────────┐
│  HALAMAN KIRI (VERSO / NOMOR GENAP)  │  HALAMAN KANAN (RECTO / NOMOR GANJIL)│
│                                      │                                      │
│  [Margin Luar]      [Margin Punggung]│[Margin Punggung]       [Margin Luar] │
│      18mm                 25mm       │     25mm                   18mm      │
│                                      │                                      │
│                 LIPATAN TENGAH BUKU  │                                      │
│                    (BINDING SPINE)   │                                      │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

1. **Margin Dalam (Inside Margin / Gutter)**:
   - Dibuat **jauh lebih lebar** (minimal `25 mm s/d 32 mm`) dibanding margin luar (`18 mm`).
   - Alasan: Ketika buku dibuka, sebagian kertas akan melengkung masuk ke dalam lekukan lem atau jahitan benang. Jika margin dalam terlalu sempit, teks akan tertelan ke dalam punggung buku dan sulit dibaca.
2. **Margin Luar (Outside Margin / Fore-edge)**:
   - Disediakan area aman untuk jempol pembeli memegang buku tanpa menutupi kata-kata teks isi.

---

## 2. Metode Penjilidan & Perhitungan Punggung (Spine Calculation)

### 2.1 Penjilidan Lem Panas (Perfect Binding)
Digunakan untuk buku tebal (> 60 halaman) atau majalah edisi tebal:
$$\text{Tebal Punggung (Spine)} = \frac{\text{Jumlah Halaman}}{2} \times \text{Ketebalan Kertas (Caliper)}$$
*Contoh*: Buku 200 halaman menggunakan kertas Bookpaper 70 GSM (tebal per lembar $0.11\text{mm}$):
$$\text{Spine} = 100 \times 0.11\text{mm} = 11.0\text{mm}$$
Desainer cover wajib menyisipkan bidang selebar 11.0 mm di antara cover depan dan cover belakang.

### 2.2 Penjilidan Jahit Kawat / Kancing Kawat (Saddle Stitch)
Digunakan untuk majalah tipis atau buklet brosur (< 48 halaman):
- Halaman dilipat dua dan di-steples di lipatan tengah.
- Terjadi fenomena **Creep** (lembaran halaman di bagian tengah terdorong keluar sedikit melewati lembaran terluar). Margin luar halaman tengah perlu digeser ke dalam $1\text{mm s/d } 2\text{mm}$ saat proses *imposition* cetak.
