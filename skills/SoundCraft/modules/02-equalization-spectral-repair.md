# Modul 02: Equalization & Spectral Audio Restoration

Modul ini mendefinisikan teknik perataan frekuensi (*Equalization*), pembersihan gangguan bunyi dengung listrik (*hum/buzz*), bunyi letupan plosif, dan perbaikan audio menggunakan alat spektral (*spectral repair*).

---

## 1. Peta Spektrum Frekuensi Suara Manusia

| Rentang Frekuensi | Karakter Suara | Tindakan / Penyesuaian EQ |
|---|---|---|
| **$20 - 80\text{ Hz}$** | Gemuruh Sub-Bass / Rumble | **Potong habis** menggunakan High-Pass Filter |
| **$100 - 250\text{ Hz}$** | Bobot Fundamental / Kehangatan | Naikkan $+1\text{ dB}$ untuk vokal kurus, potong $-2\text{ dB}$ jika berdengung tebal |
| **$300 - 600\text{ Hz}$** | Kotak Ruangan / Muddy Boxiness | Sering dipotong $-2\text{ dB} - 4\text{ dB}$ untuk menghilangkan kesan suara kardus |
| **$800 - 1.5\text{ kHz}$** | Karakter Vokal / Sengau | Wilayah artikulasi fonem; periksa keseimbangan vokal |
| **$2.5 - 4.5\text{ kHz}$** | Kehadiran / Kejelasan (Presence) | Naikkan $+1.5\text{ dB} - 3\text{ dB}$ agar kata-kata terdengar jelas di speaker kecil |
| **$5.0 - 8.0\text{ kHz}$** | Sibilance / Desisan Tajam | Area kerja De-Esser; redam puncak kasar huruf 'S', 'T', 'Z' |
| **$10 - 20\text{ kHz}$** | Kilau Udara (Air Band) | High shelf lembut untuk nuansa keterbukaan dan nafas alami |

---

## 2. Pembersihan Spektral Kebisingan (Noise Suppression)

- **Eliminasi Ground Hum (Listrik PLN)**:
  - Terapkan filter takik tajam (*Notch Filter*) pada frekuensi $50\text{ Hz}$ (standar listrik Indonesia/Eropa) atau $60\text{ Hz}$ (standar AS) beserta harmonik keduanya ($100\text{ Hz}$ / $120\text{ Hz}$).
- **Pembersihan Plosif (P-Pops)**:
  - Jika letupan udara huruf 'P' terlanjur terekam, gunakan Dynamic EQ di area $40 - 120\text{ Hz}$ yang hanya aktif menekan saat ledakan frekuensi rendah terjadi, atau gunakan Spectral Repair Attenuate pada visual sonogram.
