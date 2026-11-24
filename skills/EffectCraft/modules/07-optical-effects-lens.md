# Modul 07: Efek Optik & Karakteristik Lensa Kamera (Optical Effects & Lens Characteristics)

Modul ini menetapkan simulasi karakteristik fisik lensa kamera optik nyata: distorsi lensa (*undistort / redistort*), aberasi kromatik (*chromatic aberration*), pendar lensa (*anamorphic flare & bloom*), dan konvolusi bokeh (*convolved bokeh blur*).

---

## 1. Siklus Distorsi Lensa (Undistort / Redistort Workflow)

Semua lensa kamera nyata (terutama lensa sudut lebar / wide-angle dan lensa anamorphic) memiliki kelengkungan optik (*barrel* atau *pincushion distortion*). Garis lurus di dunia nyata akan tampak melengkung di tepi sensor kamera:

```mermaid
flowchart LR
    DistortedPlate[Rekaman Asli Lensa Melengkung] --> LensDistort1[Node: Undistort Lensa (Luruskan)]
    LensDistort1 --> VFXWork[Pekerjaan VFX: Tracking, Keying, Integrasi Elemen 3D]
    VFXWork --> LensDistort2[Node: Redistort Lensa (Lengkungkan Kembali)]
    LensDistort2 --> FinalComp[Keluaran Sesuai Karakteristik Lensa Kamera Asli]
```

> [!IMPORTANT]
> Jangan pernah melacak titik 3D atau menempelkan CGI lurus pada rekaman yang belum di-undistort. Objek 3D yang lurus sempurna akan tampak lepas dan tidak menempel di atas latar yang melengkung.

---

## 2. Aberasi Kromatik (Chromatic Aberration / Color Fringing)
- Pada lensa optik, panjang gelombang cahaya yang berbeda (Merah, Hijau, Biru) dibiaskan pada sudut yang sedikit berbeda oleh kaca lensa.
- Akibatnya, pada sudut-sudut paling luar frame (*edges/corners*), kontras tinggi akan memunculkan garis pemisahan warna merah dan biru/cyan (*radial color fringing*).
- **Implementasi di Nuke**:
  - Saluran Merah ($R$) diskalakan membesar `100.15%` dari titik tengah frame, sementara saluran Biru ($B$) diskalakan mengecil `99.85%`, sedangkan saluran Hijau ($G$) tetap di `100.0%`.

---

## 3. Pendar Cahaya Fisik & Bokeh Konvolusi (Bloom & Convolve Bokeh)
1. **Bloom / Exponential Glow**:
   - Cahaya yang sangat terang (nilai linear > 1.5) akan tumpah melintasi batas optik lensa.
   - Buat glow menggunakan multi-tier blur eksponensial (radius 2px, 8px, 32px, 128px, 256px) yang ditambahkan (*Plus*) dengan saturasi warna hangat alami.
2. **Convolve Bokeh Blur**:
   - Untuk depth-of-field yang realistis, jangan gunakan Gaussian blur melingkar sederhana. Gunakan node Convolve dengan gambar aperture blade nyata (seperti aperture segienam berbilah 6 atau aperture oval elips lensa anamorphic) agar sorot lampu di latar belakang berubah menjadi bokeh optik yang memikat.
