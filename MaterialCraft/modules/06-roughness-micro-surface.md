# Modul 06: Roughness & Micro-Surface Scuffing

Modul ini mendefinisikan teknik pembuatan peta kekasaran mikro (*roughness map*) untuk menghasilkan variasi kilap spekular yang hidup, realistis, dan memecah kemonotonan pantulan (*reflection breakup*).

---

## 1. Prinsip Inversi Terbimbing (Guided Inversion)

Secara umum, area yang lebih dalam (terlindung) mengumpulkan debu dan minyak sehingga memiliki kekasaran lebih tinggi, sedangkan area tepi yang sering tergesek bisa menjadi sangat halus (atau kasar jika terabrasi):

$$\text{Roughness}_{\text{base}} = \text{Invert}(\text{Height}) \times 0.5 + 0.3$$

---

## 2. Tiga Lapisan Variasi Kekasaran (Roughness Breakup Layers)

1. **Base Roughness**:
   - Nilai rata-rata material dasar (misalnya cat satin: $0.35$, beton: $0.75$, karet: $0.80$).
2. **Directional Scratches & Wiping Marks**:
   - Goresan linear searah menggunakan *Anisotropic Grunge* intensitas rendah untuk mensimulasikan bekas kain lap pembersih atau gesekan perkakas.
3. **Fingerprints & Grease Smudges**:
   - Pola cap sidik jari dan noda minyak organik pada rentang nilai $0.15 - 0.25$ di atas permukaan halus untuk menghasilkan variasi pantulan yang tampak nyata saat dilihat miring terhadap sumber cahaya (*grazing angle*).

---

## 3. Hubungan Roughness dengan Kelembapan & Air

Ketika genangan air atau tetesan cairan berada di permukaan:
- Roughness turun drastis ke angka $0.00 - 0.05$ (pantulan cermin sempurna).
- Normal map pada area air menjadi rata dan tenang, atau membentuk pola tetesan riak melingkar.
- Efek transisi basah di sekitar tepi air diperlebar dengan gradien blur $2-4$ piksel.
