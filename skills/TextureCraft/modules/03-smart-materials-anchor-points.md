# Modul 03: Smart Materials & Anchor Points Architecture

Modul ini menetapkan hierarki tumpukan layer material cerdas (*Smart Materials*), integrasi titik jangkar acuan (*Anchor Points*), dan pengaitan dinamis antarlapisan saluran tekstur.

---

## 1. Arsitektur Tumpukan Layer Pengecatan 3D Baku

Setiap material aset profesional di **TextureCraft** harus disusun ke dalam urutan tumpukan 6 grup:

```
[06_SURFACE_DIRT_AND_DUST] (Lapisan debu tipis di atas permukaan menghadap langit)
        ↑
[05_GREASE_AND_LEAKS] (Rembesan minyak, oli, dan cairan hidrolik gravitasi)
        ↑
[04_SURFACE_PAINT_AND_DECALS] (Cat terkelupas di tepi + teks stensil / nomor seri)
        ↑
[03_SURFACE_IMPERFECTIONS] (Goresan mikro, sidik jari, lekukan benturan)
        ↑
[02_PRIMER_LAYER] (Cat dasar anti-karat di sekitar batas kelupasan cat)
        ↑
[01_BARE_BASE_MATERIAL] (Logam baja mentah / plastik struktural polimer)
```

---

## 2. Pemanfaatan Titik Jangkar Acuan (Anchor Points)

Anchor Points memungkinkan masker lapisan di atasnya membaca informasi ketinggian (*Height*) atau normal mikro dari lapisan di bawahnya:

```
[Layer: Painted Welds & Rivets] ──> [Pasang Anchor Point: AP_Welds_Height]
                                                    │
                                                    ▼
[Layer: Dirt & Rust Accumulation] ──> Masker membaca [AP_Welds_Height]
                                      (Karat otomatis menumpuk di sela jahitan las)
```

1. **Kasus Penggunaan Anchor Points**:
   - Menambahkan baut atau rivet stensil normal di lapisan tengah, lalu membuat generator kotoran secara otomatis mengenali tonjolan baut baru tersebut tanpa perlu melakukan baking ulang di 3D software.
   - Membuat cat terkelupas (*peeling paint*) memiliki efek bevel ketebalan fisik pada saluran Height yang otomatis terbaca oleh generator tepi.
