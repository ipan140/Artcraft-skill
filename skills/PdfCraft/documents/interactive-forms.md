# Document Profile: Interactive AcroForms & Applications

Profil ini mengatur perancangan formulir interaktif (formulir pendaftaran, deklarasi pajak, audit inspeksi lapangan, pengajuan cuti/klaim) yang memiliki field input, checklist, dropdown, dan script validasi otomatis.

---

## 1. Anatomi Field AcroForm

| Tipe Field | Penamaan Variabel (Naming Convention) | Properti Utama | Validasi / Format |
|---|---|---|---|
| **Text Field** | `txt_applicant_fullname` | Border 1px, background putih | Wajib diisi (*Required*), Max 60 karakter |
| **Email Field** | `txt_applicant_email` | Format teks bebas | Validasi regex format email standar RFC 5322 |
| **Numeric Currency** | `num_loan_amount` | Rata kanan (*Right-aligned*) | Format desimal ribuan (e.g. `150.000.000`) |
| **Date Field** | `date_submission` | Format tanggal `DD/MM/YYYY` | Datepicker bawaan Acrobat |
| **Check Box** | `chk_terms_agreement` | Bentuk Checkmark standar | Nilai `Yes` / `Off` |
| **Radio Group** | `rad_payment_method` | Pilihan eksklusif tunggal | Nilai `CC`, `Transfer`, `EWallet` |
| **Combo / Dropdown** | `cmb_province` | List opsi berurut alfabet | Opsi pilihan default: `-- Pilih Provinsi --` |
| **Signature Field** | `sig_applicant` | Kotak tanda tangan digital | Integrasi sertifikat digital pengguna |

---

## 2. Urutan Tab Navigasi (Tab Order)

- Seluruh form wajib memiliki urutan tab rasional dari kiri ke kanan, atas ke bawah (`Structure / Row Order`).
- Pengguna harus dapat berpindah antar-field secara mulus hanya menggunakan tombol `Tab` pada keyboard tanpa loncat ke bagian yang tidak berurutan.

---

## 3. Kalkulasi & Script Otomatis (Acrobat JavaScript)

Gunakan script JavaScript kalkulasi otomatis pada field agregasi:

```javascript
// Script kalkulasi Total pada field num_total_payment:
var subtotal = this.getField("num_subtotal").value;
var taxRate = 0.11; // PPN 11%
var taxAmount = subtotal * taxRate;
this.getField("num_tax_amount").value = taxAmount;
event.value = subtotal + taxAmount;
```
