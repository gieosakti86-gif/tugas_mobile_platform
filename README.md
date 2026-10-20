# Diary App

Nama: [Gieo sakti senja gumilang]
NIM: [2430511003]

## Fitur yang selesai
- Daftar entri diary dengan pencarian judul, cerita, dan tanggal.
- `DiaryCard` sebagai presentational component dengan data dan callback dari props.
- `SearchBar` dengan local state dan callback `onChange` ke screen.
- `EntryForm` sebagai controlled form untuk menambahkan entri ke state daftar.
- State `entries`, `query`, `likedIds`, dan `selected` dikelola di `DiaryListScreen`.
- Status suka dapat diubah langsung dari kartu tanpa memuat ulang aplikasi.
- Ilustrasi suasana hati lokal tersedia di `assets/moods`.
- Modal detail untuk membaca isi entri.

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

## Pengujian manual
1. Jalankan aplikasi dan pastikan tiga entri awal tampil.
2. Isi judul dan cerita pada form, pilih suasana hati, lalu tekan **Tambahkan entri**.
3. Ulangi langkah tersebut untuk menambahkan minimal dua entri baru dan pastikan keduanya muncul paling atas.
4. Tekan **Suka** pada sebuah kartu dan pastikan status berubah menjadi **Disukai** tanpa memuat ulang aplikasi.
5. Cari salah satu entri dan buka kartu untuk memastikan pencarian serta modal detail berfungsi.

## Screenshot pengujian
Sebelum penambahan entri:

![Sebelum: daftar dengan entri awal](./screenshots/before-state.png)

Sesudah menambahkan dua entri dan menyukai satu entri:

![Sesudah: dua entri tambahan dan status suka aktif](./screenshots/after-state.png)
