# Modul 04: Format Output Standar AI (Video Timeline & Edit Decision List)

Modul ini mendikte bagaimana AI harus menyajikan rancangan timeline penyuntingan video, lembar keputusan potong (*Edit Decision List - EDL*), struktur multi-track video (V1–V3) dan audio (A1–A4), catatan transisi, serta checklist pasca-produksi resmi.

---

## 1. Struktur Respon Wajib AI

Setiap kali AI menyusun rancangan editing video berdasarkan skill ini, respon **WAJIB** mengikuti urutan 5 bagian berikut:

1. **Ringkasan Proyek & Spesifikasi Format**:
   - Genre (`commercial-advertising`, `narrative-cinema`, dsb.), resolusi (misal: 4K UHD 3840x2160), framerate (`24.0 fps`), rasio aspek (`16:9`), dan target kenyaringan audio (`-14.0 LUFS`).
2. **Lembar Keputusan Potong Timeline (NLE Edit Decision Table)**:
   - Tabel terperinci memuat: Nomor Klip, Timecode Mulai (*In*) s/d Selesai (*Out*), Durasi Frame, Track Video (V1: A-Roll, V2: B-Roll, V3: Graphics), Track Audio (A1: Vokal, A2: Room Tone/Foley, A3: SFX, A4: Musik), serta Deskripsi Aksi & Transisi Potong.
3. **Catatan Color Grading & Scopes**:
   - Petunjuk nilai lift/gamma/gain, referensi kurva contrast pivot, dan verifikasi garis skin tone vectorscope.
4. **Skrip Format Interoperabilitas (EDL CMX3600 atau OpenTimelineIO)**:
   - Berkas data struktural yang dapat langsung diimpor ke Premiere Pro, DaVinci Resolve, atau Final Cut Pro tanpa penundaan placeholder.
5. **Checklist Kualitas Pasca-Produksi (Post-Production QC Checklist)**:
   - Verifikasi ketat kelayakan gambar dan audio sebelum ekspor master.

---

## 2. Template Output Markdown Resmi

Contoh format yang harus diikuti oleh AI:

````markdown
### 🎬 Lembar Timeline Penyuntingan: [Judul Proyek / Iklan]
Genre: `[Target Genre]` | Format: `[4K UHD @ 24fps]` | Target Audio: `-14.0 LUFS`

#### 1. Rincian Multi-Track Timeline (Timeline Assembly Sheet)
| No | Timecode (In - Out) | Durasi | Video Track (V1 - V3) | Audio Track (A1 - A4) | Deskripsi Shot & Transisi |
| :---: | :---: | :---: | :--- | :--- | :--- |
| 01 | `00:00:00:00 - 00:00:03:12` | 3s 12f | V1: WS Lanskap Kota Fasad Kaca | A4: Musik Riser Misterius (Fade In) | ELS Pembuka, gerak drone lambat, transisi J-Cut ke dialog |
| 02 | `00:00:03:12 - 00:00:07:08` | 3s 20f | V1: MCU Narator Menatap Lensa<br>V3: Lower Third Pengenal | A1: VO Narator (-12dB Peak)<br>A4: Musik Ducking (-20dB) | Narator memulai hook cerita, L-Cut audio berlanjut ke B-Roll |
| 03 | `00:00:07:08 - 00:00:11:00` | 3s 16f | V2: B-Roll Makro Tangan Mengetik | A1: VO Narator Berlanjut<br>A3: SFX Ketikan Keyboard Taktil | Cutting on Action jari menekan tombol enter, audio ducking aktif |

#### 2. Catatan Color Grading (DaVinci Resolve Color Spec)
- **Primary Balance**: Offset RGB diseimbangkan pada abu-abu 18% chart; White Balance 5600K Daylight.
- **Vectorscope Check**: Rona pipi narator terkunci tepat di garis 10:30 Skin Tone Line.
- **Waveform Contrast**: Shadow di-crush pada 2 IRE, highlight langit tertahan pada 95 IRE.

#### 3. Cuplikan Format OpenTimelineIO (`timeline.otio.json`)
```json
{
  "OTIO_SCHEMA": "Timeline.1",
  "name": "Commercial_30s_Master",
  "global_start_time": { "rate": 24, "value": 0 },
  "tracks": {
    "children": [
      { "name": "V1_Main", "kind": "Video" },
      { "name": "A1_Dialogue", "kind": "Audio" },
      { "name": "A4_Music", "kind": "Audio" }
    ]
  }
}
```

#### ✅ Checklist Verifikasi Kualitas Video (QC Checklist):
- [x] Kontinuitas 180° terjaga tanpa disorientasi ruang
- [x] Transisi dialog menerapkan J-Cut & L-Cut alami
- [x] Audio ducking menurunkan musik otomatis -20dB saat dialog bicara
- [x] Kenyaringan terintegrasi terkalibrasi tepat pada -14.0 LUFS
- [x] Color tagging Rec.709-A aktif untuk mencegah pergeseran gamma di QuickTime
````

---

## 3. Larangan Khusus untuk AI
- **Dilarang Menghasilkan Timecode yang Bertabrakan**: Perhitungan frame timecode harus presisi (pada 24fps: 23 frame diikuti detik baru `00:01:00:00`).
- **Dilarang Mengabaikan `config.md`**: Selalu baca preferensi resolusi kanvas dan target kenyaringan LUFS yang diset.
