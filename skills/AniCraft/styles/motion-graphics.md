# Style Profile: Motion Graphics & Kinetic Typography

Profil ini mengatur pembuatan grafik gerak (*Motion Graphics*), animasi pembuka logo (*Logo Stings*), video penjelasan produk (*Explainer Videos*), tipografi kinetik, dan transisi bentuk geometris berkecepatan tinggi.

---

## 1. Karakteristik Gerak & Frame Rate

- **Frame Rate Standar**: $60\text{ FPS}$ untuk tampilan layar digital modern (atau $30\text{ FPS}$ untuk video web standar).
- **Prinsip Gerakan Cepat (Overshoot & Elasticity)**:
  - Setiap kali elemen teks atau grafis masuk ke layar dengan kecepatan tinggi, berikan getaran pantulan kecil (*overshoot*) sebesar $3 - 5\%$ dari skala normal sebelum menetap stabil.
- **Waktu Kunci (Keyframe Snapping)**:
  - Kunci gerakan utama pada hitungan ritme audio (*beat alignment*) untuk video promosi.

---

## 2. Tipografi Kinetik (Kinetic Typography Hierarchy)

1. **Efek Muncul Bertingkat (Staggered Animation)**:
   - Animasikan kemunculan kata atau huruf secara beruntun dengan selisih waktu jeda (*stagger delay*) $2 - 4\text{ frame}$ (sekitar $40 - 70\text{ ms}$).
2. **Masking Jalur Teks**:
   - Gunakan masker pemotong bentuk (*Track Matte / Alpha Inverted Matte*) agar huruf tampak keluar dari garis tak terlihat.
3. **Motion Blur Terkendali**:
   - Aktifkan simulasi motion blur sintetis (shutter angle $180^\circ$) pada objek yang bergerak melintasi lebih dari $300\text{ piksel}$ dalam waktu di bawah $10\text{ frame}$.
