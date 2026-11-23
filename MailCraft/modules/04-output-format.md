# Modul 04: Format Output Standar AI (Executive Email & ICS Specification)

Modul ini mendikte bagaimana AI harus memformat dan menyajikan respon korespondensi surel bisnis, metadata header (To/Cc/Subject), badan surel berformat markdown bersih, blok data kalender `.ics`, dan checklist kualitas etiket surel.

---

## 1. Struktur Respon Wajib AI

Setiap kali AI menyajikan draf surel berdasarkan skill ini, respon **WAJIB** mengikuti urutan 5 bagian berikut:

1. **Header Metadata Surel**:
   - Penerima Utama (`To:`), Tembusan (`Cc:`), dan Baris Subjek resmi ber-tag niat (`Subject:`).
2. **Badan Surel Berformat Markdown Bersih (Email Body)**:
   - Salam pembuka, kalimat pertama berprinsip BLUF, tabel perbandingan atau poin aksi peluru, tenggat waktu eksplisit, dan salam penutup profesional.
3. **Blok Tanda Tangan Korporat (Signature)**:
   - Nama lengkap, jabatan resmi, divisi, kontak WhatsApp/telepon, dan tautan meeting cepat.
4. **Lampiran Kalender RFC 5545 (`invite.ics`)**:
   - Blok kode teks iCalendar valid yang siap disalin dan disimpan sebagai berkas `.ics`.
5. **Checklist Kualitas Komunikasi Eksekutif (Email QC Checklist)**:
   - Verifikasi ketat ketiadaan basa-basi kosong, kejelasan batas waktu, dan kebersihan filter spam.

---

## 2. Template Output Markdown Resmi

Contoh format yang harus diikuti oleh AI:

````markdown
### ✉️ Draf Surel: [Judul Skenario / Topik]
Skenario: `[Target Scenario]` | Tone: `[Executive Polite]` | Bahasa: `[Bahasa Indonesia]`

#### 1. Header Surel
- **To**: `Hendra Wijaya <cfo@company.com>`
- **Cc**: `Legal Team <legal@company.com>, Sekretaris Direksi <corsec@company.com>`
- **Subject**: `[Butuh Persetujuan] Pengadaan Server Cloud Q1 (Rp 450 Juta) - Batas Waktu: 25 Nov 17:00 WIB`

#### 2. Badan Surel
Selamat pagi Pak Hendra,

Kami memohon persetujuan Anda untuk menandatangani kontrak perpanjangan infrastruktur cloud AWS tahun 2026 senilai **Rp 450.000.000** sebelum **Rabu, 25 November 2026 pukul 17:00 WIB**, guna mengunci potongan harga komitmen tahunan sebesar 25% (penghematan Rp 150 Juta).

Berikut adalah ringkasan perbandingan opsi yang telah kami evaluasi:
| Parameter Evaluasi | Opsi 1: Komitmen Tahunan AWS (Rekomendasi) | Opsi 2: Bayar Bulanan Berjalan (On-Demand) |
| :--- | :--- | :--- |
| **Total Biaya 12 Bulan** | **Rp 450.000.000** (Rp 37,5 Jt / bln) | **Rp 600.000.000** (Rp 50 Jt / bln) |
| **Penghematan Kas** | **Rp 150.000.000 (Hemat 25%)** | Rp 0 |
| **Jaminan SLA Performa** | 99,99% High Availability | Standar 99,9% |

**Tindakan yang Diharapkan:**
1. Jika menyetujui, mohon balas surel ini dengan kata **"DISETUJUI"**.
2. Jika Bapak memerlukan diskusi klarifikasi singkat 15 menit, kami telah melampirkan slot undangan kalender di bawah untuk hari Selasa besok pukul 10:00 WIB.

Terima kasih atas arahan dan dukungan Bapak.

Hormat kami,

**Ivano Rossi Sugiyanto**  
VP of Engineering & Technology  
ArtCraft Technologies Corp. | +62 812-3456-7890  
[Jadwalkan Panggilan Singkat: calendly.com/ivano-rossi]

---

#### 3. Blok Data Kalender (`invite.ics`)
```ics
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ArtCraft//MailCraft 2.0//ID
METHOD:REQUEST
BEGIN:VEVENT
UID:20261123T043000Z-aws-approval-review@company.com
DTSTAMP:20261123T043000Z
DTSTART:20261124T030000Z
DTEND:20261124T031500Z
SUMMARY:[Klarifikasi Singkat] Review Kontrak Cloud AWS 2026
DESCRIPTION:Diskusi 15 menit klarifikasi klausul SLA dan komitmen penghematan anggaran Rp 150 Juta.
LOCATION:Google Meet: https://meet.google.com/xyz-uvwx-rst
ORGANIZER;CN=Ivano Rossi:mailto:ivano@company.com
ATTENDEE;ROLE=REQ-PARTICIPANT;CN=Hendra Wijaya:mailto:cfo@company.com
BEGIN:VALARM
TRIGGER:-PT10M
ACTION:DISPLAY
DESCRIPTION:Pengingat Rapat dalam 10 Menit
END:VALARM
END:VEVENT
END:VCALENDAR
```

#### ✅ Checklist Verifikasi Etiket Surel:
- [x] Subjek mengandung tag status niat `[Butuh Persetujuan]`
- [x] Kalimat pertama menerapkan prinsip BLUF (Bottom Line Up Front)
- [x] Batas waktu mencantumkan hari, tanggal kalender, jam, dan zona waktu (WIB)
- [x] Surel ringkas (bebas dari basa-basi pembuka yang kosong)
- [x] Payload kalender RFC 5545 valid dengan format UTC
````

---

## 3. Larangan Khusus untuk AI
- **Dilarang Menghilangkan Tag Awalan Subjek**: Subjek wajib memiliki tag seperti `[Butuh Persetujuan]` atau `[Tindakan Diminta]`.
- **Dilarang Menulis Batas Waktu Tanpa Jam**: Jangan hanya menulis `"batas waktu hari Rabu"`; wajib `"Rabu, 25 Nov pukul 17:00 WIB"`.
- **Dilarang Mengabaikan `config.md`**: Selalu sesuaikan zona waktu kalender dan bahasa utama yang diset.
