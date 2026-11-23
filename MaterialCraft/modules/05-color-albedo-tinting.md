# Modul 05: Color & Albedo Tinting

Modul ini menetapkan prinsip peracikan warna dasar (*Base Color / Albedo*), penggunaan gradien multi-stop (*gradient mapping*), dan kepatuhan rentang nilai luminansi fotorealistik.

---

## 1. Aturan Batas Luminansi Albedo (Safe PBR Ranges)

Dalam dunia nyata, tidak ada material alami yang memantulkan $100\%$ cahaya atau menyerap $100\%$ cahaya tanpa pantulan:

- **Batas Terang Maksimum (Dielektrik)**: Salju segar atau kapur putih murni memiliki nilai sRGB maksimum berkisar di angka **240 - 245** (nilai desimal linier $\approx 0.88 - 0.92$). Jangan pernah menggunakan putih murni $255$ ($1.0$).
- **Batas Gelap Minimum (Dielektrik)**: Jelaga karbon arang hitam pekat memiliki nilai sRGB terendah berkisar di angka **30 - 50** (nilai desimal linier $\approx 0.02 - 0.04$). Jangan pernah menggunakan hitam murni $0$ ($0.0$) untuk albedo dielektrik.
- **Logam Murni (Conductors)**: Albedo logam adalah reflektivitas spekular murni dengan nilai sRGB tinggi (180 - 255) yang tidak memuat informasi bayangan difus.

---

## 2. Gradient Mapping dari Peta Ketinggian & Kelengkungan

Albedo tidak boleh berupa warna polos datar. Gunakan teknik *multi-stop gradient ramp*:

```
Height Map ──> [Slope Blur] ──> [Curvature Concave/Convex] ──> [Gradient Map (sRGB)] ──> Albedo
```

1. **Stop 0 (Celah Paling Dalam / Concave)**: Warna tanah / kotoran / residu oksidasi lebih gelap dengan saturasi hangat.
2. **Stop 1 (Dasar Material)**: Warna asli material (misal: cat pelapis biru industri atau abu-abu beton).
3. **Stop 2 (Variasi Penuaan)**: Warna perubahan pigmen akibat paparan sinar matahari (fading).
4. **Stop 3 (Tepi Menonjol / Convex Ridges)**: Warna substrat logam terbuka akibat gesekan fisik atau warna cat yang memudar akibat tegangan mekanik.
