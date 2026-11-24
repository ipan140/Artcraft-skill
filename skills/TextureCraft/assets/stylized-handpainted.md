# Asset Profile: Stylized & Hand-Painted Textures

Profil ini menetapkan panduan pelukisan tekstur 3D bergaya non-fotorealistik (*Hand-Painted / NPR / Anime / Ghibli / MOBA style*), di mana informasi pencahayaan, bayangan ambient, dan sorotan tepi dilukis langsung (*baked-in*) ke dalam peta warna difus dasar.

---

## 1. Prinsip Utama Gaya Hand-Painted (Unlit / Diffuse-Only)

- **Pencahayaan Terlukis (Baked-In Lighting)**:
  - Model sering kali ditampilkan menggunakan shader **Unlit / Flat Shading** (tanpa kalkulasi lampu dinamis real-time).
  - Arah cahaya matahari atas (*top-down lighting bias*) dilukis permanen: permukaan menghadap atas diberi rona warna hangat lebih terang, permukaan bawah diberi rona warna bayangan dingin terdistorsi (ungu/biru).
- **Gradien Vertikal (Ground to Sky Gradient)**:
  - Kalikan gradien vertikal dari bawah ke atas pada seluruh aset: bagian bawah model digelapkan sebesar $20 - 30\%$ untuk memusatkan perhatian pemain pada bagian atas aset (*player visual hierarchy*).

---

## 2. Teknik Sapuan Kuas & Sorotan Tepi (Edge Highlights)

1. **Highlight Tepi Terpahat (Chiseled Edge Highlights)**:
   - Setiap sudut tajam model 3D diberi garis highlight terang selebar $1 - 2$ piksel dengan sapuan kuas bertekstur kasar.
   - Jangan gunakan garis lurus sempurna komputer; buat ketidakteraturan manual seperti goresan kuas cat minyak tradisional.
2. **Palet Warna Hangat-Dingin (Color Temperature Contrast)**:
   - Hindari bayangan hitam netral! Bayangan harus selalu memiliki saturasi warna (misal: cahaya kuning menghasilkan bayangan ungu/indigo).

---

## 3. Pemanfaatan Baked Maps untuk Hand-Painted

- Bake **Lightmap / Bent Normals** dan **Curvature Map** sebagai layer dasar.
- Gunakan blend mode **Soft Light** atau **Overlay** dengan opasitas $25 - 40\%$ sebagai pedoman dasar sebelum menimpa dengan lukisan kuas tangan manual.
