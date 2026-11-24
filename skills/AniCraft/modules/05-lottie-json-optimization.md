# Modul 05: Lottie JSON Specification & Asset Optimization

Modul ini menetapkan struktur data JSON animasi Lottie (Bodymovin), teknik perampingan aset (*JSON file size reduction*), eliminasi keyframe berlebih, dan larangan fitur yang merusak performa web/mobile.

---

## 1. Anatomi Berkas Lottie JSON

Sebuah berkas Lottie adalah representasi pohon objek JSON dari linimasa animasi vektor:

```json
{
  "v": "5.7.4",
  "fr": 60,
  "ip": 0,
  "op": 90,
  "w": 500,
  "h": 500,
  "nm": "SuccessCheckAnimation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Checkmark_Path",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100 },
        "r": { "a": 0, "k": 0 },
        "p": { "a": 0, "k": [250, 250, 0] },
        "a": { "a": 0, "k": [0, 0, 0] },
        "s": { "a": 1, "k": [
          { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.3], "y": [1] }, "t": 0, "s": [0, 0, 100] },
          { "t": 30, "s": [100, 100, 100] }
        ]}
      },
      "shapes": []
    }
  ]
}
```

- `fr`: Framerate (FPS).
- `ip` / `op`: In-point dan Out-point frame awal dan akhir.
- `ty`: Tipe layer (`4` = Shape Layer, `2` = Image Layer, `0` = Precomp).
- `ks`: Kunci transformasi (*Keyframed Transform*): `o` (Opacity), `r` (Rotation), `p` (Position), `a` (Anchor), `s` (Scale). Nilai `a: 0` berarti statis tanpa animasi, `a: 1` berarti memiliki deretan keyframe.

---

## 2. Fitur yang Wajib Dihindari dalam Lottie (Performance Killers)

Untuk memastikan animasi berjalan mulus $60\text{ FPS}$ tanpa konsumsi CPU/baterai ekstrem:
- ❌ **DILARANG Menyematkan Gambar Bitmap Raster Base64**: Gambar PNG yang disematkan ke dalam JSON membuat ukuran file membengkak dari $15\text{ KB}$ menjadi $2\text{ MB}$.
- ❌ **DILARANG Gaussian Blur Dinamis**: Menghitung blur pada poligon bergerak setiap frame memicu lag parah di iOS/Android.
- ❌ **DILARANG Merge Paths Berlebih**: Fitur *Merge Paths* pada After Effects sering kali tidak didukung (*unsupported*) oleh parser Lottie bawaan iOS dan Android. Gunakan bentuk shape murni yang telah digabungkan sebelumnya.

---

## 3. Kompresi dotLottie (.lottie)

- Untuk proyek produksi web dan mobile, kompresi berkas `.json` mentah ke dalam format arsip ZIP berekstensi `.lottie`.
- Format `dotLottie` memotong ukuran berkas hingga **70 - 80%** lebih kecil dan memungkinkan penyatuan beberapa variasi animasi status (*state machines*) ke dalam satu kontainer tunggal.
