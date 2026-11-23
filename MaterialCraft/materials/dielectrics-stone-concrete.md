# Surface Profile: Dielectrics - Stone, Concrete & Tiles

Profil ini mengatur pembuatan material non-konduktor seperti beton bertulang, marmer berurat (*veined marble*), batu bata kuno, dan ubin terasering dengan penekanan pada detail pori-pori mikro, kelembapan, dan sambungan mortar.

---

## 1. Karakteristik Fisik Dielektrik (Dielectric Physics)

- **Metallic Value**: Wajib mutlak bernilai $0.0$ (hitam sempurna) di seluruh permukaan tanpa kompromi.
- **Specular F0 Reflectance**: Reflektansi Fresnel $F_0$ konstan pada $0.04$ (setara dengan IOR $1.5$).
- **Albedo Lumens**:
  - Beton Cor Baru: Nilai albedo $0.25 - 0.45$ (abu-abu netral)
  - Marmer Putih Carrara: Nilai albedo $0.70 - 0.85$ dengan urat halus abu-abu keemasan
  - Batu Bata Merah Bakar: Nilai albedo $0.20 - 0.35$ dominan spektrum merah-oranye
  - *Catatan Penting*: Jangan pernah menggunakan albedo murni $1.0$ (putih terbakar) atau $0.0$ (hitam pekat) karena melanggar konservasi energi optik.

---

## 2. Peta Tinggi & Formasi Permukaan (Height Sculpting)

1. **Makro (Bentuk Batu / Blok Ubin)**:
   - Gunakan **Voronoi / Cell Noise** atau generator ubin prosedural (*Tile Sampler*).
   - Terapkan variasi kemiringan acak (*Random Slope/Bevel*) pada masing-masing ubin.
2. **Meso (Keretakan & Cuaca)**:
   - Gabungkan **Fractal Crack Noise** dan **Slope Blur Greyscale** untuk menghasilkan retakan alami di sepanjang tepian batu.
3. **Mikro (Pori Beton & Pasir)**:
   - **White Noise / High-Frequency Simplex Noise** intensitas rendah untuk sensasi granular saat terkena grazing angle.

---

## 3. Roughness & Efek Kelembapan (Roughness & Wetness)

- Permukaan batu kering: Roughness $0.65 - 0.85$ (pantulan buram menyebar).
- Area genangan air atau kelembapan kapiler pada sela mortar:
  - Turunkan Roughness menjadi $0.05 - 0.15$.
  - Gelapkan Albedo sebanyak $25 - 35\%$ (*wet darkening effect* akibat pantulan internal cahaya).
