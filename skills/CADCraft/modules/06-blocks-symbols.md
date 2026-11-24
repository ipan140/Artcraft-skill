# Modul 06: Blok CAD & Simbol Teknik Standar (Symbols & Standard Blocks)

Modul ini menetapkan penggunaan pustaka blok modular, simbol pengelasan (ISO 2553 / AWS A2.4), simbol kualitas permukaan (ISO 1302), dan simbol hidrolik/arsitektur.

---

## 1. Simbol Pengelasan Standar (ISO 2553 / AWS A2.4)

Struktur garis simbol las terdiri dari garis panah (*arrow line*), garis referensi horizontal (*reference line*), dan ekor simbol (*tail*):

```text
               [Ukuran Las: z6]  [Simbol Las: △]  [Panjang: (50)]
                         \              |              /
     ───────────────────────────────────┴─────────────────────── < Garis Referensi
    / (Panah Menunjuk Titik Sambungan Las)                       \ [Ekor: Proses GTAW 141]
```

### 1.1 Simbol Dasar Sambungan Las
- `△` (Segitiga): **Fillet Weld** (Las Sudut). Ukuran dinyatakan dalam tinggi leher nominal ($a$) atau panjang kaki ($z$, di mana $z = a \sqrt{2}$).
- `V`: **Single-V Groove** (Las Tumpul V tunggal).
- `||` (Dua Garis Tegak): **Square Groove** (Las Kampuh Persegi I).
- `U`: **Single-U Groove** (Las Kampuh U).
- `○` pada perpotongan panah dan garis referensi: **Weld-All-Around** (Pengelasan melingkar penuh sekeliling profil).
- Simbol Bendera Hitam: **Field Weld** (Pengelasan dilakukan di lapangan/site, bukan di bengkel fabrikasi).

---

## 2. Simbol Finishing & Tekstur Permukaan (ISO 1302)

Simbol berupa tanda centang (*surface roughness tick*):

```text
          b
        ┌───┐
       /|   │
      / │ a │
     /  └───┘
    /
```
- **$a$**: Nilai kekasaran permukaan dalam mikrometer ($Ra\ \mu m$), misal `0.8`.
- **$b$**: Metode proses pengerjaan (misal: `Milled`, `Ground`, `Turned`, atau `Honed`).
- **Garis horizontal di atas centang**: Pengambilan material wajib dilakukan (*material removal by machining required*).
- **Lingkaran di dalam sudut centang**: Dilarang membuang material (*material removal prohibited - misal casting/forging mentah*).

---

## 3. Pustaka Blok Standar (CAD Standard Blocks)

Untuk menjaga konsistensi dan efisiensi memori gambar, gunakan blok standar (*reusable blocks*) dengan titik sisip (*insertion point*) yang presisi:

1. **Blok Mekanikal**:
   - Baut, Mur, dan Ring standar ISO/DIN (titik sisip di pertemuan sumbu dan leher baut).
   - Profil gemuk pelumas / grease nipple DIN 71412.
2. **Blok Arsitektural & Interior**:
   - Simbol Pintu Swing 90° (titik sisip di engsel kusen).
   - Simbol Jendela Kaca (titik sisip di tepi as kusen luar).
   - Simbol Arah Mata Angin / Tanda Utara (North Arrow).
   - Simbol Titik Ketinggian Lantai (Level Mark Peil).
3. **Atribut Blok (Block Attributes - ATTDEF)**:
   - Informasi dinamis seperti Nomor Pintu (`DOOR_ID`), Dimensi Bukaan (`SIZE`), atau Nomor Revisi (`REV_NO`) harus didefinisikan sebagai atribut teks dinamis agar mudah diekspor ke tabel spreadsheet/database.
