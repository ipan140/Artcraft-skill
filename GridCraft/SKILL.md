---
name: gridcraft-skill
description: >-
  Panduan formula spreadsheet canggih (XLOOKUP, LAMBDA, LET), permodelan analisa data bisnis,
  kondisional formatting, dan penyusunan dashboard visual di GridCraft.
---

# GridCraft Skill

Skill ini memandu AI dalam membangun spreadsheet bebas bug, formula kalkulasi dinamis modern, dan permodelan analisa keuangan di **GridCraft**.

---

## 📊 Standar Formula Modern

1. **Utamakan XLOOKUP**:
   - Menggantikan VLOOKUP/HLOOKUP karena lebih cepat, tahan pergeseran kolom, dan memiliki fallback nilai kosong bawaan:
     `=XLOOKUP(lookup_val, lookup_range, return_range, "Not Found", 0)`
2. **Optimasi dengan Fungsi LET**:
   - Simpan kalkulasi berulang ke dalam variabel agar spreadsheet bekerja jauh lebih kencang.
3. **Pemisahan Lembar Kerja 3-Lapis**:
   - Sheet 1: *Dashboard/Summary*
   - Sheet 2: *Calculations (Engine)*
   - Sheet 3: *Raw Data (Tabel Bersih)*

---

## 📋 Alur Eksekusi AI
1. Periksa format angka di [config.md](./config.md).
2. Sajikan rumus formula yang telah divalidasi sintaksnya beserta tabel data markdown.
