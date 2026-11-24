# Modul 02: Sistem Proyeksi & Pandangan Potongan (Orthographic & Section Views)

Modul ini mengatur tata letak multi-pandangan ortogonal, penempatan pandangan proyeksi sudut pertama vs sudut ketiga, serta metode pemotongan penampang (*sectional cutting*).

---

## 1. Perbandingan Sistem Proyeksi

| Parameter | Proyeksi Sudut Pertama (First Angle - E) | Proyeksi Sudut Ketiga (Third Angle - USA/Asia) |
| :--- | :--- | :--- |
| **Simbol ISO** | Kerucut: lingkaran di kanan silinder | Kerucut: lingkaran di kiri silinder |
| **Letak Pandangan Atas** | Diletakkan di **BAWAH** pandangan depan | Diletakkan di **ATAS** pandangan depan |
| **Letak Pandangan Samping Kiri** | Diletakkan di **KANAN** pandangan depan | Diletakkan di **KIRI** pandangan depan |
| **Letak Pandangan Samping Kanan**| Diletakkan di **KIRI** pandangan depan | Diletakkan di **KANAN** pandangan depan |
| **Wilayah Penggunaan Dominan** | Eropa Daratan, Standar ISO / DIN lama | Indonesia, Jepang (JIS), AS (ASME), Australia |

> [!IMPORTANT]
> Konfigurasikan pilihan proyeksi di `config.md` pada variabel `projection_angle: "third_angle"` atau `"first_angle"`.

---

## 2. Tata Letak Pandangan Ortogonal Standar

1. **Pandangan Utama (Front View / Tampak Depan)**:
   - Pilih pandangan yang menampilkan fitur paling khas dan dimensi benda terpanjang dalam posisi kerja alaminya.
2. **Pandangan Atas (Top View / Plan View)**:
   - Menampilkan lebar dan kedalaman benda. Garis proyeksi harus lurus sejajar sempurna secara vertikal dengan pandangan depan.
3. **Pandangan Samping (Side View / End Elevation)**:
   - Sejajar horizontal dengan pandangan depan. Ketinggian benda harus sama persis.
4. **Pandangan Isometrik 3D**:
   - Ditempatkan di sudut kanan atas lembar gambar sebagai visualisasi pembantu (tanpa dimensi detail).
   - Sudut proyeksi isometrik: 30° terhadap bidang horizontal.

---

## 3. Jenis-Jenis Potongan Penampang (Section Views)

Untuk memperjelas rongga dalam, gunakan salah satu metode potongan penampang:

1. **Potongan Penuh (Full Section)**:
   - Bidang potong membelah benda tepat di sepanjang sumbu simetri dari ujung ke ujung.
2. **Potongan Separuh (Half Section)**:
   - Khusus benda simetris melingkar (poros, roda gigi, flange).
   - Memotong seperempat bagian benda, sehingga setengah pandangan menampilkan tampak luar dan setengah lagi menampilkan penampang rongga dalam.
   - Dipisahkan oleh garis sumbu simetri (*centerline*), bukan garis tebal.
3. **Potongan Meloncat (Offset Section)**:
   - Bidang potong dibelokkan 90° untuk melewati beberapa lubang atau rongga yang tidak berada dalam satu garis lurus.
   - Belokan bidang potong ditandai garis tebal di ujung belokan, tetapi tidak digambarkan garis pemisah pada hasil arsiran potongan.
4. **Potongan Lokal / Sobekan (Broken-Out / Local Section)**:
   - Memotong sebagian kecil area luar dengan garis batas bebas tipis (*freehand line*) untuk memperlihatkan lubang pasak atau lubang ulir internal tanpa memotong seluruh benda.
5. **Detail Pembesaran (Detail View)**:
   - Area fitur mikro (seperti alur snap ring atau ulir mikro) dilingkari garis tipis berhuruf (misal: Lingkaran "A").
   - Digambar terpisah dengan skala pembesaran (misal: `DETAIL A - SKALA 5:1`).
