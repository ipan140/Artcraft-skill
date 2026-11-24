# Golden Benchmark Example: Executive Vendor Approval Request

Dokumen ini mendemonstrasikan implementasi menyeluruh standar **MailCraft** untuk pengajuan persetujuan anggaran dan kontrak vendor infrastruktur cloud kepada Chief Financial Officer (CFO), dilengkapi matriks perbandingan, BLUF, tenggat waktu tegas, dan payload RFC 5545 `.ics` kalender.

---

## 1. Project Brief & Parameters

- **Pengirim**: Aditya Pratama (Lead Enterprise Cloud Architect)
- **Penerima Utama (To)**: Hendra Wijaya (Chief Financial Officer - CFO)
- **Tembusan (CC)**: Budi Santoso (VP of Engineering), Ratna Sari (Head of Procurement)
- **Tujuan**: Memperoleh persetujuan formal dan tanda tangan kontrak reservasi cloud 1 tahun (*Reserved Instances*) sebelum promo enterprise expired pada 25 November 2026 pukul 17:00 WIB.
- **Nilai Kontrak**: $180,000 USD/tahun (penghematan $54,000 USD vs On-Demand).

---

## 2. Production-Ready Email Output

```markdown
From: Aditya Pratama <aditya.pratama@inovasi.co.id>
To: Hendra Wijaya <hendra.wijaya@inovasi.co.id>
Cc: Budi Santoso <budi.santoso@inovasi.co.id>, Ratna Sari <ratna.sari@inovasi.co.id>
Subject: [Action Required] Q4 Cloud Infrastructure Contract Approval - Due 25 Nov 17:00 WIB
Date: Mon, 23 Nov 2026 09:15:00 +0700

Hi Pak Hendra,

BLUF (Bottom Line Up Front):
Kami memohon persetujuan dan tanda tangan Anda untuk kontrak tahunan AWS Enterprise Reserved Instances sebesar $180,000 USD (Rp 2,88 Miliar) paling lambat Rabu, 25 November 2026 pukul 17:00 WIB. Langkah ini mengunci penghematan biaya server sebesar 23% ($54,000 USD / tahun) dibandingkan skema on-demand untuk operasional 2027.

---

### 1. Evaluasi & Perbandingan Penawaran Vendor

Tim Engineering dan Procurement telah menyelesaikan uji beban dan audit keamanan pada 3 penyedia utama:

| Parameter | AWS Enterprise (Rekomendasi) | Azure Hybrid Benefit | Google Cloud Platform |
|---|---|---|---|
| **Biaya Tahunan (Commitment)** | **$180,000 USD** | $192,500 USD | $186,000 USD |
| **Penghematan vs On-Demand** | **23.0% ($54,000)** | 18.2% ($43,000) | 20.5% ($48,000) |
| **SLA Uptime & Support** | **99.99% + Enterprise SLA (15 min)** | 99.95% + Premier Support | 99.95% + Enhanced |
| **Kesiapan Migrasi Arsitektur** | **100% (Native Kubernetes eksisting)** | 70% (Butuh 3 minggu refactoring) | 85% (Butuh migrasi pipeline) |
| **Kepatuhan Regulasi (Data Center)** | **ID Jakarta Region (In-Country)** | ID Jakarta Region (In-Country) | ID Jakarta Region (In-Country) |

---

### 2. Rekomendasi & Justifikasi Keputusan

Kami merekomendasikan **AWS Enterprise 1-Year Reserved**:
1. **Risiko Zero Migration**: 94% microservice sistem produksi saat ini telah berjalan stabil di AWS region Jakarta. Memilih vendor lain membutuhkan estimasi 120 jam kerja devOps untuk penyesuaian arsitektur.
2. **Kesesuaian Anggaran**: Anggaran alokasi cloud Q4 pada APB 2026 adalah $195,000 USD. Kontrak ini berada $15,000 USD di bawah batas pagu belanja.
3. **Konsekuensi Keterlambatan**: Promo diskon volume reservation ini berakhir pada 25 November 2026. Keterlambatan penandatanganan akan mengembalikan tagihan ke tarif On-Demand dengan estimasi penambahan beban biaya $4,500 USD per bulan.

---

### 3. Action Items & Timeline

1. **Review & Approval (Pak Hendra)**: Mohon berikan konfirmasi balasan email ini atau tanda tangan digital DocuSign melalui tautan di bawah sebelum **Rabu, 25 Nov 2026, 17:00 WIB**.
2. **Eksekusi Purchase Order (Ibu Ratna)**: Menerbitkan PO resmi ke AWS Distributor segera setelah approval diterima (Kamis, 26 Nov 2026).
3. **Aktivasi Reserved Instances (Aditya Pratama)**: Mengaktifkan alokasi resource pada Jumat, 27 Nov 2026 pukul 00:01 WIB tanpa downtime layanan.

👉 **Tautan Dokumen Kontrak & DocuSign**: [https://docusign.inovasi.co.id/envelopes/view/aws-contract-q4-2026](https://docusign.inovasi.co.id/envelopes/view/aws-contract-q4-2026)

Apabila Bapak memerlukan paparan teknis singkat selama 15 menit, saya telah menyiapkan undangan briefing kalender di bawah ini.

Terima kasih atas dukungan dan arahannya.

Salam hormat,

--
Aditya Pratama, TOGAF & AWS Certified Solutions Architect
Lead Enterprise Architect | Infrastructure & Cloud Division
PT Inovasi Digital Nusantara

P: +62 812-3456-7890 | E: aditya.pratama@inovasi.co.id | W: https://inovasi.co.id
HQ: Menara Inovasi Lt. 28, Jl. Jend. Sudirman Kav. 52, Jakarta 12950, Indonesia
Jadwalkan Diskusi: https://calendly.com/aditya-pratama-inovasi/15min

CONFIDENTIALITY NOTICE: This email and any attachments are intended solely for the use of the individual or entity to whom they are addressed and may contain confidential or legally privileged information.
```

