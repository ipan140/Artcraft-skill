# Modul 07: Ketajaman Optik & Reduksi Noise (Detail, Sharpening & Noise Reduction)

Modul ini menetapkan perbedaan tiga slider tekstur (*Texture, Clarity, Dehaze*), teknik penajaman selektif dengan masker tombol Alt (*Alt-Drag Sharpening Masking*), serta pembersihan noise sensor digital tanpa membuat gambar buram.

---

## 1. Perbedaan Mendasar: Texture vs Clarity vs Dehaze

Banyak pemula salah menggunakan slider ini secara tertukar:

| Slider Parameter | Frekuensi Spasial yang Dimanipulasi | Efek Visual pada Foto | Bahaya Jika Berlebihan |
| :--- | :--- | :--- | :--- |
| **Texture** | **Frekuensi Sangat Tinggi (Mikro)** | Menajamkan pori-pori kulit, serat benang kain pakaian, helai bulu hewan, atau kulit kayu. | Kulit tampak kering bersisik jika > +30. |
| **Clarity** | **Frekuensi Menengah (Mid-tone Contrast)** | Menambah bobot tebal dan volume dimensi pada otot, bebatuan gunung, dan arsitektur. | Muncul halo bayangan putih/hitam di sekitar objek (*nasty halos*). |
| **Dehaze** | **Frekuensi Rendah (Global Atmospheric Contrast)**| Menembus kabut asap, embun atmosfer di cakrawala, dan menambah kontras saturasi gelap. | Warna berubah menjadi sangat pekat dan gelap jika > +25. |

---

## 2. Teknik Penajaman Selektif (Alt-Drag Sharpening Masking)

Dilarang keras menaikkan slider *Sharpening Amount* tanpa mengatur slider *Masking*:

```text
Tanpa Masking (Masking = 0):
Seluruh piksel dipertajam, termasuk langit biru mulus dan kulit pipi rata.
Akibatnya: Bintik noise kasar muncul di langit dan foto tampak kotor berpasir.

Dengan Masking (Tahan tombol Alt, geser Masking ke 60 - 80):
Layar berubah menjadi hitam-putih:
- Area HITAM = TIDAK DIPERTAJAM (Langit, kulit pipi rata, bokeh latar).
- Garis PUTIH = HANYA GARIS TEPI INI YANG DIPERTAJAM (Bulu mata, kontur bibir, rambut, tepi baju).
```

### Nilai Rekomendasi Panel Detail:
- **Amount**: `45 s/d 65`
- **Radius**: `0.8 s/d 1.0 px` (Radius kecil di bawah 1.0 menghasilkan ketajaman garis mikro yang sangat halus)
- **Detail**: `25 s/d 35`
- **Masking**: **`60 s/d 85`** (Wajib di atas 50)

---

## 3. Reduksi Noise Berimbang (Balanced Denoise)
1. **Color Noise Reduction**:
   - Nilai default `25` di Lightroom biasanya sudah sempurna untuk menghilangkan bintik-bintik merah/hijau/biru (*chroma noise*) tanpa mengurangi ketajaman detail.
2. **Luminance Noise Reduction**:
   - Untuk foto ISO tinggi (ISO 1600 - 6400): Naikkan slider Luminance ke `15 s/d 30`.
   - Jaga slider **Detail** di angka `50` agar tepian mata dan rambut tidak ikut luntur menjadi seperti adonan tepung (*wax effect*).
