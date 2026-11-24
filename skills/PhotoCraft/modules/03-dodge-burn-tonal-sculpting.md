# Modul 03: Dodge & Burn Tonal Sculpting

Modul ini mendefinisikan teknik pemahatan nilai gelap-terang (*tonal sculpting*) melalui metode Dodge (menerangkan) dan Burn (menggelapkan) non-destruktif untuk membentuk dimensi tiga dimensi wajah dan objek.

---

## 1. Metode Implementasi Dodge & Burn

Terdapat dua pendekatan profesional utama:

### Metode A: Dual Curves Adjustment Layers (Rekomendasi Utama)
- **Layer 1 (Dodge)**: Buat layer Curves, tarik titik tengah lengkungan ke atas sekitar $10 - 15\%$. Balikkan mask ke hitam (`Ctrl/Cmd + I`).
- **Layer 2 (Burn)**: Buat layer Curves, tarik titik tengah lengkungan ke bawah sekitar $10 - 15\%$. Balikkan mask ke hitam (`Ctrl/Cmd + I`).
- **Keunggulan**: Memungkinkan penyesuaian kurva warna secara spesifik pada masing-masing saluran R, G, B jika diperlukan, serta tidak menambah ukuran file dokumen.

### Metode B: 50% Neutral Gray Overlay
- Buat layer baru kosong, isi dengan warna abu-abu netral $50\%$ (RGB `128, 128, 128`).
- Ubah Blend Mode ke **Soft Light** atau **Overlay**.
- Lukis menggunakan Brush putih (Dodge) atau hitam (Burn) dengan Flow $1 - 2\%$.

---

## 2. Pemisahan Skala: Micro vs Macro Dodge & Burn

| Parameter | Micro Dodge & Burn | Macro Dodge & Burn |
|---|---|---|
| **Tujuan** | Meratakan noda, bercak hiperpigmentasi kecil, dan kerutan halus | Membentuk struktur anatomi tulang pipi, hidung, rahang, dan efek pencahayaan dramatis |
| **Zoom Level** | Zoom tinggi ($100\% - 200\%$) | Zoom pandang utuh ($25\% - 50\%$) |
| **Ukuran Brush** | Kecil ($2 - 6$ piksel), mengikuti ukuran bintik noda | Besar ($150 - 400$ piksel), mencakup area luas |
| **Waktu Eksekusi** | Sebelum / sesudah frequency separation mikro | Pada tahap akhir sebelum color grading global |

---

## 3. Layer Bantu Visual (Visual Solar Curve Check Layer)

Untuk mempermudah melihat ketidaksempurnaan mikro yang tidak tertangkap oleh mata telanjang:

1. Buat layer **Black & White** di posisi paling atas tumpukan untuk menghilangkan distraksi warna.
2. Buat layer **Curves** tepat di atasnya dengan bentuk kurva menyerupai gelombang sinus terdistorsi (*Solar Curve* atau kontras tinggi berbentuk "S" tajam).
3. Bercak-bercak belang dan noda kulit akan langsung terlihat sebagai kontur kontras tinggi yang jelas. Matikan layer bantu ini setelah proses D&B selesai.
