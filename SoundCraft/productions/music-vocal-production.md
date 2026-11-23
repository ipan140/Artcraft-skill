# Production Profile: Music Vocal Production & Lead Mixing

Profil ini mengatur pemrosesan vokal musik utama (*Lead Vocal*), vokal latar (*Backing Vocals/Ad-libs*), kompresi bertingkat (*serial compression*), penyelarasan nada, dan efek modulasi spasial (reverb, delay tempo-synced).

---

## 1. Rantai Pemrosesan Vokal Musik (Vocal Chain Architecture)

- **Koreksi Nada (Pitch Correction)**:
  - Terapkan di awal rantai sebelum kompresor (Melodyne untuk transparan alami, Auto-Tune untuk efek modern).
- **Kompresi Bertingkat (Serial Compression Dual-Stage)**:
  1. *Stage 1 (Peak Catcher)*: Kompresor cepat tipe FET (1176 style), rasio $4:1$, attack ultra-cepat ($20\mu s - 800\mu s$), release cepat ($50ms$) untuk menangkap puncak nada liar sebesar $2 - 3\text{ dB}$.
  2. *Stage 2 (Smooth Leveler)*: Kompresor lambat tipe Opto (LA-2A style), rasio $\approx 3:1$, waktu respon halus untuk memberikan bobot dan konsistensi energi sebesar $2 - 4\text{ dB}$.
- **Saturasi Harmonik (Tape / Tube Saturation)**:
  - Berikan saturasi tape lembut ($1 - 2\%$) untuk menambahkan overtone harmonik genap yang memotong densitas aransemen musik.

---

## 2. Pengiriman Efek Ruang & Waktu (Time-Based FX Sends)

Jangan pernah memasukkan Reverb atau Delay langsung ke slot insert vokal utama! Selalu gunakan jalur **Auxiliary Send / Return**:

```
[Lead Vocal Audio Track]
        ├── Output Master Bus (Dry Vocal Direct)
        ├── Send 1 (-12dB) ──> [Aux Track: Slap Delay 1/16 Beat Synced]
        ├── Send 2 (-16dB) ──> [Aux Track: Stereo Ping-Pong 1/8d Delay]
        └── Send 3 (-14dB) ──> [Aux Track: Plate Reverb (Abbey Road HPF/LPF Filter)]
```

---

## 3. The Abbey Road Reverb Trick

Pada bus return Reverb:
- Potong frekuensi rendah di bawah **600 Hz** (High-Pass Filter) untuk mencegah lumpur suara di area bass/mid.
- Potong frekuensi tinggi di atas **10 kHz** (Low-Pass Filter) untuk mencegah desisan sibilance dan suara gesekan kasar memantul di dalam reverb.
