# Profil Target: Aplikasi Seluler (Mobile Applications)

Profil ini mengatur aturan dekonstruksi dan rekonstruksi untuk aplikasi iOS & Android, baik yang berbasis cross-platform (React Native, Flutter, Expo) maupun Progressive Web Apps (PWA).

---

## 1. Karakteristik Target Mobile App
- **Lingkungan Eksekusi**: Perangkat layar sentuh seluler (iOS / Android).
- **Interaksi Fisik**: Sentuhan jari (*touch target* min 48px), gestur (geser/swipe, cubit/pinch-to-zoom, tarik-untuk-segarkan/pull-to-refresh).
- **Keterbatasan Lingkungan**: Area takik kamera (*notch / safe area insets*), konektivitas fluktuatif (offline-first), konsumsi daya baterai, dan siklus hidup aplikasi (*foreground*, *background*, *terminated*).

---

## 2. Metodologi Dekonstruksi Mobile App

### 2.1 Pemetaan Navigasi & Layar
1. **Pola Navigasi**:
   - Tab Bar Bawah (Bottom Navigation Bar) untuk 3–5 menu utama.
   - Stack Navigator untuk transisi layar mendalam (Push / Pop dengan animasi slide horizontal).
   - Modal Sheet / Bottom Sheet yang dapat ditarik naik-turun (*draggable bottom sheets*).
2. **Safe Area & Ergonomi Jempol**:
   - Analisa padding atas untuk status bar (`safe-area-top`) dan padding bawah untuk home indicator (`safe-area-bottom`).
   - Zona jangkauan jempol (*thumb zone*) di paruh bawah layar untuk tombol aksi utama (Floating Action Button - FAB).

### 2.2 Pola Data Offline-First
- Periksa mekanisme penyimpanan data lokal: `AsyncStorage`, SQLite, Realm, atau IndexedDB/Cache API.
- Sinkronisasi mutasi data offline (*optimistic updates*) saat koneksi internet kembali pulih.

---

## 3. Strategi Rekonstruksi Bersih (Clean Rebuild)
1. **Kompatibilitas Layar Sentuh**:
   - Berikan feedback sentuh visual langsung (*active state*, ripple effect, atau opacity reduction 0.7).
2. **Penanganan Kondisi Jaringan**:
   - Sediakan indikator visual banner status offline dan tombol coba lagi (*retry*).
3. **Optimasi Daftar Panjang (Virtualized Lists)**:
   - Jika aplikasi asli merender ratusan item (chat feed, katalog barang), rekonstruksi harus menggunakan pola virtual scrolling (*FlatList* atau virtual list) untuk mencegah lag memori.
