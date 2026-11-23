# Manufacturing Profile: Sheet Metal Fabrication

Profil ini mengatur pembuatan komponen lembaran logam presisi (braket, sasis elektronik, penutup mesin) yang diproduksi melalui pemotongan laser/punching dan penekukan mesin press brake (*bending*).

---

## 1. Parameter Utama Penekukan Logam (Bending Physics)

- **K-Factor**: Rasio letak sumbu netral material terhadap ketebalan pelat $T$:
  $$K = \frac{t_{\text{neutral}}}{T}$$
  - Standar K-factor umum: $0.33$ untuk tekukan udara (*air bending*) pelat tipis, $0.44 - 0.50$ untuk bottoming/coining.
- **Radius Tekuk Dalam Minimum ($R_{\text{min}}$)**:
  - Radius tekuk tidak boleh lebih kecil dari ketebalan pelat ($R \ge 1.0 \times T$) untuk mencegah keretakan pada serat luar tekukan.

---

## 2. Jarak Aman Lubang & Pembebasan Sudut (Bend Reliefs)

1. **Jarak Lubang ke Garis Tekuk**:
   - Tepi lubang terdekat harus berjarak minimal $2.5 \times T + R$ dari garis awal tekukan untuk mencegah distorsi oval pada lubang saat pelat ditekuk.
2. **Pembebasan Sudut Tekukan (Corner Relief)**:
   - Setiap sudut di mana dua tekukan bertemu wajib memiliki pemotongan pembebasan (*relief cut*) berbentuk lingkaran atau persegi panjang dengan lebar minimal $\ge T$ dan kedalaman melampaui garis tekuk.

---

## 3. Pola Bentangan Datar (Flat Pattern Export)

- Seluruh model solid sheet metal harus dapat dibentangkan (*unfolded*) menjadi pola 2D tunggal tanpa tumpang tindih geometri (*self-intersection*).
- Ekspor pola bentangan datar ke format DXF dengan pemisahan layer: `OUTLINE` (garis potong luar), `BEND_UP` (garis tekuk atas), dan `BEND_DOWN` (garis tekuk bawah beserta sudut derajatnya).
