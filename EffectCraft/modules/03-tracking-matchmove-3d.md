# Modul 03: Pelacakan Gerak & Matchmoving Kamera (Tracking & 3D Matchmove)

Modul ini menetapkan protokol pelacakan titik 2D (*point tracking*), pelacakan bidang datar (*planar tracking*), rekonstruksi gerak kamera 3D (*camera solving*), serta batas toleransi error matematis.

---

## 1. Tiga Metode Pelacakan Gerak (Tracking Modalities)

Pilih metode pelacakan berdasarkan jenis permukaan dan gerakan kamera dalam shot:

| Metode | Kapan Digunakan | Hasil Data Keluaran | Batas Toleransi |
| :--- | :--- | :--- | :--- |
| **Point Tracker (1-Point / 2-Point)** | Objek kecil, stabilisasi kamera sederhana, pelacakan posisi $X,Y$ dan rotasi 2D. | Animasi Transformasi $X, Y, \text{Scale}, \text{Rotation}$ | Error < 1.0 px |
| **Planar Tracker (Mocha Style)** | Layar gadget, billboard, kap mobil, dinding rumah yang mengalami distorsi perspektif. | Matriks Transformasi Homografi / Corner Pin 4-Titik | Konsisten tanpa jitter |
| **3D Camera Solver (Matchmove)** | Kamera bergerak bebas di ruang nyata (dolly, crane, drone, handheld) dengan efek paralaks. | Objek Kamera 3D virtual, titik cloud 3D (*point cloud*), dan focal length | **RMS Error $\le 0.5$ px** |

---

## 2. Protokol 3D Camera Solving Standar Film

Untuk menghasilkan solve kamera 3D yang stabil tanpa goyangan:

1. **Persiapan Lensa (Undistort First)**:
   - Hitung distorsi optik lensa (*lens distortion profile*) dari grid papan catur atau garis lurus di set.
   - Lakukan **Undistort** pada rekaman sebelum melacak titik fitur.
2. **Distribusi Titik Fitur (Feature Point Distribution)**:
   - Lacak minimal 100 titik yang tersebar merata di 3 zona kedalaman: Foreground (dekat kamera), Midground (objek utama), dan Background (jauh di cakrawala).
   - Pastikan titik fitur bertahan hidup minimal `20 s/d 30 frame` berturut-turut.
3. **Pembersihan Titik Buruk (Bad Track Pruning)**:
   - Hapus seluruh titik pelacak yang menempel pada objek bergerak (aktor yang berjalan, mobil melintas, daun pohon yang bergoyang tertiup angin).
4. **Penyelesaian Matematis & Orientasi**:
   - Tentukan sumbu lantai datar ($X-Z$ plane) dan sumbu gravitasi atas ($+Y$ axis).
   - Tentukan titik origin $(0, 0, 0)$ pada objek statis utama di set.
   - Pastikan nilai **Solve RMS Error berada di bawah 0.5 piksel**. Nilai di atas 0.8 piksel wajib ditolak karena elemen 3D akan tampak meluncur (*sliding*) di atas lantai.
