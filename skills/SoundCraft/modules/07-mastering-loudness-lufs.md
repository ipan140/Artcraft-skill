# Modul 07: Mastering, True Peak & LUFS Compliance

Modul ini menetapkan standar pengukuran kenyaringan berbobot pendengaran manusia (*Loudness Units Full Scale - LUFS*) sesuai standar ITU-R BS.1770-4 dan EBU R128, batas True Peak, dan rentang dinamika (*Loudness Range - LRA*).

---

## 1. Tiga Dimensi Pengukuran LUFS

1. **Integrated Loudness (LUFS-I)**:
   - Rata-rata kenyaringan terakumulasi dari detik pertama hingga akhir pemutaran audio, dihitung menggunakan pembobotan kurva K-Weighting dan gerbang gating $-10\text{ LU}$.
2. **Short-Term Loudness (LUFS-S)**:
   - Kenyaringan yang diukur dalam jendela geser $3\text{ detik}$. Berguna untuk memantau apakah bagian reff lagu atau ledakan adegan aksi terlalu memekakkan telinga.
3. **Momentary Loudness (LUFS-M)**:
   - Kenyaringan instan dalam jendela $400\text{ ms}$.

---

## 2. Tabel Target Standar Platform Global

| Platform / Standar | Target Integrated LUFS | Batas Maksimum True Peak |
|---|---|---|
| **Spotify / Apple Music / TIDAL** | **-14.0 LUFS** | **-1.0 dBTP** |
| **YouTube Video** | **-14.0 LUFS** | **-1.0 dBTP** |
| **Apple Podcasts / Spotify Podcasts** | **-16.0 LUFS (Stereo) / -19.0 (Mono)** | **-1.0 dBTP** |
| **Broadcast TV Eropa (EBU R128)** | **-23.0 LUFS ($\pm 0.5$)** | **-1.0 dBTP** |
| **Broadcast TV Amerika (ATSC A/85)** | **-24.0 LUFS ($\pm 1.0$)** | **-2.0 dBTP** |
| **Master CD Audio Komersial** | **-9.0 s/d -11.0 LUFS** | **-0.2 dBTP** |

---

## 3. Bahaya Inter-Sample Peak & True Peak Limiter

- **Peak Sample vs True Peak**: Pengukur puncak sampel digital biasa hanya membaca titik data diskrit. Saat sinyal diubah kembali ke gelombang analog oleh DAC (Digital-to-Analog Converter) atau dikompresi ke format MP3/AAC, rekontruksi kurva antartitik dapat melompat melampaui $0.0\text{ dBFS}$ dan menimbulkan distorsi pecah (*harsh clipping distortion*).
- **True Peak Limiter dengan Oversampling**:
  - Gunakan limiter mastering dengan fitur oversampling minimal $4\times$ atau $8\times$.
  - Kunci *Ceiling* selalu pada **-1.0 dB True Peak** (atau **-2.0 dBTP** jika audio akan diunggah ke platform dengan kompresi lossy berat seperti TikTok/Instagram).
