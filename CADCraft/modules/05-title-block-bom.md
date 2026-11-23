# Modul 05: Kepala Gambar (Etiket ISO 7200) & Daftar Komponen (BOM)

Modul ini menetapkan dimensi baku etiket gambar teknik (*title block*), format tabel daftar bagian (*Bill of Materials - BOM*), serta kolom riwayat revisi resmi.

---

## 1. Tata Letak Kepala Gambar Standar ISO 7200

Kepala gambar **wajib** diletakkan di **sudut kanan bawah** dari bidang gambar (di dalam margin batas lembar kerja):

- **Lebar Baku ISO**: Maksimal `180 mm` (agar pas saat gambar A3/A2/A1 dilipat menjadi ukuran A4).
- **Tinggi Baku ISO**: Biasanya `40 mm s/d 65 mm` tergantung banyaknya informasi legalitas.

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. Nama Perusahaan / Institusi                              │
├───────────────────────────────┬─────────────────────────────┤
│ 2. Judul Gambar / Komponen    │ 3. Nomor Gambar (Drg No)    │
├───────────────┬───────────────┼───────────────┬─────────────┤
│ 4. Skala      │ 5. Satuan     │ 6. Ukuran Lembar│ 7. Lembar   │
│    1:1        │    mm         │    A3         │    1 dari 1 │
├───────────────┴───────────────┼───────────────┴─────────────┤
│ 8. Material                   │ 9. Simbol Proyeksi          │
│    AISI 1045 Carbon Steel     │    (Third Angle Icon)       │
├───────────────┬───────────────┼───────────────┬─────────────┤
│ 10. Status    │ Nama          │ Tanggal       │ Tanda Tangan│
│     Drawn     │ Engineering   │ 2026-11-23    │ [Signed]    │
│     Checked   │ Lead Engineer │ 2026-11-23    │ [Approved]  │
│     Approved  │ Chief Engineer│ 2026-11-23    │ [Approved]  │
└───────────────┴───────────────┴───────────────┴─────────────┘
```

---

## 2. Tabel Daftar Bagian / Bill of Materials (BOM)

Pada gambar susunan (*assembly drawing*), tabel BOM ditempatkan tepat di atas kepala gambar atau di sudut kanan atas lembar gambar:

| Pos (No) | Qty | Nomor Bagian / Part No | Deskripsi / Nama Bagian | Material / Spesifikasi | Berat (kg) |
| :---: | :---: | :--- | :--- | :--- | :---: |
| 1 | 1 | `FLG-01-HUB` | Flange Sleeve Hub | Cast Steel GS-45 | 4.25 |
| 2 | 1 | `FLG-02-SHAFT` | Poros Penggerak (Drive Shaft)| AISI 4140 Cr-Mo | 8.10 |
| 3 | 1 | `KEY-8x7x40` | Pasak Paralel DIN 6885-A | Steel C45K | 0.05 |
| 4 | 6 | `BLT-M12x50` | Baut Hexagon ISO 4014 Grade 8.8 | High Tensile Carbon Steel| 0.08 |
| 5 | 6 | `NUT-M12` | Mur Hexagon ISO 4032 Grade 8 | Carbon Steel Zinc-Plated | 0.02 |
| 6 | 6 | `WSH-M12` | Ring Pegas DIN 127B | Spring Steel 65Mn | 0.01 |

---

## 3. Balon Penunjuk Komponen (Item Callout Balloons)
1. Setiap nomor posisi pada tabel BOM harus dihubungkan ke benda di gambar susunan menggunakan garis penunjuk (*leader line*) berujung panah atau titik hitam bundar.
2. Nomor komponen berada di dalam lingkaran balon berdiameter `8 mm s/d 10 mm` (pada skala cetak 1:1).
3. Balon-balon penunjuk harus ditata rapi sejajar secara vertikal atau horizontal, tidak boleh berserakan acak di atas gambar.

---

## 4. Blok Riwayat Revisi (Revision Block)
Diletakkan di sudut kanan atas lembar gambar:

| Zona | Rev | Deskripsi Perubahan Teknik | Tanggal | Disetujui Oleh |
| :---: | :---: | :--- | :---: | :---: |
| B3 | 0 | Rilis Perdana untuk Fabrikasi | 2026-05-10 | IR |
| C2 | 1 | Ubah toleransi diameter bantalan dari H8 ke H7 | 2026-08-14 | IR |
| A4 | 2 | Tambahkan chamfer 2x45° pada ujung lubang baut | 2026-11-23 | IR |
