Nama : Muhamad Al Faroby

Kelas: TI-4J

NIM  : 2341727001

## Praktikum 1 - EVent Hadler 

### Langkah 1

`src/component/button.tsx` <br>
![1](/04-event-state/img/Screenshot_424.png)


`src/app/page.tsx` <br>
![2](/04-event-state/img/Screenshot_425.png)


`Result` <br>
![3](/04-event-state/img/Screenshot_426.png)


### Langkah 2

`src/components/button.tsx` <br>
![4](/04-event-state/img/Screenshot_427.png)

Muncul eror dengan solusi menambahkan "use client".

`Issue result` <br>
![5](/04-event-state/img/Screenshot_428.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_429.png)

`Fix result` <br>
![6](/04-event-state/img/Screenshot_430.png)

`src/components/button.tsx` <br>
![6](/04-event-state/img/Screenshot_431.png)

`Result`
![6](/04-event-state/img/Screenshot_432.png)

## Praktikum 2

`src/components/button.tsx` <br>
![6](/04-event-state/img/Screenshot_433.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_434.png)

## Praktikum 3

### Langkah 1

`src/components/button.tsx` <br>
![6](/04-event-state/img/Screenshot_438.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_439.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_440.png)

### Langkah 2

`src/components/button.tsx` <br>
![6](/04-event-state/img/Screenshot_435.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_439.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_440.png)

## Praktikum 4

`src/data/article.tsx` <br>
![6](/04-event-state/img/Screenshot_441.png)

`src/component/gallery.tsx` <br>
![6](/04-event-state/img/Screenshot_442.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_443.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_444.png)

## Soal
1. Jika kita menekan tombol "Artikel Selanjutnya" sebanyak 5x (atau melebihi halaman total artikel), apa yang akan terjadi?
2. Modifikasilah gallery.tsx agar bisa meng-handle permasalahan tersebut.
3. Tambahkan tombol "Artikel Sebelumnya", untuk menampilkan artikel secara mundur.

### Jawaban
1. Akan terjadi eror karena hanya ada 5 data yang berada pada file article.jsx hanya
2. Berikut kode yang di modifikasi <br>
![6](/04-event-state/img/Screenshot_445.png)
3.  Berikut hasil kode yang telah dimodifikasi <br>
![6](/04-event-state/img/Screenshot_446.png)

## Praktikum 5

### Langkah 1

`src/components/form.tsx` <br>
![6](/04-event-state/img/Screenshot_447.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_448.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_449.png)

`Penjelasan`
Kode di tersebut adalah sebuah komponen Form dalam React yang memungkinkan pengguna untuk menebak nama hewan yang ditakuti oleh Doraemon. Komponen ini menggunakan `useState` untuk mengelola state dari variabel Jawaban, error, dan status. Ketika pengguna mengirimkan tebakan, fungsi `handleSubmit` akan dipanggil, dan jika tebakan benar, akan ditampilkan pesan "Yay...Jawaban Benar!". Jika terjadi kesalahan, pesan kesalahan akan ditampilkan di bawah form. Fungsi `submitForm` digunakan untuk menangani pengiriman tebakan dan memberikan respons setelah jeda 500 milidetik.

### Langkah 2

`src/components/form.tsx` <br>
![6](/04-event-state/img/Screenshot_453.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_451.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_452.png)

state fullName digantikan variable biasa

`src/components/form.tsx` <br>
![6](/04-event-state/img/Screenshot_450.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_452.png)

`Penjelasan`
Setelah kode di compile memiliki hasil yang sama

## Soal

1. Apa perbedaan dari fungsi Form_2 yang pertama dengan yang kedua?
2. Kenapa perlu menghapus state fullName? Apa keuntungannya?

### Jawaban

1. Perbedaan nya antara lain

- Cara Penanganan State:
    - Kode pertama menggunakan tiga state terpisah untuk `firstName`, `lastName`, dan `fullName`.
    - Kode kedua hanya menggunakan state untuk `firstName` dan `lastName`, sementara `fullName` dihitung langsung di dalam komponen.

- Perhitungan Nama Lengkap (`fullName`):
   - Kode pertama menghitung `fullName` setelah mengubah state `firstName` atau `lastName` di dalam fungsi khusus.
   - Kode kedua menghitung `fullName` langsung di dalam JSX, tanpa perlu fungsi tambahan.

2. keuntungannya adalah kemampuan Perubahan `fullName`:
- Kode pertama mungkin memiliki masalah dengan pembaruan nilai yang tertinggal karena cara React mengelola pembaruan state secara asinkron.
- Kode kedua lebih langsung, sehingga `fullName` selalu mencerminkan nilai terbaru dari `firstName` dan `lastName`.
