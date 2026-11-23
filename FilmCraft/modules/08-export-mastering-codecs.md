# Modul 08: Standar Ekspor, Codec & Masalah Gamma (Mastering & Color Tagging)

Modul ini menetapkan protokol kompresi master berkas (*ProRes 422 HQ vs H.264/H.265*), penyelesaian masalah pergeseran warna QuickTime (*QuickTime Gamma Shift bug*), serta metadata penandaan warna Rec.709-A.

---

## 1. Pilihan Codec Berdasarkan Kebutuhan Pasca-Produksi

| Format Codec | Tipe Kompresi | Bitrate & Bit-Depth | Kapan Digunakan |
| :--- | :--- | :--- | :--- |
| **Apple ProRes 422 HQ** | Intra-frame (Per-frame murni) | 10-bit 4:2:2 (~220 Mbps @ 1080p) | Master arsip video resolusi tinggi, penyerahan ke stasiun TV dan studio audio. |
| **Avid DNxHR HQX** | Intra-frame | 10-bit / 12-bit | Alternatif setara ProRes untuk ekosistem sistem operasi Windows. |
| **H.264 (AVC)** | Inter-frame (GOP / Long-GOP) | 8-bit 4:2:0 (~15-25 Mbps @ 1080p) | Standar distribusi universal web, streaming YouTube, dan pemutaran di berbagai perangkat konsumen. |
| **H.265 (HEVC)** | Inter-frame efisiensi tinggi | 10-bit 4:2:0 (~20-40 Mbps @ 4K) | Distribusi video 4K HDR dengan ukuran berkas 50% lebih hemat dibanding H.264. |

---

## 2. Mengatasi Masalah QuickTime Gamma Shift (Rec.709-A Fix)

Salah satu masalah paling terkenal di dunia video editing adalah **video yang tampak kontras dan gelap di dalam DaVinci Resolve atau Premiere Pro, namun tiba-tiba tampak pudar/kusam (*washed out*) saat diputar di QuickTime Player atau browser Safari**:

```text
PENYEBAB MASALAH:
- Ruang warna standar siaran Rec.709 menggunakan kurva Gamma 2.4.
- Namun pemutar QuickTime di macOS secara keliru menafsirkan tag Rec.709 sebagai Gamma 1.96!
```

### Solusi Tagging Resmi di DaVinci Resolve / Premiere Pro:
1. **Di DaVinci Resolve**:
   - Pada Project Settings $\rightarrow$ Color Management: Atur `Color Science: DaVinci YRGB`.
   - Pada panel Deliver $\rightarrow$ Advanced Settings:
     - Ubah `Color Tag` menjadi: **`Rec.709`**.
     - Ubah `Gamma Tag` menjadi: **`Rec.709-A`** (atau `Gamma 2.4` jika menargetkan pemutaran YouTube & TV Windows).
2. **Hasil**: QuickTime akan membaca metadata tag `1-1-1` secara presisi, sehingga kontras hitam dan saturasi warna di QuickTime persis sama 100% dengan tampilan di monitor grading studio.

---

## 3. Ekspor Lembar Keputusan Potong (EDL & FCPXML)
- **EDL CMX 3600**: Format berbasis teks sederhana untuk pertukaran daftar potong timecode antar software NLE.
- **Final Cut Pro XML (.fcpxml / .xml)**: Format pertukaran modern yang membawa informasi struktur multi-track video, track audio, nama klip sumber, skala, dan posisi transisi.
