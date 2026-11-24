# Modul 02: High-to-Low Mesh Map Baking Pipeline

Modul ini menetapkan metodologi pemanggangan (*baking*) data geometri dari model definisi tinggi (*High-Poly / Sub-D*) ke model poligon rendah (*Low-Poly in-game mesh*), penggunaan sangkar pelindung (*Cage mesh*), dan kalibrasi peta pembantu.

---

## 1. Peta Geometri yang Wajib Dibake (The Essential Mesh Maps)

| Nama Peta Tekstur | Ruang Warna | Fungsi & Kegunaan Utama dalam Texturing |
|---|---|---|
| **Tangent Space Normal** | Linear | Mentransfer detail kerutan, bevel, baut dari high-poly tanpa menambah poligon |
| **World Space Normal** | Linear | Mengetahui arah permukaan terhadap langit (+Y atau +Z) untuk penempatan salju/debu |
| **Ambient Occlusion (AO)** | Linear | Menghitung bayangan gelap di sudut-sudut lipatan untuk akumulasi kotoran |
| **Curvature Map** | Linear | Mendeteksi tepi tajam cembung (convex = keausan) dan ceruk cekung (concave = karat) |
| **Position Map** | Linear | Koordinat ruang 3D $(X,Y,Z)$ objek untuk gradien ketinggian dari tanah |
| **Thickness Map** | Linear | Ketebalan geometri untuk efek tembus cahaya kulit (*Subsurface Scattering*) |
| **Color ID Map** | sRGB | Membedakan seleksi material bahan yang berbeda (karet, kaca, logam) dalam satu mesh |

---

## 2. Standar Penamaan Mesh (Baking by Mesh Name)

Untuk mencegah artefak proyeksi sinar menyilang (*ray-casting intersection bleed*) di antara bagian-bagian yang berdekatan:

- Pisahkan komponen model dan beri akhiran penamaan identik:
  - Low-Poly: `Chassis_low`, `Bolt_01_low`, `Optic_low`
  - High-Poly: `Chassis_high`, `Bolt_01_high`, `Optic_high`
- Pada pengaturan baker, aktifkan opsi **Match: By Mesh Name** (bukan *Always*). Baker hanya akan memproyeksikan sinar antara pasangan nama yang cocok secara terisolasi.

---

## 3. Penggunaan Mesh Sangkar (Cage Mesh)

- Jika model memiliki sudut tajam atau bevel ekstrem:
  - Buat salinan mesh low-poly yang diperluas sedikit ke arah normal luar (*pushed along vertex normals*) yang menyelimuti seluruh geometri high-poly tanpa ada bagian yang menembus keluar.
  - Penggunaan Cage mesh mengeliminasi garis belahan normal terputus (*normal map skewing & projection gaps*) pada sudut $90^\circ$.
