# Diary App

Nama: [Gieo sakti senja gumilang]
NIM: [2430511003]

## Fitur yang selesai
Fitur & Poin Utama yang Diselesaikan

- Design Tokens & StyleSheet Terpusat: Penggunaan token konsisten untuk warna (COLORS), jarak (SPACE), sudut lengkung (RADIUS), tipografi (TYPO), dan breakpoint - layar (BREAKPOINTS) di src/styles/tokens.js.
- Reusable Component (DiaryCard): Kartu entri dinamis dengan interaksi sentuh (Pressable), efek ripple/opacity, dan label aksesibilitas (accessibilityLabel).
- Responsive Layout (1 & 2 Kolom): Memanfaatkan hook useWindowDimensions() untuk mendeteksi lebar layar, secara otomatis beralih dari tampilan 1 kolom (ponsel) ke 2 kolom (tablet atau layar dengan width >= 600px).
- Efficient List Rendering (FlatList): Menampilkan daftar entri secara efisien dengan penyesuaian jumlah kolom dan dukungan stable key re-rendering.
- Interactive Detail Modal (DiaryDetailModal): Menampilkan rincian lengkap entri diary termasuk hero image proporsional (aspectRatio: 16/9) dan tombol tutup tanpa berpindah screen.
- Aksesibilitas Dasar: Memastikan target sentuh yang layak, kontras teks yang konsisten, dan penggunaan SafeAreaView dari react-native-safe-area-context.

## Cara menjalankan
1. Masuk ke folder proyek:
   ```bash
   cd diary-app
   ```
2. Jalankan server Expo:
   ```bash
   npx expo start
   ```
3. Buka aplikasi melalui Expo Go atau emulator Android.

## Catatan
Proyek ini dibuat menggunakan Expo CLI modern dengan pola `npx` sesuai modul praktikum.
