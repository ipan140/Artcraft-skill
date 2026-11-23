# Production Profile: Podcast & Spoken Word Dialogue

Profil ini mengatur rekayasa suara untuk podcast naratif, wawancara dua pembicara (*multi-mic interview*), audio tutorial, dan audiobook dengan fokus pada kejernihan vokal mutlak, eliminasi kebisingan ruangan (*denoise*), dan kepatuhan standar kenyaringan podcast global.

---

## 1. Standar Teknis Podcast Broadcast

- **Target Kenyaringan Terpadu (Integrated Loudness)**:
  - **-16.0 LUFS** untuk file Stereo (Standar Apple Podcasts, Spotify, YouTube).
  - **-19.0 LUFS** untuk file Mono.
- **True Peak Ceiling**: Maksimal **-1.0 dBFS True Peak** (mencegah distorsi inter-sample saat kompresi AAC/MP3 128-192 kbps).
- **Loudness Range (LRA)**: $\le 6.0\text{ LU}$ (menjaga konsistensi volume agar pendengar tidak perlu menaik-turunkan volume saat berkendara atau menggunakan earphone).

---

## 2. Rantai Sinyal Vokal Podcast (Dialogue Strip)

```
[Mikrofon Input (Shure SM7B / Rode PodMic)]
        ↓
[1. De-Click & De-Plosive] (Pembersihan bunyi kecap mulut & hembusan angin huruf 'P'/'B')
        ↓
[2. Subtractive EQ] (High-Pass 80Hz 18dB/oct, cut room boxiness 350Hz)
        ↓
[3. Downward Expander / Gate] (Meredam dengung AC & background noise saat jeda bicara)
        ↓
[4. De-Esser] (Menjinakkan desisan sibilance frekuensi 5.5kHz - 7.5kHz)
        ↓
[5. Primary Leveler / Compressor] (Rasio 2.5:1, reduksi gain 3-5dB, attack 15ms, release 120ms)
        ↓
[6. Broadcast Tone EQ] (Sentuhan kehangatan di 180Hz, kejernihan artikulasi di 3kHz, high shelf 12kHz)
        ↓
[7. Brickwall Limiter] (Ceiling -1.0 dBTP)
```

---

## 3. Penanganan Bleed Multi-Mikrofon

- Jika dua pembicara berada dalam satu ruangan studio:
  - Terapkan **Auto-Mixer / Dugan Speech Automixer** atau gating terhubung untuk menurunkan level mikrofon yang tidak sedang berbicara sebanyak $-10\text{ dB} - 12\text{ dB}$ guna mencegah efek penyaringan sisir (*comb filtering phase cancellation*).
