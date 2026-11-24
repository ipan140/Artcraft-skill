# Modul 02: Feature Tree Hierarchy & Robust Modeling

Modul ini menetapkan urutan baku pembentukan pohon fitur rekayasa (*Feature Tree / History Tree*) untuk menghasilkan model benda padat yang stabil, tahan eror saat dimensi diubah, dan mudah dimodifikasi oleh insinyur lain.

---

## 1. Urutan Baku Pembentukan Fitur Rekayasa (Robust Feature Hierarchy)

```
[1. Datum Planes, Axes & Coordinate Systems]
        ↓
[2. Primary Base Solid Feature] (Extrude / Revolve massa utama)
        ↓
[3. Secondary Additive Features] (Bosses, Flanges, Mounting Pads)
        ↓
[4. Subtractive Features] (Pockets, Cutouts, Countersunk/Counterbore Holes)
        ↓
[5. Engineering Features] (Draft Angles, Shelling, Ribs)
        ↓
[6. Cosmetic & Finishing Features] (Fillets, Chamfers, Thread Representation)
```

---

## 2. Aturan Emas: Fillet & Chamfer di Akhir Pohon Fitur

> [!IMPORTANT]
> **JANGAN PERNAH** memasukkan fillet atau chamfer ke dalam sketsa 2D awal!
> 1. Fillet pada sketsa 2D memecah garis menjadi busur-busur kecil yang menyulitkan penambahan relasi geometris tangen dan dimensi acuan.
> 2. Buat seluruh benda padat dalam bentuk balok/sudut tajam terlebih dahulu.
> 3. Terapkan fitur 3D Fillet dan 3D Chamfer pada langkah-langkah paling akhir dari pohon fitur (*feature tree*). Ini mempermudah supresi fitur saat analisis elemen hingga (FEA/Simulasi) atau penggantian radius cetakan.

---

## 3. Pencegahan Kegagalan Relasi Induk-Anak (Parent-Child Brittleness)

- Jangan menempelkan bidang sketsa baru pada permukaan fillet atau chamfer, karena jika radius fillet diubah di masa mendatang, sketsa anak akan kehilangan bidang referensi (*lost plane reference error*).
- Selalu tempelkan sketsa pada **Primary Datum Planes** atau permukaan datar struktural utama.
