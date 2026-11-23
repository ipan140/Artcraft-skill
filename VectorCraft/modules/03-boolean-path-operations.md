# Modul 03: Boolean Operations, Pathfinder & Compound Paths

Modul ini mendefinisikan operasi logika aljabar geometri vektor (*Boolean Operations*), penyatuan bentuk, pemotongan, dan penggabungan jalur majemuk (*Compound Paths*).

---

## 1. Empat Operasi Boolean Baku (Pathfinder Operations)

| Operasi Boolean | Tindakan Geometri | Kasus Penggunaan Standar |
|---|---|---|
| **Union / Add** | Menggabungkan dua atau lebih bentuk bertumpuk menjadi satu siluet luar tunggal | Menyatukan lingkaran-lingkaran awan menjadi bentuk awan utuh |
| **Subtract / Minus Front** | Memotong bentuk dasar menggunakan bentuk di atasnya sebagai cetakan pemotong | Membuat lubang donat, bulan sabit dari dua lingkaran tumpuk |
| **Intersect** | Hanya menyisakan area perpotongan tumpang tindih dari kedua bentuk | Membuat kelopak daun dari irisan dua lingkaran bersinggungan |
| **Exclude / Difference** | Menghilangkan area perpotongan dan menyisakan area yang tidak bertumpuk | Membuat pola kisi tembus pandang atau lubang kunci |

---

## 2. Perluasan Garis (Outline Stroke / Expand)

Sebelum mengekspor logo atau ikon ke format cetak atau web:
- Konversi seluruh garis *Stroke* menjadi bentuk bidang berbidang isi (*Filled Paths*) melalui menu `Object -> Expand` atau `Outline Stroke`.
- Jika tidak diperluas: Saat ukuran logo diperkecil atau diperbesar di aplikasi lain, ketebalan garis stroke bisa tetap berukuran statis (misal tetap $2\text{ px}$) sehingga proporsi visual logo menjadi hancur.

---

## 3. Jalur Majemuk Bersih (Compound Paths & Non-Zero Winding)

- Saat menggabungkan beberapa bentuk menjadi satu objek multi-lubang (seperti huruf 'B' atau ikon gembok):
  - Gabungkan menggunakan **Compound Path** (`Ctrl/Cmd + 8`).
  - Pastikan arah lintasan (*Fill Rule*) diatur ke **Non-Zero Winding Rule** atau **Even-Odd** yang konsisten agar lubang tembus tidak tertutup kembali secara tidak sengaja oleh mesin rendering SVG.
