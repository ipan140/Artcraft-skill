# Modul 02: Easing Curves, Graph Editor & Velocity

Modul ini menetapkan kurva kecepatan Bézier (*Speed Graph / Value Graph*), formula fungsi pelambatan (*Easing Functions*), dan simulasi fisika pegas (*Spring Physics*).

---

## 1. Bahaya Interpolasi Linier (The Linear Movement Trap)

> [!WARNING]
> Interpolasi linier konstan (`linear`) membuat animasi tampak seperti gerakan robot pabrik rusak tanpa inersia atau massa. Dilarang keras menggunakan easing linier untuk elemen antarmuka atau karakter, kecuali pada rotasi roda jam yang berputar tanpa henti.

---

## 2. Presets Kurva Easing Bézier Kubik Standar

Gunakan nilai koordinat kurva Bézier empat titik standar CSS / Lottie:

| Nama Preset Kurva | Kode Nilai Bézier | Karakter Gerak | Kasus Penggunaan Ideal |
|---|---|---|---|
| **Ultra Smooth Ease-Out** | `cubic-bezier(0.16, 1, 0.3, 1)` | Melesat cepat seketika, lalu meluncur berhenti sangat lembut | Tombol pop-up, modal drawer, dropdown menu |
| **Sharp Ease-In** | `cubic-bezier(0.7, 0, 0.84, 0)` | Awalnya lambat, lalu melesat kencang menghilang | Elemen keluar layar (*exit animations*) |
| **Smooth Ease-In-Out** | `cubic-bezier(0.65, 0, 0.35, 1)` | Berakselerasi halus di awal dan melambat halus di akhir | Animasi siklus looping, pendulum bergerak bolak-balik |
| **Bouncy Overshoot** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Melampaui batas target sedikit lalu memantul kembali | Ikon centang sukses, lencana notifikasi |

---

## 3. Manipulasi Speed Graph vs Value Graph

- **Value Graph**: Menampilkan kurva perubahan nilai angka terhadap waktu (misal: pergeseran posisi piksel dari $0\text{ px}$ ke $500\text{ px}$).
- **Speed Graph (Grafik Kecepatan)**:
  - Menampilkan laju kecepatan perubahan nilai dalam piksel per detik ($\text{px/detik}$).
  - Puncak kurva yang curam di awal ($80\%$) dengan lereng melandai ke kanan menciptakan kesan responsivitas antarmuka yang gesit dan berbobot.
