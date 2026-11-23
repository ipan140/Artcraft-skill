# Modul 06: Color Grading & Adjustment Layers

Modul ini menetapkan alur kerja penataan gaya warna (*color grading*), penyelarasan palet harmonis (*color harmony*), penggunaan *Selective Color*, *Color Balance*, dan *Gradient Maps*.

---

## 1. Urutan Penyesuaian Warna Tiga Tingkat

```
[3. Stylistic Color Grade] (LUTs, Split Toning, Teal-Orange, Vintage Fade)
        ↑
[2. Secondary Color Correction] (Selective Color: Memperbaiki skintone, dedaunan, pakaian)
        ↑
[1. Primary Neutral Balance] (White balance correction, neutral gray point, Curves contrast)
```

---

## 2. Penguasaan Selective Color untuk Warna Kulit (Skintone Perfection)

Layer penyesuaian **Selective Color** adalah alat utama untuk mengkalibrasi rona kulit manusia:

- **Pada Saluran Reds**:
  - Kurangi Cyan ($-5\%$ hingga $-15\%$) untuk memberikan kehangatan alami.
  - Tambahkan Yellow ($+3\%$ hingga $+10\%$) jika kulit terlalu merah membara (*sunburnt*).
  - Kurangi Magenta jika kulit terlalu ungu/pucat.
- **Pada Saluran Yellows**:
  - Kurangi Cyan dan sesuaikan Yellow untuk menyeimbangkan nada dasar (*undertone*).
- **Pada Saluran Neutrals**:
  - Penambahan atau pengurangan sedikit warna Cyan/Magenta/Yellow pada neutrals akan menyatukan seluruh rona midtone gambar secara kohesif.

---

## 3. Split Toning Menggunakan Curves & Gradient Maps

- **Curves Per-Channel**:
  - Naikkan Blue di Shadows untuk memberikan nuansa dingin sinematik (*cool shadows*).
  - Naikkan Red dan Green di Highlights untuk memberikan kilau keemasan hangat (*warm highlights*).
- **Gradient Map Tinting**:
  - Gunakan Gradient Map dari warna biru tua (shadows) ke oranye keemasan (highlights).
  - Turunkan opasitas layer menjadi $8 - 15\%$ dengan Blend Mode **Soft Light** untuk menyatukan elemen-elemen komposit yang berbeda sumber.
