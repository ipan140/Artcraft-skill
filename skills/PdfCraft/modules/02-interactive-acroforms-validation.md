# Modul 02: Interactive AcroForms & Validation Scripting

Modul ini menetapkan arsitektur pembuatan formulir interaktif menggunakan AcroForms standar ISO 32000-1, hierarki field input, dan script validasi JavaScript Acrobat.

---

## 1. Definisi Kamus Field AcroForm (PDF Widget Annotations)

Kamus form utama disimpan pada objek `AcroForm` di root catalog dokumen:

```text
<<
  /Fields [ 10 0 R 11 0 R 12 0 R ]
  /NeedAppearances false
  /DA (/Helv 10 Tf 0 g)
  /DR << /Font << /Helv 20 0 R >> >>
>>
```

Setiap widget field anotasi mendefinisikan batas koordinat `Rect [x1, y1, x2, y2]`, bendera `Ff` (misal: ReadOnly, Required), dan tampilan `AP` (*Appearance Streams*).

---

## 2. Script Validasi Acrobat JavaScript

AcroForms mendukung script validasi pada event `Validate` dan `Format`:

### Validasi Format Nomor Pokok Wajib Pajak / KTP:
```javascript
// Event: Validate pada field txt_tax_id
var regex = /^\d{2}\.\d{3}\.\d{3}\.\d{1}-\d{3}\.\d{3}$/;
if (event.value && !regex.test(event.value)) {
    app.alert("Format NPWP tidak valid. Gunakan format XX.XXX.XXX.X-XXX.XXX", 1);
    event.rc = false; // Batalkan input
}
```

### Validasi Format Email:
```javascript
// Event: Validate pada field txt_email
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (event.value && !emailRegex.test(event.value)) {
    app.alert("Silakan masukkan alamat email yang valid.", 1);
    event.rc = false;
}
```

---

## 3. Penataan Tampilan (Appearance State)

- Jangan gunakan `/NeedAppearances true` dalam rilis dokumen final, karena pembaca PDF di browser (seperti Chrome PDF Viewer atau iOS Safari) sering tidak merender field jika appearance stream normal `/AP` tidak di-bake langsung ke dalam PDF.
- Selalu bangun *Normal Appearance Stream* (`/N`) untuk setiap tombol dan input teks.
