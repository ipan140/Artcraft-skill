# Modul 02: Frequency Separation Retouching

Modul ini menetapkan formula matematis dan tata cara pemisahan frekuensi (*Frequency Separation*) untuk merawat tekstur kulit dan tonalitas warna secara independen tanpa menimbulkan efek blur artifisial.

---

## 1. Matematika Pemisahan Frekuensi (16-bit vs 8-bit)

Pemisahan frekuensi membedah gambar menjadi dua komponen spasial:
1. **Low Frequency (Frekuensi Rendah)**: Berisi informasi warna, nada kulit, gradasi pencahayaan, dan transisi bayangan tanpa detail pori-pori.
2. **High Frequency (Frekuensi Tinggi)**: Berisi informasi tekstur mikroskopis, pori-pori kulit, rambut halus, kerutan kecil, dan goresan.

$$\text{Gambar Asli} = \text{Low Frequency} + \text{High Frequency}$$

---

## 2. Prosedur Pembuatan Layer Standar

### Untuk Dokumen 16-Bit (Standar Industri):
1. Buat dua duplikat dari layer clean plate: namai layer bawah `Low Frequency` dan layer atas `High Frequency`.
2. Pada layer `Low Frequency`: Terapkan **Gaussian Blur** dengan radius antara $3.0 - 8.0$ piksel (pilih radius tepat di mana tekstur pori-pori mulai menghilang).
3. Pada layer `High Frequency`:
   - Buka menu `Image -> Apply Image`.
   - Layer Target: `Low Frequency`.
   - Channel: `RGB`.
   - Invert: **Checked (Aktif)**.
   - Blending: **Add**.
   - Scale: **2**.
   - Offset: **0**.
4. Ubah Blend Mode layer `High Frequency` menjadi **Linear Light**.
5. Gambar akan tampak identik 100% dengan aslinya saat kedua layer aktif.

### Untuk Dokumen 8-Bit:
- Pada langkah `Apply Image`: Invert: **Unchecked**, Blending: **Subtract**, Scale: **2**, Offset: **128**.

---

## 3. Protokol Retouching pada Dua Lapisan

- **Pekerjaan pada Low Frequency Layer**:
  - Gunakan **Mixer Brush Tool** (Clean Brush, Wet: 20%, Load: 25%, Mix: 20%, Flow: 25%) atau Lasso Tool dengan feather selebar radius blur untuk menghaluskan bercak warna yang belang.
- **Pekerjaan pada High Frequency Layer**:
  - Gunakan **Clone Stamp Tool** (Sample: Current Layer, Hardness: 80%) atau **Healing Brush Tool** untuk menghilangkan jerawat, noda bekas luka, atau rambut liar tanpa mengotori warna di bawahnya.
