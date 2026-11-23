# Modul 02: Height & Displacement Sculpting

Modul ini mendefinisikan aturan pembentukan medan elevasi permukaan (*height map*) berbasis pemisahan frekuensi spasial tiga tingkat (*frequency separation*) untuk menghasilkan detail permukaan tanpa artefak penjepitan (*clipping*).

---

## 1. Pemisahan Frekuensi Spasial (Frequency Hierarchy)

Peta tinggi akhir harus dibentuk dari gabungan bertingkat tiga frekuensi:

```
Height_Final = Clamp01( (Macro * w1) + (Meso * w2) + (Micro * w3) )
```

1. **Makro ($w_1 = 0.50 - 0.70$)**:
   - Bentuk struktural utama: kontur ubin, plat baja bertumpuk, balok batu, lengkungan papan kayu.
   - Menentukan siluet dan *displacement geometry* (Tessellation / Nanite displacement).
2. **Meso ($w_2 = 0.20 - 0.35$)**:
   - Kerusakan tingkat sedang: goresan pahat, retakan ubin, lekukan benturan logam (*dents*), paku keling (*rivets*).
3. **Micro ($w_3 = 0.05 - 0.15$)**:
   - Tekstur taktil: pori-pori beton, butiran pasir marmer, serat mikro kayu, karat berbutir halus.

---

## 2. Penanganan Batas Nilai (Dynamic Range & Clipping Avoidance)

- Nilai ketinggian harus berada dalam rentang $0.0$ (palung terdalam) hingga $1.0$ (puncak tertinggi).
- **Auto-Histogram Levels**: Selalu gunakan node penyesuaian level untuk memastikan rentang dinamis penuh tanpa memotong (*flat-topping clipping*) pada nilai $1.0$ atau $0.0$.
- **Slope Blur Greyscale**: Gunakan slope blur untuk memberikan efek erosi alami pada tepian formasi buatan.

---

## 3. Seamless Tiling & Periodisitas

- Semua generator noise harus dikonfigurasi dengan mode periodik / toroidal wrapping aktif ($f(x, y) = f(x + 1, y) = f(x, y + 1)$).
- Uji kontinuitas sambungan dengan memeriksa kuadran tengah saat tekstur digeser sebesar $\Delta U = 0.5, \Delta V = 0.5$.