---

## 3. RFC 5545 `.ics` Calendar Invite Payload

Berikut adalah attachment `invite.ics` standar yang dilampirkan bersama email di atas:

```ics
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//PT Inovasi Digital Nusantara//MailCraft Calendar Suite//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:uid-cloud-contract-review-20261124-001@inovasi.co.id
DTSTAMP:20261123T021500Z
DTSTART:20261124T030000Z
DTEND:20261124T033000Z
SUMMARY:[Briefing 15m] Q4 Cloud Infrastructure Vendor Sign-off
DESCRIPTION:Briefing singkat 15 menit mengenai penandatanganan kontrak tahunan AWS Reserved Instances.\nAgenda:\n1. Konfirmasi ringkasan biaya $180\,000 USD vs Pagu APB 2026\n2. Jadwal eksekusi DocuSign sebelum batas 25 Nov 17:00 WIB\n3. Tanya-jawab teknis arsitektur.
LOCATION:Google Meet: https://meet.google.com/abc-wxyz-qrs
ORGANIZER;CN=Aditya Pratama:mailto:aditya.pratama@inovasi.co.id
ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=Hendra Wijaya:mailto:hendra.wijaya@inovasi.co.id
ATTENDEE;ROLE=OPT-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=FALSE;CN=Budi Santoso:mailto:budi.santoso@inovasi.co.id
STATUS:CONFIRMED
SEQUENCE:0
PRIORITY:1
TRANSP:OPAQUE
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Reminder: Q4 Cloud Infrastructure Vendor Sign-off starts in 10 minutes
TRIGGER:-PT10M
END:VALARM
END:VEVENT
END:VCALENDAR
```

---

## 4. Verification & Deliverability Checklist

- [x] Subjek mengandung prefix kategori dan batas waktu spesifik (`[Action Required] ... Due 25 Nov 17:00 WIB`).
- [x] Paragraf pembuka memuat BLUF 3 kalimat: Keputusan yang diminta, urgensi tenggat waktu, dan dampak penghematan finansial.
- [x] Memuat tabel perbandingan 3 vendor yang bersih dan terstruktur.
- [x] Matriks penugasan Action Items mencantumkan PIC perorangan dengan batas tanggal dan jam kerja.
- [x] Payload `.ics` mematuhi RFC 5545 dengan `UID`, format timestamp UTC `Z`, alarm 10 menit, dan tautan virtual meeting.
- [x] Tidak mengandung spam trigger words (seperti `URGENT!!!`, `CHEAP`, atau ALL-CAPS berlebihan).
- [x] Blok tanda tangan memuat nama, titel, kredensial, kontak resmi, alamat kantor fisik, dan disclaimer kerahasiaan hukum.
