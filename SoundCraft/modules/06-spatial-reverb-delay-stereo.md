# Modul 06: Spatial Reverb, Delay & Stereo Imaging

Modul ini menetapkan prinsip perancangan ruang akustik tiruan (*artificial reverberation*), pantulan gema ritmis (*tempo-synced delay*), dan pengelolaan pelebaran medan stereo (*stereo imaging*) tanpa merusak kompatibilitas mono (*mono compatibility*).

---

## 1. Tiga Tipe Algoritma Reverb Utama

| Tipe Reverb | Karakter Akustik | Waktu Peluruhan ($T_{60}$) | Kasus Penggunaan Ideal |
|---|---|---|---|
| **Room / Studio** | Intim, pantulan dinding dekat, kering | $0.4 - 0.8\text{ detik}$ | Menyatukan vokal podcast kering dengan ruangan yang hidup |
| **Plate** | Terang, rapat, padat, tanpa pantulan awal tajam | $1.2 - 2.2\text{ detik}$ | Vokal musik pop/rock, snare drum |
| **Hall / Cathedral** | Luas, megah, ekor panjang bergradasi | $2.5 - 5.0\text{ detik}$ | Musik orkestra, paduan suara, soundscapes sinematik |

---

## 2. Pre-Delay untuk Kejernihan Vokal

- Selalu berikan **Pre-Delay** sebesar $20 - 50\text{ ms}$ pada reverb vokal.
- Pre-delay memisahkan bunyi konsonan vokal asli dari gelombang pantulan awal reverb, sehingga vokal terdengar dekat dan jelas di depan mikrofon, diikuti oleh kesan ruang megah di belakangnya.

---

## 3. Kompatibilitas Mono & Korelasi Fase (Phase Correlation)

- Periksa percampuran stereo menggunakan **Phase Correlation Meter**:
  - Nilai $+1.0$: Sinyal mono sempurna (kiri dan kanan identik).
  - Nilai $+0.3$ hingga $+0.8$: Gambar stereo lebar yang sehat.
  - Nilai di bawah $0.0$ (merah negatif): Pembatalan fase parah (*phase cancellation*). Ketika audio diputar di speaker smartphone mono atau TV, suara vokal atau instrumen akan hilang teredam.
- Aturan Bass Mono: Seluruh instrumen di bawah frekuensi $120\text{ Hz}$ (Kick drum dan Bassline) wajib diset ke **Mono murni** (pan tengah $0$).
