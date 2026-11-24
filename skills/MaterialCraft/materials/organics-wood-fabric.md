# Surface Profile: Organics - Wood, Leather & Fabric

Profil ini menetapkan panduan sintesis prosedural untuk serat kayu alami (*wood grain*), kulit sintetis/asli berpori (*leather*), dan anyaman kain (*woven textile/fabrics*) dengan respon dispersi cahaya mikro dan *sheen/fuzz*.

---

## 1. Serat Kayu (Wood Grain & Rings)

- **Formula Dasar Pola Pohon**:
  - Gunakan gelombang silinder konsentris terdistorsi:
    $$\text{Rings}(x, y) = \sin\left(\sqrt{x^2 + y^2} \times f + \text{Turbulence}(x, y)\right)$$
  - Tambahkan distorsi arah serat memanjang (*directional warp*) menggunakan Simplex Noise terentang (*stretched aspect ratio 8:1*).
- **Variasi Warna Musiman (Earlywood vs Latewood)**:
  - Cincin muda (tumbuh cepat): warna lebih terang, albedo $0.45 - 0.55$, roughness $0.55$.
  - Cincin tua (tumbuh lambat/rapat): warna lebih gelap, albedo $0.30 - 0.40$, kepadatan tinggi, roughness $0.35$.
- **Finishing & Varnish**:
  - Kayu mentah belum dipoles: Roughness $0.70 - 0.85$, normal pori-pori dalam.
  - Kayu dipernis (*polyurethane lacquer*): Lapisan clearcoat tambahan dengan Roughness $0.10$ menutupi permukaan kayu kasar.

---

## 2. Anyaman Tekstil & Kain (Woven Fabrics)

- **Pola Tenun (Weave Patterns)**:
  - Pola dasar *Plain Weave* (anyaman silang $1 \times 1$) atau *Twill Weave* (silang diagonal denim $2 \times 2$).
  - Gunakan fungsi sinusoidal $2\text{D}$ untuk kurva benang lungsi (*warp*) dan pakan (*weft*).
- **Respon Hamburan Cahaya (Fabric Sheen / Fuzz)**:
  - Kain tidak memantulkan specular tajam; gunakan model *Sheen* atau *Fuzz* pada grazing angle untuk mensimulasikan jutaan serat mikro mikrofilamen.

---

## 3. Kulit & Pori-pori (Leather & Skin)

- **Distribusi Sel Voronoi**:
  - Pori-pori kulit dibentuk dari Voronoi Distance-to-Edge dikombinasikan dengan blur rendah.
- **Lipatan Dinamis (Creases)**:
  - Garis-garis tekukan teratur mengikuti arah tegangan mekanik menggunakan *Directional Noise*.
