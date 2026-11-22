# AniCraft: Panduan Timeline & Keyframing

Dokumen ini mendefinisikan teknik manipulasi kurva kecepatan, hirarki layer, dan prinsip fisika gerak untuk animasi vektor 2D di **AniCraft**.

---

## 1. Prinsip Gerak Alami (Motion Physics)

1. **Squash and Stretch (Pipih & Mulur)**:
   - Memberikan ilusi kelenturan dan massa. Saat bola karet membentur lantai, skalakan sumbu X menjadi 120% dan sumbu Y menjadi 80% (mempertahankan total volume tetap 100%).
2. **Anticipation (Ancang-ancang)**:
   - Sebelum karakter atau objek melesat ke kanan, tarik objek sedikit ke kiri (5-10% dari jarak tempuh) selama 3–5 frame.
3. **Follow-Through & Overlapping Action**:
   - Bagian tubuh yang lentur (rambut, jubah, tali) tidak berhenti bersamaan dengan badan utama; mereka terus bergerak melewati titik berhenti (*overshoot*) sebelum kembali ke posisi stabil.
4. **Slow In and Slow Out (Ease In / Ease Out)**:
   - Lebih banyak frame diletakkan di dekat awal dan akhir gerakan, lebih sedikit frame di tengah gerakan cepat.

---

## 2. Hirarki Layer & Parenting

* **Parent-Child Linking**:
  - Ikat layer anak ke layer induk agar rotasi dan translasi induk diteruskan secara otomatis ke anak (misal: Lengan Atas $\rightarrow$ Lengan Bawah $\rightarrow$ Telapak Tangan).
* **Null Objects / Controllers**:
  - Gunakan layer kosong (*Null Controller*) untuk mengendalikan kelompok objek yang kompleks tanpa merusak keyframe masing-masing shape.

---

## 3. Path Morphing (Perubahan Bentuk Garis)

Untuk mengubah Shape A menjadi Shape B secara mulus:
1. **Kesesuaian Jumlah Titik (Vertex Count)**:
   - Pastikan Shape A dan Shape B memiliki jumlah titik jangkar (*anchor points*) yang sama persis.
   - Jika Shape B memiliki sudut lebih banyak, tambahkan titik semu (*dummy vertex*) pada Shape A di garis lurusnya.
2. **First Vertex Alignment**:
   - Titik awal (titik nomor 1) pada Shape A harus sejajar lokasinya dengan titik nomor 1 pada Shape B untuk mencegah bentuk berputar/terpelintir saat bertransformasi.

---

## 4. Manipulasi Graph Editor (Kurva Bezier)

* **Linear**: Kecepatan konstan tanpa akselerasi. Hanya untuk gerakan mekanik murni.
* **Ease Out (Brake Curve)**:
  - Tangent Handle keluar ditarik panjang ke kanan. Kecepatan melonjak di frame 1 lalu meluncur perlahan. Ideal untuk menu pop-up, modal masuk, dan transisi UI.
* **Elastic / Bounce Curve**:
  - Kurva melewati batas nilai 100% (misal 108%) lalu kembali ke 98% sebelum berhenti di 100%. Memberikan kesan material kenyal/ramah.
