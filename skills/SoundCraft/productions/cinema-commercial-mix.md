# Production Profile: Cinema & Commercial Advertising Mix

Profil ini menetapkan aturan tata suara terpadu untuk iklan komersial televisi (TVC), trailer bioskop, dan video komersial digital dengan arsitektur mixing 3 pilar: Dialog, Musik latar, dan Efek Suara (*Dialogue, Music, Sound Effects - DME Stems*).

---

## 1. Standar Kenyaringan Penyiaran (Broadcast Delivery Standards)

| Saluran Distribusi | Standar Regulasi | Integrated Loudness | True Peak Maksimum |
|---|---|---|---|
| **Penyiaran Televisi (TV Broadcast)** | **EBU R128** / ITU-R BS.1770 | **-23.0 LUFS ($\pm 0.5$)** | **-1.0 dBTP** |
| **Iklan TV Komersial Indonesia/Asia** | EBU R128 | **-24.0 LUFS** | **-1.0 dBTP** |
| **Digital Web / YouTube Ads / TikTok** | Internet Standard | **-14.0 LUFS** | **-1.0 dBTP** |
| **Bioskop Komersial (Cinema)** | Dolby Atmos / 5.1 B-Chain | **-27.0 LUFS** | **-0.5 dBTP** |

---

## 2. Struktur Bus DME & Pembedahan Spektral

Untuk mencegah musik mengubur kejelasan suara narasi:

```
[Voiceover / Dialogue Track] ──> [Dialogue Bus] ──┐
                                     │ (Sidechain Trigger)
[Sound Effects (SFX / Foley)] ─> [SFX Bus]        │
                                                  ▼
[Music / Scoring Track] ───────> [Music Bus (Ducked -3.5dB saat VO aktif)]
                                                  │
                                                  ▼
                                      [MASTER COMPLIANCE BUS]
                                      (-14.0 / -23.0 LUFS Limiter)
```

1. **Pahat Ruang Dialog pada Musik (Spectral Carving)**:
   - Potong frekuensi musik selebar $1.5\text{ kHz} - 3.5\text{ kHz}$ sebesar $-2.5\text{ dB}$ menggunakan Dynamic EQ yang dipicu oleh sinyal vokal narator.
2. **Sidechain Ducking**:
   - Kompresor pada bus musik merespons sinyal vokal dengan attack cepat ($8\text{ ms}$) dan release halus ($350\text{ ms}$).

---

## 3. Ekspor Stem Wajib (Archival Deliverables)

Setiap pengiriman komersial wajib menyertakan 4 stem audio terpisah:
1. `MIX_FULL.wav` (Gabungan utuh stereo)
2. `STEM_VO.wav` (Khusus vokal dan dialog terisolasi)
3. `STEM_MUSIC.wav` (Khusus aransemen musik)
4. `STEM_SFX.wav` (Khusus foley, ambient, dan efek suara)
