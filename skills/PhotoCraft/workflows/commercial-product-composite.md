# Workflow Profile: Commercial Product Composite & Isolation

Profil ini mengatur isolasi objek produk komersial (elektronik, botol parfum, sepatu, perhiasan), pemotongan presisi tinggi menggunakan vektor Pen Tool, pembuatan bayangan kontak sintetis, dan pantulan lantai permukaan.

---

## 1. Ekstraksi Presisi Objek Produk (Clipping Paths)

- **Pen Tool Vector Paths**:
  - Gunakan **Pen Tool (Path Mode)** untuk membuat jalur pemotongan (*clipping path*) dengan kurva Bézier yang mulus pada tepi produk keras (*hard-surface*).
  - Tempatkan anchor point tepat $0.5 - 1$ piksel ke dalam batas produk untuk menghindari kebocoran warna latar belakang (*color fringing*).
  - Terapkan feather lembut sebesar $0.3 - 0.5$ piksel untuk mencegah tepi tampak bergerigi seperti stiker tempelan.

---

## 2. Tiga Tingkat Bayangan Realistis (3-Tier Shadow System)

Jangan pernah menggunakan drop shadow standar bawaan layer style! Bangun sistem bayangan tiga tingkat:

```
[Layer: Product Cutout]
        ↓
[Layer: Contact Shadow] (Sangat gelap, opasitas 85%, blur 1-2px tepat di titik kontak)
        ↓
[Layer: Ambient Occlusion Shadow] (Gradasi menyebar, opasitas 45%, blur 8-15px di bawah dasar)
        ↓
[Layer: Cast Directional Shadow] (Arah jatuhnya cahaya utama, opasitas 25%, blur gradien menjauh)
        ↓
[Layer: Synthetic Floor Reflection] (Invert produk vertikal, blur dinamis, mask gradien pudar)
```

---

## 3. Pembersihan Refleksi & Hotspots

1. **Polarisasi Digital**: Hilangkan silau refleksi liar pada permukaan kaca atau logam menggunakan layer kloning dengan blend mode *Lighten* atau *Darken*.
2. **Rekonstruksi Highlight**: Buat garis highlight simetris baru menggunakan brush putih lembut dengan kurva Pen Tool pada mode *Overlay* atau *Screen*.
