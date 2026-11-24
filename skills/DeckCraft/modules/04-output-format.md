# Modul 04: Format Output Standar AI (Presentation Output Specification)

Modul ini mendikte bagaimana AI harus memformat dan menyajikan draf slide presentasi bisnis lengkap dengan kode tata letak visual, spesifikasi tipografi, dan naskah presenter (*speaker notes*).

---

## 1. Struktur Respon Wajib AI

Setiap kali AI menghasilkan draf slide presentasi berdasarkan skill ini, respon **WAJIB** mengikuti urutan 4 bagian per slide:

1. **Header Metadata Slide**:
   - Nomor Slide, Tipe Pola Slide (*Cover / Problem / 3-Pillars / Metric Grid / CTA*), dan Alokasi Waktu Pembicara (misal: 90 detik).
2. **Action Title (Judul Berisi Pesan Inti)**:
   - Kalimat aktif lengkap yang menyatakan kesimpulan utama slide.
3. **Spesifikasi Tata Letak Visual (Visual Layout & Content)**:
   - Sajikan susunan kolom, hero number, teks poin pendukung, dan deskripsi visual/grafik pendamping.
4. **Naskah Pembicara Lengkap (Verbatim Speaker Notes)**:
   - Teks lengkap apa yang harus diucapkan presenter kata-per-kata di panggung/ruang rapat (termasuk hook pembuka dan kalimat transisi ke slide berikutnya).
5. **Checklist Kualitas Kognitif**:
   - Di akhir seluruh set slide, sertakan checklist evaluasi beban kognitif dan kepatuhan narasi.

---

## 2. Template Output Markdown Resmi

Contoh format yang harus diikuti oleh AI:

````markdown
### 🖥️ Slide 02: [Nama Ringkas Slide]
Tipe: `Metric Grid (3 Kolom)` | Durasi Bicara: `~90 Detik` | Status: `[Untuk Diskusi]`

#### 📌 Action Title:
> **"Tiga Metrik Utama Q3 Memvalidasi Efisiensi Model Bisnis Baru Kita"**

#### 🎨 Tata Letak Visual (16:9 Canvas Layout)
- **Struktur**: 3 Kolom Berdampingan dengan Kartu Elevasi Halus (`bg-slate-800 border-slate-700`)
- **Kolom 1 (ARR Growth)**:
  - Hero Number: `+142%` (Warna Emerald `#10B981`)
  - Sub-label: Pendapatan Tahunan Berulang
  - Poin: Didorong oleh ekspansi paket enterprise tier atas.
- **Kolom 2 (Net Revenue Retention)**:
  - Hero Number: `128%` (Warna Emerald `#10B981`)
  - Sub-label: Tingkat Retensi Bersih
  - Poin: Klien eksisting menambah lisensi kursi rata-rata 2.4x.
- **Kolom 3 (CAC Payback)**:
  - Hero Number: `5 Bulan` (Warna Blue `#2563EB`)
  - Sub-label: Balik Modal Biaya Akuisisi
  - Poin: Turun drastis dari sebelumnya 14 bulan berkat viralitas organik.

#### 🎙️ Naskah Pembicara (Speaker Notes):
> *"Bapak dan Ibu dewan direksi, mari kita lihat bukti nyata dari strategi yang kita sepakati kuartal lalu. Di slide ini, ada tiga angka yang menjadi tolok ukur terpenting kesehatan bisnis kita hari ini...*
>
> *(Arahkan perhatian ke kolom pertama)* *Pertama, ARR kita tumbuh 142% year-on-year. Ini bukan sekadar penambahan volume pelanggan baru, melainkan peningkatan kualitas akun.*
>
> *(Lanjutkan ke kolom kedua)* *Buktinya terlihat pada NRR kita di angka 128%. Klien yang sudah bergabung tidak hanya loyal, tetapi aktif membelanjakan lebih banyak anggaran di platform kita.*
>
> *(Penutup & Transisi)* *Dan yang paling membanggakan, payback period kita kini terpangkas menjadi hanya 5 bulan. Efisiensi modal ini memberi kita ruang untuk melangkah ke inisiatif berikutnya di slide selanjutnya..."*
````

---

## 3. Larangan Khusus untuk AI
- **Dilarang Menghilangkan Naskah Presenter**: Menghasilkan slide tanpa *Speaker Notes* dianggap cacat standar profesional DeckCraft.
- **Dilarang Menuliskan Catatan Singkat**: Speaker notes harus berupa kalimat percakapan utuh yang siap dilatih (*verbatim rehearsal script*), bukan sekadar bullet points.
- **Dilarang Mengabaikan `config.md`**: Selalu patuhi batasan `max_bullets_per_slide` dan tema visual yang diset.
