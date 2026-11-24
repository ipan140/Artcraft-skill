# Modul 08: Deliverability & Spam Hygiene

Modul ini memberikan panduan teknis dan redaksional untuk memaksimalkan tingkat keterkiriman (*deliverability*) email bisnis, kepatuhan RFC 822/5322, serta pencegahan filter spam enterprise.

---

## 1. Kata Kunci Pemicu Spam yang Harus Dihindari

Hindari kata-kata bernada sensasional, penjualan agresif, atau tanda baca berlebihan di baris subjek dan badan email:

- ❌ **Dilarang di Subjek**: `URGENT!!!`, `BUY NOW`, `FREE $$$`, `100% GUARANTEED`, `ACT NOW`, `CLICK HERE`, `NO RISK`.
- ✅ **Gunakan Alternatif Profesional**: `[Time-Sensitive]`, `Contract Update`, `Milestone Evaluation`, `Action Required by [Date]`.
- ❌ **Kapitalisasi**: Dilarang menggunakan ALL-CAPS di seluruh subjek kalimat (misal: `PLEASE APPROVE THIS TODAY`).

---

## 2. Rasio Teks dan Media (Text-to-Image Ratio)

- Minimal **80% teks terstruktur** dan maksimal 20% elemen gambar/logo.
- Jangan pernah mengirim email yang hanya berisi screenshot atau gambar pengumuman utuh tanpa teks alternatif (*alt text*) dan teks tubuh mandiri.
- Selalu sertakan ringkasan teks lengkap dari grafik atau tabel yang dilampirkan.

---

## 3. Kepatuhan Standar RFC 5322 & Header Email

Pastikan struktur email memenuhi standar header internet message:

1. **From**: Alamat pengirim dengan nama tampilan yang jelas (`"Aditya Pratama <aditya@company.com>"`).
2. **Reply-To**: Ditentukan secara eksplisit jika balasan diarahkan ke inbox fungsional atau alias tim.
3. **Date**: Timestamp valid format RFC 2822 (`Mon, 23 Nov 2026 11:45:00 +0700`).
4. **Message-ID**: Identifier unik dari server email.
5. **Autentikasi Domain**: Pastikan domain pengirim mendukung SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), dan DMARC.
