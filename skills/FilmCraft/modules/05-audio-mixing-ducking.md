# Modul 05: Tata Suara & Audio Ducking Otomatis (Audio Mixing & Loudness Standards)

Modul ini menetapkan hirarki pencampuran audio (*audio hierarchy*), level desibel standar (True Peak), kurva penurunan musik otomatis saat dialog (*Auto-Ducking*), dan standarisasi kenyaringan terintegrasi (EBU R128 & ITU-R BS.1770-4 / -14 LUFS).

---

## 1. Standar Level Desibel Multi-Track (Gain Staging)

Setiap elemen suara harus menempati rentang desibel (*dBFS - Decibels Relative to Full Scale*) yang telah distandarisasi agar tidak saling menelan:

| Track Audio | Tipe Elemen Suara | Target Rentang Nominal | Batas True Peak Maksimum |
| :---: | :--- | :---: | :---: |
| **A1** | **Dialog Vokal / Voice Over (VO)** | `-12 dBFS s/d -18 dBFS` | `-6.0 dBFS` |
| **A2** | **Desah Ruangan (Room Tone) & Ambience** | `-24 dBFS s/d -32 dBFS` | `-20.0 dBFS` |
| **A3** | **Efek Suara (Foley & SFX Pukulan/Pintu)** | `-10 dBFS s/d -20 dBFS` | `-3.0 dBFS` (Momen ledakan) |
| **A4** | **Musik Latar (Background Music)** | `-18 dBFS s/d -24 dBFS` *(Ducked)*<br>`-10 dBFS s/d -14 dBFS` *(Solo)* | `-6.0 dBFS` |

---

## 2. Mekanisme Audio Ducking Otomatis (Sidechain Ducking)

Ketika karakter berbicara, volume musik latar **wajib diturunkan secara otomatis** agar frekuensi vokal manusia (rentang kritis `1 kHz s/d 4 kHz`) terdengar jernih dan renyah:

```text
Volume Musik:
0 dB (Solo) ──────┐                                     ┌────── 0 dB (Kembali Solo)
                  │                                     │
                  └─── Turun -20 dB (Saat Dialog) ──────┘
                      ▲                                 ▲
                 Attack Time                       Release Time
                 (150 - 250 ms)                   (800 - 1200 ms)
```

1. **Kedalaman Penurunan (Ducking Depth)**: Turunkan volume musik sebesar `-18 dB s/d -24 dB` dari volume aslinya.
2. **Waktu Serang (Attack Time)**: `150 ms s/d 250 ms` sebelum kata pertama terucap, sehingga musik melandai lembut tanpa terdengar terpotong mendadak.
3. **Waktu Pulih (Release Time)**: `800 ms s/d 1200 ms` setelah kata terakhir selesai diucapkan, memberi jeda bernapas sebelum musik kembali naik secara bertahap.

---

## 3. Standarisasi Kenyaringan Terintegrasi (LUFS / LKFS)

LUFS (*Loudness Units relative to Full Scale*) mengukur persepsi volume telinga manusia sepanjang durasi video utuh:

- **Target Video Web / Streaming (YouTube, Netflix, Spotify, TikTok)**: **`-14.0 LUFS`** (Toleransi $\pm 1.0\ \text{LUFS}$), dengan True Peak maksimal di **`-1.0 dBFS`**.
- **Target Siaran Televisi Komersial (EBU R128 / ATSC A/85)**: **`-23.0 LUFS`** (Eropa) atau **`-24.0 LUFS`** (AS), dengan True Peak maksimal di **`-2.0 dBFS`**.

> Jangan pernah membiarkan audio menyentuh batas `0 dBFS` (Red Cliping), karena kompresi digital akan memicu distorsi suara yang kasar dan merusak telinga penonton.
