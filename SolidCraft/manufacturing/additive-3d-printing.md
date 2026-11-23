# Manufacturing Profile: Additive 3D Printing (FDM, SLA & SLS)

Profil ini menetapkan panduan pemodelan parametrik benda padat untuk manufaktur aditif (*3D printing*), aturan sudut kemiringan tanpa penopang (*support-free overhangs*), toleransi clearance perakitan, dan orientasi lapisan kekuatan mekanik.

---

## 1. Aturan Sudut Menggantung (The 45° Overhang Rule)

- Pada teknologi FDM (Fused Deposition Modeling): Dinding dengan sudut kemiringan $> 45^\circ$ terhadap bidang vertikal dapat dicetak secara bersih tanpa struktur penopang (*supports*).
- **Jembatan Horizontal (Bridging)**: Batasi jembatan udara horizontal tanpa penopang maksimal sepanjang $10\text{ mm} - 15\text{ mm}$. Untuk bentang lebih panjang, ubah atap menjadi bentuk kubah atau chamfer segitiga.
- **Teardrop Holes**: Lubang baut horizontal sebaiknya dimodelkan dengan profil tetesan air (*teardrop profile*) di bagian puncak lingkaran untuk mencegah lengkungan filamen saat mencetak tanpa support.

---

## 2. Toleransi Perakitan Pas & Lubang (Fit Clearances)

Penyusutan termal dan ekspansi filamen menyebabkan dimensi lubang sering lebih kecil dari model CAD:

| Tipe Sambungan | Clearance Radial FDM | Clearance SLA / SLS Resin |
|---|---|---|
| **Press Fit (Pas Sesak)** | $0.05\text{ mm} - 0.10\text{ mm}$ | $0.03\text{ mm} - 0.05\text{ mm}$ |
| **Close Sliding Fit (Pas Geser)** | $0.20\text{ mm} - 0.30\text{ mm}$ | $0.10\text{ mm} - 0.15\text{ mm}$ |
| **Loose Free Movement (Bisa Berputar Bebas)** | $0.40\text{ mm} - 0.50\text{ mm}$ | $0.20\text{ mm} - 0.30\text{ mm}$ |

---

## 3. Anisotropi Kekuatan & Orientasi Lapisan

- Ikatan antarlapisan sumbu $Z$ selalu lebih lemah ($40\% - 60\%$) dibandingkan kekuatan tarik pada bidang $XY$.
- Rancang orientasi model agar gaya tarik/geser mekanikal bekerja sejajar dengan bidang cetak $XY$, bukan memisahkan antarlapisan sumbu $Z$.
- Gunakan ulir tembaga tanam (*brass heat-set threaded inserts*) daripada membuat ulir plastik langsung untuk komponen yang sering dibongkar-pasang.
