# Modul 08: Optimasi Performa & Sanitasi Keamanan (Performance & Security Sanitization)

Modul ini menetapkan protokol pembersihan skrip pelacak pihak ketiga (*third-party telemetry/trackers*), pencegahan kebocoran memori (*memory leaks*), dan sanitasi celah keamanan (XSS, Prototype Pollution).

---

## 1. Protokol Pembersihan Skrip Pelacak & Telemetri (Tracker Stripping)

Software web komersial yang dibedah hampir selalu memuat skrip analitik dan iklan yang memperlambat aplikasi. AI **WAJIB** membersihkan hal-hal berikut:

1. **Tag Pelacak Analitik**: Hapus Google Tag Manager (`gtag`), Google Analytics (`ga`), Facebook Pixel (`fbq`), Segment, Amplitude, Mixpanel, Hotjar, LogRocket, dan Clarity.
2. **Skrip Iklan & Pelacak Konversi**: Hapus Google AdSense, DoubleClick, Taboola, Outbrain, Criteo.
3. **Pemberitahuan Telemetri Error**: Hapus inisialisasi Sentry DSN atau Datadog RUM token agar kode mandiri tidak mengirimkan log ke server pengembang asli.

---

## 2. Sanitasi Keamanan (Security Hardening)

1. **Pencegahan Cross-Site Scripting (XSS)**:
   - Hindari penggunaan `dangerouslySetInnerHTML` di React kecuali konten telah disanitasi menggunakan pustaka seperti `DOMPurify`.
   - Hindari pemanggilan `eval()` atau `new Function()` saat mengeksekusi ekspresi dinamis.
2. **Pencegahan Polusi Prototipe (Prototype Pollution)**:
   - Jangan melakukan merge objek secara rekursif langsung terhadap `__proto__` atau `constructor`.
3. **Target Tautan Aman**:
   - Setiap tag tautan eksternal `<a href="..." target="_blank">` **wajib** menyertakan atribut `rel="noopener noreferrer"` untuk mencegah serangan `window.opener`.

---

## 3. Optimasi Performa Rendering

1. **Memoization Terukur**:
   - Gunakan `useCallback` untuk fungsi callback yang diteruskan ke komponen anak yang dibungkus `React.memo`.
   - Gunakan `useMemo` hanya untuk komputasi berat (seperti memfilter atau mengurutkan 1.000+ data kartu).
2. **Pembersihan Listener & Timer (Cleanup Functions)**:
   - Setiap `addEventListener` (misal: `keydown`, `resize`, `mousemove`) atau `setInterval` di dalam `useEffect` **wajib** memiliki fungsi pengembalian pembersih (*cleanup function*):
   
```typescript
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [closeModal]);
```
