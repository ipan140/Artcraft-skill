# Asset Profile: Organic Characters & Creatures

Profil ini mengatur pengecatan tekstur 3D untuk karakter manusia digital fotorealistik, makhluk fantasi (*creatures*), dan pakaian bertekstur, menekankan peta ketebalan hamburan bawah permukaan (*subsurface scattering*), variasi zona warna wajah, dan mikro-relief pori-pori kulit.

---

## 1. Tiga Zona Warna Wajah Manusia (The Three Facial Color Zones)

Wajah manusia tidak pernah memiliki satu warna daging seragam:

```
[Zona Atas (Dahi / Pelipis)] ──> Kekuningan / Pucat (Sedikit pembuluh darah, dekat dengan tulang tengkorak)
        ↓
[Zona Tengah (Pipi / Hidung / Telinga)] ──> Kemerahan / Hangat (Kepadatan kapiler darah tinggi)
        ↓
[Zona Bawah (Dagu / Rahang)] ──> Keabuan / Kebiruan (Akar folikel janggut pada pria, bayangan bayang)
```

---

## 2. Peta Ketebalan & Transparansi Hamburan (Thickness Map for SSS)

- **Baking Peta Ketebalan (Thickness Bake)**:
  - Gunakan pemindai sinar dari dalam ke luar mesh poligon untuk mengukur ketebalan daging.
- **Penetrasi Cahaya (Subsurface Scattering)**:
  - Daun telinga, cuping hidung, dan selaput bibir memiliki nilai ketebalan tipis (warna putih pada thickness map).
  - Ketika terkena cahaya dari belakang (*backlight*), area ini memancarkan cahaya merah darah hangat (*deep red blood scattering bleed*).

---

## 3. Detail Pori-Pori Mikro & Aliran Kerutan Kulit (Pore Flow)

- Pori-pori hidung berbentuk bulat mikro padat.
- Pori-pori di pipi dan sekitar mata tertarik memanjang membentuk elips mengikuti garis kerutan ekspresi wajah (*Langer's lines*).
- Gunakan *Anchor Points* pada layer normal pori-pori untuk secara dinamis mengekspor variasi kekasaran (*roughness breakup*) pada masing-masing lubang pori.
