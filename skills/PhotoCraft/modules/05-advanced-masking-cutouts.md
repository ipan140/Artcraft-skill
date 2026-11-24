# Modul 05: Advanced Masking, Cutouts & Hair Extraction

Modul ini menetapkan metodologi isolasi subjek presisi tinggi (*precision cutouts*), ekstraksi rambut halus (*hair selection*), seleksi saluran berbasis kontras (*Channel Calculations*), dan penyempurnaan tepi (*Refine Edge*).

---

## 1. Pemilihan Alat Sesuai Karakteristik Tepi

| Jenis Tepi Objek | Alat Seleksi Terbaik | Teknik Penyempurnaan |
|---|---|---|
| **Tepi Keras (Mobil, Botol, Arsitektur)** | **Pen Tool (Path Vector)** | Feather $0.3 - 0.5$ piksel, kurva Bézier mulus |
| **Tepi Lembut / Rambut Berterbangan** | **Channel Contrast + Select & Mask** | Refine Edge Brush, decontaminate colors |
| **Tepi Semi-Transparan (Kaca, Asap, Gaun Renda)** | **Color Calculations / Blend-If** | Mode Multiply / Screen atau Channel Masking |
| **Tepi Bergerigi / Daun Pepohonan** | **Color Range / Focus Area** | Quick Mask + Threshold |

---

## 2. Prosedur Ekstraksi Rambut Halus (Channel Masking)

1. Periksa panel **Channels** (Red, Green, Blue) untuk menemukan saluran yang memiliki kontras tertinggi antara siluet rambut dan latar belakang.
2. Duplikat saluran tersebut (misal: `Blue Copy`).
3. Terapkan **Levels / Curves** pada saluran salinan untuk mendorong latar belakang menjadi putih bersih ($255$) dan rambut menjadi hitam pekat ($0$).
4. Bersihkan bagian dalam wajah/tubuh dengan kuas hitam agar tertutup sempurna.
5. Muat saluran salinan sebagai seleksi ($Ctrl/Cmd + Click$ thumbnail channel), balikkan seleksi, dan terapkan sebagai **Layer Mask**.

---

## 3. Dekontaminasi Warna Tepi (Color Decontamination)

Untuk menghilangkan pantulan warna latar belakang lama (*color cast / fringe*) pada helai rambut:

1. Buat layer baru di atas subjek bertopeng, aktifkan **Clipping Mask**.
2. Ubah Blend Mode layer ke **Color**.
3. Sampel warna rambut alami menggunakan Eyedropper Tool.
4. Sapukan kuas lembut di atas helai rambut yang terkontaminasi warna background lama.
