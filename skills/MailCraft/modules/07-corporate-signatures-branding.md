# Modul 07: Corporate Signatures & Branding

Modul ini mengatur standarisasi blok tanda tangan email perusahaan, tautan penjadwalan meeting (Calendly / Google Meet), dan klausul kerahasiaan hukum (*legal disclaimers*).

---

## 1. Struktur Blok Tanda Tangan Standar

Setiap email resmi wajib menggunakan struktur blok tanda tangan 4 tingkat:

```text
--
[Full Name], [Credentials/Certifications]
[Job Title] | [Department / Division]
[Company Name] | [Subsidiary / Holding]

P: +62 811-XXXX-XXXX | E: [name]@[company].com | W: https://www.company.com
HQ: [Office Tower, Floor, Street Address, Jakarta 12950, Indonesia]
Schedule a meeting: [Calendly / Booking Link]
```

---

## 2. Format HTML Signature Bersih (Email Client Safe)

Untuk klien email yang mendukung HTML kaya (Outlook, Apple Mail, Gmail), gunakan HTML inline sederhana tanpa CSS eksternal atau JavaScript:

```html
<table style="font-family: Arial, sans-serif; font-size: 13px; color: #333333; line-height: 1.4; border-collapse: collapse; margin-top: 24px; border-top: 1px solid #e0e0e0; padding-top: 12px;">
  <tr>
    <td style="padding-right: 16px; vertical-align: top; border-right: 2px solid #0052cc;">
      <strong style="font-size: 14px; color: #172b4d;">Aditya Pratama</strong><br>
      <span style="color: #5e6c84;">Lead Enterprise Architect</span><br>
      <span style="color: #172b4d; font-weight: 600;">PT Inovasi Digital Nusantara</span>
    </td>
    <td style="padding-left: 16px; vertical-align: top;">
      <span>📱 +62 812-3456-7890</span><br>
      <span>✉️ aditya.pratama@inovasi.co.id</span><br>
      <span>🌐 <a href="https://inovasi.co.id" style="color: #0052cc; text-decoration: none;">inovasi.co.id</a></span>
    </td>
  </tr>
</table>
```

---

## 3. Klausul Kerahasiaan Hukum (Legal Confidentiality Notice)

Tambahkan *disclaimer* ringkas dan efektif di bagian terbawah jika berkomunikasi secara eksternal:

```text
CONFIDENTIALITY NOTICE: This email and any attachments are intended solely for the use of the individual or entity to whom they are addressed and may contain confidential or legally privileged information. If you have received this message in error, please immediately notify the sender and delete all copies from your system.
```
