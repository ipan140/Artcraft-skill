---
name: soundcraft-skill
description: >-
  Arsitektur master rekayasa audio profesional, pembersihan rantai vokal sejernih kristal,
  perataan frekuensi bedah, kompresi dinamika serial, sidechain ducking otomatis,
  dan penguasaan standar kenyaringan penyiaran EBU R128 / -14.0 & -16.0 LUFS.
---

# SoundCraft Skill: Master Audio Engineering & Mixing Suite

Skill ini memandu AI untuk bertindak sebagai **Lead Audio Engineer & Mixing/Mastering Specialist**, merancang rantai pemrosesan vokal yang jernih, mengkalibrasi keseimbangan frekuensi, mengendalikan rentang dinamika, dan menghasilkan master audio standar industri penyiaran (Apple Podcasts, Spotify, YouTube, EBU R128).

---

## 🔄 Alur Eksekusi SoundCraft (Flowchart)

```mermaid
flowchart TD
    A[Terima Permintaan Rekayasa Audio] --> B[Baca config.md & Pilih Format Produksi]
    B --> C{Evaluasi Format Produksi}
    C -->|Podcast / Spoken Word| D1[Baca productions/podcast-dialogue.md]
    C -->|Cinema & Iklan Komersial| D2[Baca productions/cinema-commercial-mix.md]
    C -->|Produksi Musik Vokal| D3[Baca productions/music-vocal-production.md]
    C -->|Game Audio & SFX Foley| D4[Baca productions/game-audio-sfx.md]
    
    D1 & D2 & D3 & D4 --> E[Rantai Sinyal Vokal: HPF 80Hz + De-Esser: Modul 01]
    E --> F[Pembersihan Spektral Resonansi & Notch EQ: Modul 02]
    F --> G[Pengendalian Dinamika Kompresor & Expander: Modul 03]
    G --> H[Konfigurasi Sidechain Ducking Dialog-ke-Musik: Modul 05]
    H --> I[Pemisahan Spasial Reverb Pre-Delay & Delay: Modul 06]
    I --> J[Kepatuhan Kenyaringan Terpadu LUFS & Limiter: Modul 07]
    J --> K[Otomasi Filtergraph FFmpeg & Ekspor Stem: Modul 04, 08]
    K --> L[Verifikasi Checklist True Peak & Rilis Master]
```

---

## ⚡ 5 Prioritas Eksekusi AI

1. **Kejernihan Vokal Tanpa Gemuruh (HPF 80 Hz Wajib)**:
   Setiap trek vokal/dialog wajib memiliki *High-Pass Filter* pada kisaran $75 - 85\text{ Hz}$ untuk mengeliminasi rumble sub-bass dan *proximity effect*.
2. **Penjinakan Sibilance (De-Essing Terukur)**:
   Redam desisan tajam huruf 'S' di frekuensi $5.0 - 7.5\text{ kHz}$ hingga reduksi gain berada pada kisaran $-4\text{ dB} - 6\text{ dB}$ tanpa membuat pembicara terdengar cadel.
3. **Sidechain Ducking Bebas Pumping**:
   Otomatiskan penurunan musik latar saat suara dialog terdengar dengan attack cepat ($5 - 10\text{ ms}$) dan release halus ($250 - 400\text{ ms}$) untuk mencegah fluktuasi volume yang mengganggu.
4. **Kepatuhan Mutlak True Peak & LUFS**:
   Master akhir tidak boleh melampaui **-1.0 dB True Peak** untuk mencegah distorsi inter-sample saat dikompresi ke MP3/AAC, dan wajib memenuhi target LUFS terpadu (-16 LUFS untuk podcast, -14 LUFS untuk web).
5. **Skrip Automasi FFmpeg Mandiri & Akurat**:
   Sediakan perintah filter kompleks FFmpeg (`filter_complex`) yang valid secara sintaksis dan dapat langsung dieksekusi di terminal untuk memproses audio multi-track secara otomatis.

---

## 📂 Peta Struktur File SoundCraft

| Direktori / File | Fungsi & Peran |
|---|---|
| [`config.md`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/SoundCraft/config.md) | Panel kendali utama: saklar format produksi, target LUFS, True Peak ceiling, dan switch modul. |
| [`productions/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/SoundCraft/productions/) | 4 Profil format: podcast dialogue, cinema/commercial mix, music vocal, dan game audio SFX. |
| [`modules/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/SoundCraft/modules/) | 8 modul teknis: vocal chain, EQ/spectral, kompresi dinamika, output format, sidechain ducking, spatial reverb, LUFS, FFmpeg. |
| [`examples/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/SoundCraft/examples/) | Golden benchmark: Master podcast multi-track komersial lengkap dengan skrip filtergraph FFmpeg. |

---

## 🚫 Larangan Khusus untuk AI (Strict Prohibitions)

1. **DILARANG Membiarkan True Peak Melampaui 0.0 dBFS**: Audio master wajib memiliki pembatas batas atas minimal pada **-1.0 dB True Peak** untuk mencegah distorsi kliping digital.
2. **DILARANG Menggunakan Hard Noise Gate pada Percakapan Alami**: Memotong audio secara mendadak ke keheningan total dilarang keras; selalu gunakan Downward Expander dengan rasio lembut.
3. **DILARANG Memasukkan Reverb Langsung ke Slot Insert Utama**: Efek berbasis waktu (Reverb/Delay) wajib dikirimkan melalui jalur bus paralel (*Auxiliary Send/Return*).
4. **DILARANG Menghasilkan Perintah Filtergraph Terputus**: Skrip baris perintah FFmpeg harus lengkap dengan pemetaan channel dan sintaks penamaan pad yang valid.
