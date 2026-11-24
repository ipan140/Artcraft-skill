# Modul 02: Pixel-Grid Snapping & Optical Centering

Modul ini menetapkan aturan perataan koordinat pada kisi piksel (*Pixel-Grid Snapping*), pencegahan kabur anti-aliasing (*crisp pixel edges*), dan penyelarasan titik pusat optik (*optical vs geometric center*).

---

## 1. Masalah Anti-Aliasing Buram & Solusi Grid

Pada layar raster digital, satu piksel fisik adalah kotak integer $1 \times 1$:

- Jika garis lurus vertikal $1\text{ px}$ ditempatkan pada koordinat desimal pecahan $X = 10.5$:
  - Layar terpaksa menyalakan dua kolom piksel fisik di $X = 10$ dan $X = 11$ dengan intensitas warna abu-abu $50\%$. Garis tampak buram, tebal, dan kotor (*fuzzy rendering*).
- **Aturan Penyelarasan Integer**:
  - Semua titik sudut, kotak persegi, dan garis tepi objek wajib menempel (*snapped*) tepat pada koordinat piksel bulat ($X = 10.0, Y = 15.0$).

---

## 2. Garis Garis Stroke: Posisi Tengah, Luar, atau Dalam

1. **Inside Stroke**: Ketebalan garis tumbuh ke arah dalam bentuk; selalu tajam sempurna pada batas terluar.
2. **Outside Stroke**: Ketebalan garis tumbuh ke arah luar bentuk.
3. **Center Stroke (Garis Tengah)**:
   - Jika ketebalan garis adalah angka genap ($2\text{ px}, 4\text{ px}$): Tempatkan path tepat pada koordinat integer ($X = 12.0$).
   - Jika ketebalan garis adalah angka ganjil ($1\text{ px}, 3\text{ px}$): Tempatkan path tepat pada koordinat setengah piksel ($X = 12.5$) sehingga sayap garis $0.5\text{ px}$ ke kiri dan $0.5\text{ px}$ ke kanan mengisi piksel fisik secara penuh.

---

## 3. Titik Pusat Geometris vs Pusat Optik (Optical Centering)

- **Ikon Segitiga Play**:
  - Titik pusat geometris (*bounding box center*) segitiga play membagi lebar kotak secara merata di tengah ($50\%$).
  - Secara persepsi mata manusia, massa visual segitiga lebih berat di sisi kiri yang bertumpu tebal.
  - Geser titik anchor segitiga sebesar $1 - 2\text{ piksel}$ ke arah kanan dari pusat pembatas geometris untuk mencapai keseimbangan optik (*visual balance*).
