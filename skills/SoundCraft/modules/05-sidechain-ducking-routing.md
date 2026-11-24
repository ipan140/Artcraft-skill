# Modul 05: Sidechain Ducking & Dynamic Frequency Routing

Modul ini menetapkan metodologi penurunan otomatis volume musik latar (*Sidechain Ducking*) saat narator berbicara, kompresi berbasis frekuensi (*frequency-conscious ducking*), dan perutean sinyal cerdas.

---

## 1. Mekanisme Sidechain Ducking Klasik (Broadband Ducking)

Pada kompresor sidechain yang dipasang di bus musik:

1. **Input Sinyal Audio**: Trek musik latar (BGM).
2. **Sinyal Pemicu Eksternal (Sidechain Key Input)**: Sub-bus Vokal/Dialog.
3. **Parameter Kompresor Ducking**:
   - **Threshold**: Diatur agar aktif saat vokal mulai berucap (sekitar $-24\text{ dBFS}$).
   - **Ratio**: $2.5:1$ hingga $4:1$.
   - **Attack Time**: Cepat ($5 - 10\text{ ms}$) agar musik langsung turun sebelum suku kata pertama vokal terdengar.
   - **Release Time**: Halus ($250 - 400\text{ ms}$) agar saat pembicara mengambil jeda nafas pendek di tengah kalimat, musik tidak memantul naik-turun secara mengganggu (*pumping*).
   - **Kedalaman Reduksi Gain (Ducking Depth)**: $-3.5\text{ dB}$ hingga $-5.5\text{ dB}$ untuk podcast/narasi, atau $-8.0\text{ dB}$ untuk voiceover iklan radio yang agresif.

---

## 2. Dynamic Frequency Ducking (Pembedahan Spektral Cerdas)

Daripada menurunkan seluruh spektrum musik (yang membuat bass dan ketukan drum terdengar hilang), gunakan **Dynamic EQ Sidechain**:

```
[Vocal Energy: 1.5kHz - 3.5kHz] ──> Trigger ──> [Music Dynamic EQ: Dip 2.5kHz by -4dB]
```

- Kompresor hanya memotong rentang frekuensi midrange ($1.5\text{ kHz} - 3.5\text{ kHz}$) pada musik yang berbenturan langsung dengan konsonan vokal.
- Dentuman bass ($60 - 150\text{ Hz}$) dan kemilau simbal ($8 - 15\text{ kHz}$) pada musik tetap utuh dan bertenaga penuh di telinga pendengar, sementara dialog narasi tetap terdengar jelas dan renyah.
