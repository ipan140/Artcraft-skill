# Modul 01: Parametric Sketch Constraints & Degrees of Freedom

Modul ini menetapkan aturan ketat pembuatan sketsa 2D parametrik dasar solid modeling: penghapusan seluruh derajat kebebasan (*Degrees of Freedom - DOF*), relasi geometris, dan dimensi penggerak (*driving dimensions*).

---

## 1. Status Sketsa Terkendala Penuh (Fully Constrained)

Dalam perancangan CAD parametrik profesional (SolidWorks, Inventor, Onshape, FreeCAD, CadQuery):
- **Wajib Hitam (Fully Defined)**: Setiap elemen sketsa (titik, garis, busur) harus memiliki status terkendala penuh sehingga warnanya berubah menjadi hitam.
- **Dilarang Sketsa Biru (Under-constrained)**: Garis berwarna biru berarti masih memiliki derajat kebebasan bebas bergerak. Jika parameter lain diubah, geometri bisa bergeser secara tidak terduga dan merusak seluruh pohon fitur di bawahnya.
- **Dilarang Over-constrained**: Jangan memasukkan relasi atau dimensi yang berulang/kontradiktif (garis merah/kuning).

---

## 2. Hirarki Penerapan Relasi Geometris vs Dimensi

Sebelum memberikan ukuran angka (dimensi linear), selesaikan terlebih dahulu relasi geometris intrinsik:

```
[1. Geometri Acuan Titik Pusat / Origin Coincident]
        ↓
[2. Relasi Garis Dasar: Horizontal / Vertikal / Kolinier]
        ↓
[3. Relasi Sambungan Kurva: Tangen / Konsentris / Tegak Lurus]
        ↓
[4. Relasi Kesamaan Ukuran: Equal Length / Equal Radius / Simetri]
        ↓
[5. Dimensi Penggerak (Driving Dimensions): Panjang, Lebar, Diameter, Sudut]
```

---

## 3. Titik Nol Acuan (Origin Anchor)

- Setiap sketsa primer wajib ditambatkan ke titik acuan **Origin $(0, 0, 0)$** atau proyeksi geometri datum acuan.
- Gunakan fitur simetri di sekitar bidang utama (*Front, Top, Right Planes*) agar pemodelan fitur turunan (seperti mirroring atau ekstrusi mid-plane) menjadi kokoh dan simetris secara otomatis.
