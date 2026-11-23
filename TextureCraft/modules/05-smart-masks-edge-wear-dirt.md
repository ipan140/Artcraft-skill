# Modul 05: Smart Masks, Edge Wear & Directional Dirt

Modul ini menetapkan formula pembuatan masker prosedural cerdas (*Smart Masks*), keausan cat tepi (*edge chipping*), penumpukan kotoran celah (*crevice dirt*), dan rembesan gravitasi (*dripping rust*).

---

## 1. Anatomi Masker Keausan Tepi (Edge Wear Chipping)

Untuk menghasilkan pengelupasan cat realistis yang tidak tampak seperti komputasi sintetis berulang:

```
Curvature Map (Convex Ridges) ──┐
                                 ├──> [Multiply] ──> [Levels / Histogram Scan] ──> [Tepi Mengelupas Tajam]
Grunge Map (Perlin / Scratch) ──┘
```

1. **Komponen Struktural**: Peta *Curvature* menentukan lokasi terjadinya benturan mekanik pada sudut cembung.
2. **Komponen Pemecah Acak (Breakup Grunge)**: Kalikan dengan tekstur grunge frekuensi tinggi agar garis keausan terputus-putus secara alami.
3. **Ketebalan Tepi Cat (Paint Edge Height)**:
   - Tambahkan efek *Bevel* mikro pada saluran Height setinggi $+0.02$ tepat di batas tepi kelupasan untuk mensimulasikan ketebalan fisik lapisan cat enamel.

---

## 2. Kotoran Celah & Debu Gravitasi (Ambient Dirt & Gravity)

- **Crevice Grime**:
  - Gunakan masker berbasis **Ambient Occlusion (AO)** terbalik.
  - Terapkan blur $2 - 4$ piksel lalu kalikan dengan noise kotoran berbutir halus (*Dirt Grunge*).
- **Gravity-Oriented Dripping**:
  - Gabungkan generator tetesan (*Dripping Generator*) dengan sumbu vertikal dari **World Space Normal** (menghadap $+Y$) atau **Position Map** untuk memastikan cairan karat dan oli hanya mengalir ke arah tanah.
