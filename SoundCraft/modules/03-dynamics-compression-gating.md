# Modul 03: Dynamics, Compression & Noise Gating

Modul ini menetapkan prinsip pengendalian dinamika audio, penyesuaian parameter kompresor (Threshold, Ratio, Attack, Release, Knee), kompresi paralel, dan pengaturan noise gate/expander.

---

## 1. Anatomi Kontrol Kompresor Audio

```
Gain Input ──> [Threshold Detection] ──> [Gain Reduction by Ratio] ──> [Makeup Gain]
                     │
         [Attack / Release Timing Curve]
```

1. **Threshold**: Titik level amplitudo (dBFS) di mana kompresor mulai bekerja menekan sinyal.
2. **Ratio**: Besarnya peredaman sinyal yang melampaui ambang batas:
   - $2:1$: Kompresi sangat halus, transparan (bus master atau dialog natural).
   - $4:1$: Standar industri untuk vokal rekaman dan instrumen akustik.
   - $10:1$ atau $\infty:1$: Berfungsi sebagai Limiter untuk menghentikan puncak sinyal.
3. **Attack Time**:
   - Attack Cepat ($0.5 - 5\text{ ms}$): Memangkas transien awal, meredam pukulan tajam, membuat suara terdengar lebih mundur ke belakang panggung.
   - Attack Sedang ($15 - 30\text{ ms}$): Membiarkan konsonan bibir dan pukulan stick drum lewat sebelum kompresor bekerja, menghasilkan artikulasi tajam.
4. **Release Time**:
   - Terlalu cepat ($< 30\text{ ms}$): Menyebabkan distorsi frekuensi rendah dan efek suara memompa (*pumping*).
   - Terlalu lambat ($> 500\text{ ms}$): Menenggelamkan kata-kata atau nada berikutnya yang lebih pelan.
   - Rekomendasi vokal: $80 - 150\text{ ms}$ disesuaikan dengan tempo ucapan pembicara.

---

## 2. Downward Expander vs Hard Noise Gate

- **Jangan gunakan Hard Gate pada vokal**: Gate yang memotong audio secara mendadak ke keheningan mutlak ($-\infty\text{ dB}$) membuat pernafasan terpotong dan menghasilkan suara klik artifisial.
- **Gunakan Downward Expander lembut**:
  - Threshold: Diletakkan sekitar $3 - 5\text{ dB}$ di atas desisan lantai ruangan saat diam.
  - Ratio: $1:1.5$ atau $1:2$.
  - Range Reduction: Batasi redaman maksimal hanya $-10\text{ dB}$ hingga $-14\text{ dB}$, sehingga suasana ruangan alami tetap terdengar halus tanpa kebisingan yang mengganggu.

---

## 3. Kompresi Paralel (New York Compression)

- Campurkan sinyal vokal kering murni (*dry*) dengan salinan sinyal vokal yang dikompresi sangat berat (rasio $8:1$, attack cepat, gain reduction $-10\text{ dB}$).
- Menghasilkan vokal yang sangat intim, tebal, dan berenergi tinggi tanpa merusak rentang dinamika vokal aslinya.
