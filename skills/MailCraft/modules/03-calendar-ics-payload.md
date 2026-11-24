# Modul 03: Standar Kalender iCalendar RFC 5545 (Calendar .ics Payload)

Modul ini menetapkan pembuatan struktur berkas kalender terbuka (*iCalendar Internet Standards RFC 5545*), komponen VCALENDAR & VEVENT, format waktu UTC (`Z`), UID unik, dan alarm pengingat otomatis.

---

## 1. Anatomi Blok iCalendar RFC 5545 (.ics)

Blok teks `.ics` memungkinkan aplikasi surel (Gmail, Apple Mail, Microsoft Outlook) mengenali jadwal rapat secara cerdas dan menampilkan tombol instan *“Add to Calendar”*:

```text
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ArtCraft Suite//MailCraft Calendar 2.0//ID
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:20261123T043000Z-mailcraft-meeting-001@company.com
DTSTAMP:20261123T043000Z
DTSTART:20261125T070000Z       <-- Waktu Mulai dalam UTC (Pukul 14:00 WIB = 07:00 UTC)
DTEND:20261125T073000Z         <-- Waktu Selesai (Durasi 30 Menit)
SUMMARY:[Undangan Rapat] Finalisasi Draf Kontrak Vendor
DESCRIPTION:Agenda Rapat:\n1. Review klausul SLA teknis\n2. Diskusi skema pembayaran termin\n3. Tanda tangan dokumen
LOCATION:Google Meet: https://meet.google.com/abc-defg-hij
STATUS:CONFIRMED
ORGANIZER;CN=Ivano Rossi:mailto:ivano@company.com
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=Bapak Hendra:mailto:hendra@company.com
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Pengingat Rapat dalam 15 Menit
END:VALARM
END:VEVENT
END:VCALENDAR
```

---

## 2. Rumus Konversi Waktu Lokal ke UTC (UTC Timestamp Conversion)

Standar kalender internasional **selalu menggunakan waktu UTC murni** (diakhiri huruf `Z`):

$$\text{Waktu UTC} = \text{Waktu Lokal WIB (UTC+7)} - 7\ \text{Jam}$$

- *Contoh*: Rapat hari Rabu, 25 November 2026, pukul **14:00 WIB**:
  - $14:00 - 7\text{ jam} = 07:00\text{ UTC}$.
  - Format RFC 5545: `DTSTART:20261125T070000Z`.
- Ketika penerima di Tokyo (UTC+9) membuka email tersebut, sistem kalender mereka akan otomatis menampilkan jam rapat di pukul **16:00 JST**, dan penerima di London (UTC+0) akan melihatnya di pukul **07:00 GMT**.

---

## 3. Komponen Pengingat (VALARM)
- Masukkan komponen `VALARM` dengan pemicu `TRIGGER:-PT15M` (Pengingat berbunyi 15 menit sebelum acara dimulai) agar peserta rapat tidak terlambat hadir.
