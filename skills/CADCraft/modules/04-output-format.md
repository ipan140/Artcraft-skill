# Modul 04: Format Output Standar AI (CAD Engineering Output)

Modul ini mendikte bagaimana AI harus menyusun respon ketika menghasilkan spesifikasi gambar kerja teknik, script otomasi CAD (Python ezdxf, AutoLISP, DXF ASCII, atau OpenSCAD), dan checklist verifikasi engineering.

---

## 1. Struktur Respon Wajib AI

Setiap kali AI menghasilkan solusi CAD berdasarkan skill ini, respon **WAJIB** mengikuti urutan 5 bagian berikut:

1. **Ringkasan Gambar Kerja & Standar Acuan**:
   - Sebutkan nama komponen, target disiplin (`mechanical`/`architectural`/dll.), standar drafting (`ISO 128 / ASME Y14.5`), sudut proyeksi (`Third Angle`), dan skala gambar.
2. **Spesifikasi Dimensi & Toleransi Kritis (Engineering Spec)**:
   - Tabel dimensi utama, toleransi khusus suaian poros/lubang, nilai kekasaran permukaan ($Ra$), dan datum acuan GD&T.
3. **Script Kode Otomasi CAD Siap Eksekusi (Production-Ready Code)**:
   - Sediakan kode lengkap (Python `ezdxf` atau AutoLISP `.lsp`) tanpa placeholder komentar terputus seperti `;; tambahkan entitas lain di sini...`.
   - Kode harus mendefinisikan layer, linetype, membuat geometri, menambahkan dimensi, etiket gambar, dan mengekspor berkas DXF/DWG valid.
4. **Detail Kepala Gambar (Title Block ISO 7200) & Tabel BOM**:
   - Teks kepala gambar resmi lengkap dengan nomor gambar (*Drawing No.*), material, berat estimasi, dan daftar revisi.
5. **Checklist Kualitas Drafting & Engineering**:
   - Daftar centang verifikasi kelayakan teknis sebelum gambar dirilis ke bengkel fabrikasi atau konstruksi.

---

## 2. Template Output Markdown Resmi

Contoh format yang harus diikuti oleh AI:

````markdown
### 📐 Lembar Gambar Teknik: [Nama Komponen / Proyek]
Disiplin: `[Target Disiplin]` | Standar: `[ISO / ASME]` | Proyeksi: `[Third / First Angle]` | Skala: `[1:1]`

#### 1. Spesifikasi Teknis & Dimensi Kritis
| Fitur / Bagian | Dimensi Nominal | Toleransi / Suaian | Standar GD&T / Finishing |
| :--- | :--- | :--- | :--- |
| Diameter Poros | Ø 50 mm | `h6` (+0.000 / -0.016 mm) | Silindrisitas `⌭ 0.008`, Ra 0.8 µm |
| Lubang Bantalan | Ø 90 mm | `H7` (+0.035 / -0.000 mm) | Posisi `⌖ Ø0.02 | A | B` |
| Lubang Baut Flange| 6x Ø 14 mm | ± 0.1 mm pada PCD Ø 125 mm | Simetris terhadap Datum A |

#### 2. Script Otomasi CAD (`generate_drawing.py`)
```python
import ezdxf
from ezdxf import colors

# Inisialisasi dokumen DXF format R2010
doc = ezdxf.new("R2010", setup=True)
msp = doc.modelspace()

# Definisi layer standar ISO
doc.layers.add("VISIBLE", color=colors.WHITE, lineweight=50)
doc.layers.add("HIDDEN", color=colors.CYAN, linetype="HIDDEN", lineweight=25)
doc.layers.add("CENTER", color=colors.RED, linetype="CENTER", lineweight=25)
doc.layers.add("DIMENSION", color=colors.GREEN, lineweight=25)

# ... kode pembuatan entitas lengkap tanpa potongan ...

doc.saveas("komponen_flange.dxf")
print("Berkas DXF berhasil digenerate: komponen_flange.dxf")
```

#### 3. Kepala Gambar (Title Block ISO 7200)
- **Nama Komponen**: Flange Coupling Presisi
- **Nomor Gambar**: `CAD-ME-2026-001`
- **Material**: AISI 1045 Carbon Steel (Normalized)
- **Satuan / Skala**: mm / 1:1
- **Digambar / Diperiksa**: Engineering Drafter / Lead Engineer

#### ✅ Checklist Verifikasi Kualitas CAD:
- [x] Sistem layer terpisah (tidak ada entitas pada layer 0)
- [x] Tebal garis mengikuti standar ISO 128 (Visible 0.50mm, Hidden/Center 0.25mm)
- [x] Simbol proyeksi kerucut terpancung terpasang pada etiket
- [x] Tidak ada over-dimensioning atau dimensi tumpang tindih
- [x] Datum A/B/C terdefinisi jelas untuk verifikasi inspeksi CMM
````

---

## 3. Larangan Khusus untuk AI
- **Dilarang Menyingkat Geometri Kritis**: Jangan pernah memotong koordinat kontur utama dengan komentar `// lengkapi sisa titik koordinat sendiri`.
- **Dilarang Menyatukan Semua Entitas ke Satu Layer**: Selalu buat dan pisahkan entitas ke layer `VISIBLE`, `HIDDEN`, `CENTER`, `DIMENSION`, dan `HATCH`.
- **Dilarang Mengabaikan `config.md`**: Selalu baca preferensi standar (ISO vs ASME) dan satuan (metrik vs imperial) yang diset pengguna.
