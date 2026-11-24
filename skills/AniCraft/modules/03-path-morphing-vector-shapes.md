# Modul 03: Path Morphing & Vector Shape Tweens

Modul ini mendefinisikan aturan transformasi bentuk kurva vektor (*Path Morphing*), sinkronisasi indeks titik simpul (*Vertex Index Matching*), dan pencegahan pelintiran bentuk kurva (*path twisting*).

---

## 1. Hukum Mutlak Path Morphing (Equal Vertex Count)

Untuk mengubah bentuk kurva $A$ (misal: lingkaran) menjadi bentuk kurva $B$ (misal: bintang):

$$\text{Jumlah Titik Simpul Path } A = \text{Jumlah Titik Simpul Path } B$$

- Jika Path $A$ memiliki 8 titik simpul dan Path $B$ hanya memiliki 5 titik simpul:
  - Mesin animasi (Lottie / SVG SMIL / GSAP) tidak mengetahui ke mana 3 titik sisa harus berpindah, menyebabkan lompatan bentuk patah yang rusak (*glitched jump*).
  - Tambahkan titik simpul ekstra pada garis lurus Path $B$ hingga jumlah simpul keduanya sama persis sebelum memulai keyframing bentuk.

---

## 2. Arah Jalur & Titik Awal Simpul (First Vertex Alignment)

- **Titik Simpul Pertama (First Vertex / Origin)**:
  - Titik pertama ($V_0$) dari Path $A$ harus menempati posisi geografis yang berdekatan dengan titik pertama ($V_0$) dari Path $B$ (misal: keduanya berada di puncak atas $12:00$).
  - Jika $V_0$ Path $A$ berada di atas, tetapi $V_0$ Path $B$ berada di bawah: bentuk akan berputar dan melintir $180^\circ$ saat proses perubahan bentuk berlangsung.
- **Arah Putaran Jarum Jam (Clockwise Direction)**:
  - Pastikan kedua kurva digambar searah jarum jam (*Clockwise Winding*). Gunakan fungsi *Reverse Path Direction* jika kurva terbalik.

---

## 3. Interpolasi Handle Bézier Saat Morphing

- Handle kurva yang berubah dari lengkungan menjadi sudut lancip lurus harus ditarik masuk ke titik pusat simpulnya ($Handle_{\text{in}} = Handle_{\text{out}} = Point$).
- Hal ini menjamin transisi yang mulus antara permukaan membulat dan sudut tajam.
