# Profil Publikasi: Kustom Format Publikasi (Custom Publication Formats)

Profil ini digunakan ketika format publikasi yang dirancang berada di luar majalah dan buku standar—seperti **Zine Independen**, **Katalog Produk Eceran**, **Menu Restoran & Kafe**, atau **Brosur Lipat Tiga (Tri-Fold Brochure)**.

---

## 1. Konfigurasi Publikasi Kustom

Tentukan jenis publikasi kustom pada [config.md](../config.md) pada opsi `custom_publication_type`:

```yaml
publication_type: "custom-publication"
custom_publication_type: "product-catalog" # zine | product-catalog | restaurant-menu | tri-fold-brochure
```

---

## 2. Profil 1: Katalog Produk & Ritel (Product Catalog)
- **Struktur Halaman**: Grid kotak modular 2x3 atau 3x4 per halaman.
- **Elemen per Produk**:
  - Foto isolasi produk berlatar putih bersih (300 DPI CMYK).
  - Nama Produk & Kode SKU (`font-bold`, 10pt).
  - Rincian Spesifikasi Material & Dimensi (8pt).
  - Harga Nominal dengan warna penegas yang kontras.
- **Indeks Kategori Berwarna**: Tepi luar halaman (*thumb tabs*) diberi blok warna pembeda antar kategori barang untuk navigasi cepat jari pembeli.

---

## 3. Profil 2: Brosur Lipat Tiga (Tri-Fold Brochure / 6 Panel)
- **Ukuran Lembar Dasar**: A4 Lanskap (`297 x 210 mm`) dilipat menjadi 3 panel.
- **Kompensasi Lebar Lipatan (Fold Compensation)**:
  - Panel Luar Muka: `100 mm`
  - Panel Tengah: `100 mm`
  - Panel Lipatan Dalam (yang masuk ke dalam lipatan): `97 mm` (wajib dipersempit 3mm agar kertas tidak melengkung atau sobek saat dilipat di mesin percetakan).

---

## 4. Profil 3: Menu Makanan & Minuman (Restaurant Menu)
- **Ergonomi Penglihatan**: Pembaca menu memindai secara zig-zag (Golden Triangle / Segitiga Emas: Mata pertama kali melihat sudut kanan atas $\rightarrow$ lalu ke kiri atas $\rightarrow$ lalu ke tengah).
- **Format Harga**: Jangan sejajarkan angka harga di kolom kanan jauh dengan titik-titik putus (*leader dots*), karena hal itu membuat pelanggan hanya membandingkan harga. Taruh harga langsung 1 spasi setelah nama menu dengan ukuran font yang sama.

---

## 5. Profil 4: Zine Seni & Budaya Independen (Art & Independent Zine)
- **Gaya Visual**: Tipografi eksperimental, batas margin tidak lazim (*rule-breaking*), kolase foto hitam putih berkontras tinggi (*halftone dots*), dan estetika fotokopi / risograph.
- **Penjilidan**: Jahit kawat tengah (*saddle stitch*) atau jahit benang manual sederhana.
