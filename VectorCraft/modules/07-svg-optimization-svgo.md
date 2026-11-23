# Modul 07: SVG Optimization & SVGO Minification

Modul ini menetapkan protokol pembersihan kode markup SVG, penghapusan metadata editor pihak ketiga, penyederhanaan perintah path geometris, dan pemanfaatan alat kompresi SVGO (*SVG Optimizer*).

---

## 1. Anatomi Berkas SVG Produksi Bersih

Sebuah berkas SVG produksi yang siap digunakan untuk web dan aplikasi harus ringkas, semantik, dan terbebas dari sampah kode editor:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
  <!-- Path Bersih dengan Perintah Singkat -->
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## 2. Elemen dan Atribut yang Wajib Dihapus

Sebelum merilis SVG, hapus seluruh elemen berikut:
- **Komentar XML & Metadata Editor**: Tag `<!-- Generator: Adobe Illustrator... -->`, `xmlns:inkscape`, `sodipodi:docname`.
- **Grup Kosong yang Berulang**: Hapus tag `<g></g>` yang tidak memiliki atribut styling atau transformasi.
- **Titik Koordinat Berlebih**: Batasi presisi desimal angka hingga maksimum **2 angka di belakang koma** (misal: ubah `12.38472918` menjadi `12.38`). Ini memotong ukuran file hingga $60\%$ tanpa menurunkan kualitas visual yang terlihat mata manusia.
- **Dimensi Lebar/Tinggi Statis Tanpa ViewBox**: Selalu sertakan atribut `viewBox="0 0 W H"` agar ikon dapat merespons perubahan ukuran wadah CSS responsif secara mulus.

---

## 3. Konfigurasi Standar SVGO (SVG Optimizer JSON)

```json
{
  "plugins": [
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeEditorsNSData",
    "cleanupAttrs",
    "mergeStyles",
    "inlineStyles",
    "minifyStyles",
    "cleanupIds",
    "removeUselessDefs",
    "convertColors",
    "convertPathData",
    "convertTransform",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "mergePaths",
    "removeUnusedNS"
  ]
}
```
