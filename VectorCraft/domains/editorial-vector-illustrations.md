# Domain Profile: Editorial & Narrative Vector Illustrations

Profil ini menetapkan panduan pembuatan ilustrasi vektor editorial multi-layer, adegan narasi situs web (hero illustration), ilustrasi infografis, gaya isometrik 3D, dan pewarnaan gradien bertingkat (*gradient shading*).

---

## 1. Komposisi Lapisan Kedalaman Visual (Depth Stacking)

Bangun adegan ilustrasi ke dalam 4 bidang kedalaman visual:

```
[Layer 4: Foreground Elements & Framing] (Siluet dedaunan/bingkai di depan kamera)
        ↑
[Layer 3: Primary Characters & Focal Action] (Karakter utama dengan kontras warna tertinggi)
        ↑
[Layer 2: Midground Environment] (Meja kerja, bangunan terdekat, perabot arsitektur)
        ↑
[Layer 1: Background Plate & Sky] (Gedung pencakar langit jauh, pegunungan, gradien cakrawala)
```

---

## 2. Perspektif Isometrik & Grid Proyeksi

Untuk ilustrasi infografis teknis atau kota isometrik:
- **Sudut Sumbu Isometrik**:
  - Sumbu vertikal tegak lurus $90^\circ$.
  - Sumbu horizontal kiri dan kanan berputar tepat $30^\circ$ terhadap bidang datar (matriks proyeksi skala vertikal $\cos(30^\circ) \approx 0.866$).
- **Konsistensi Arah Cahaya**:
  - Tentukan satu arah cahaya global (misal: cahaya datang dari kiri atas).
  - Bidang menghadap atas: Nilai paling terang ($100\%$).
  - Bidang menghadap kiri: Nilai midtone ($70\%$).
  - Bidang menghadap kanan: Nilai bayangan gelap ($40\%$).

---

## 3. Shading Gradien & Masker Opasitas (Opacity Masks)

- Gunakan gradien linear lembut (*Linear Gradient*) dari warna terang ke transparan ($100\% \to 0\%$ opacity) untuk mensimulasikan volume kurva objek tanpa garis tepi (*outline-free flat shading*).
- Kelompokkan bayangan jatuh ke dalam bentuk path tersendiri dengan blend mode **Multiply** pada opasitas $15 - 25\%$.
