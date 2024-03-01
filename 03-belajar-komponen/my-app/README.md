Nama : Muhamad Al Faroby

Kelas: TI-4J

NIM  : 2341727001

## Soal 1 

Ubah isi kode Home() sehingga dapat tampil seperti berikut dengan memanfaatkan komponen Profile() yang tadi sudah dibuat dari langkah 1 tersebut!

### Penjelasan
Saya belajar untuk menggunakan Tailwind (seperti pada screenshhot profile.tsx) sehingga resultnya sesaui dengan yang tertera pada soal. Untuk menngani eror yang terjadi harus menambahkan file next.config.js (seperti pada screenshoot next.config.js) pada folder root sehingga projek mengenali domain i.imgur.com

### result 
![result](/03-belajar-komponen/my-app/img/Screenshot%20(1158).png)

### profile.tsx
![profile](/03-belajar-komponen/my-app/img/Screenshot_398.png)

### page.tsx
![page](/03-belajar-komponen/my-app/img/Screenshot_397.png)

### next.config.js
![next.config.js](/03-belajar-komponen/my-app/img/Screenshot_399.png)

## Soal 2
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

### Penejelasan
Saya belajar penggunaan "impor" dan "ekspor" yang merupakan cara yang digunakan untuk mengelola berkas-berkas komponen yang terpisah dalam pengembangan projek. Praktik tersebut memecah kode menjadi bagian-bagian yang terpisah agar lebih mudah dikelola.

### result
![result](/03-belajar-komponen/my-app/img/Screenshot_400.png)

### profile.tsx
![profile](/03-belajar-komponen/my-app/img/Screenshot_402.png)

### gallery.tsx
![gallery](/03-belajar-komponen/my-app/img/Screenshot_403.png)

### page.tsx
![page](/03-belajar-komponen/my-app/img/Screenshot_401.png)

## Soal 3
Silakan perbaiki kode JSX berikut ini. Anda boleh menggunakan konverter atau perbaiki secara manual.
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan mengapa error itu bisa terjadi?

### Penjelasan
Saya mempelajari tentang penggunaan Tailwind dan tag HTML. Eror terjadi karena pada Tailwind tidak mengenal tag class sehingga harus dirubah ke className dan menggunaan tag < /i > harus lebih dulu ketimbang < /b >

### result
![result](/03-belajar-komponen/my-app/img/Screenshot_405.png)

### jsx.jsx
![jsx](/03-belajar-komponen/my-app/img/Screenshot_406.png)

### page.tsx
![page](/03-belajar-komponen/my-app/img/Screenshot_407.png)

## Soal 4
Kode di atas masih terdapat error, silakan diperbaiki.

### Penjelasan
Eror terjadi karena < h1 >{person}'s Todos< /h1 > harus dirubah ke < h1 >{person.name}'s Todos< /h1 >


### Result
![result](/03-belajar-komponen/my-app/img/Screenshot_408.png)

### todolist.tsx
![todolist](/03-belajar-komponen/my-app/img/Screenshot_409.png)

### page.tsx
![page](/03-belajar-komponen/my-app/img/Screenshot_410.png)

## Soal 5
Buka file src/components/todolist.tsx lakukan ekstrak URL gambar ke dalam objek person. Capture hasilnya dan buatlah laporan di README.md. Apakah ada perbedaan pada tampilan web saat ini?

### Penjelasan
Ada perbedaan pada tampilan web saat ini sehingga tampilan berbeda dengan result nomer 4. Hal tersebut dapat terjadi karena penambahan import komponen galery pada page.tsx. Dan pada file todolist.tsx, URL gambar diimpor ke komponen lain sehingga manfaat nya dapat digunakan berulang-ulang dengan hasil yang sama

### Result
![result](/03-belajar-komponen/my-app/img/Screenshot_412.png)

### todolist.tsx
![todolist](/03-belajar-komponen/my-app/img/Screenshot_411.png)

### page.tsx
![page](/03-belajar-komponen/my-app/img/Screenshot_413.png)

## Soal 6
Perbaiki kode tersebut pada bagian atribut src. Kode lainnya dapat Anda sesuaikan dari jawaban soal sebelumnya. Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

### Penjelasan
Saya mempelajari cara menggabungkan antar string yang merupakan hasil opean dari variable antar komponen menggunakan $. Hasil yang tampil sama dengan hasil pada result saol nomer 5

### Result
![result](/03-belajar-komponen/my-app/img/Screenshot_412.png)

### todolist.tsx
![todolist](/03-belajar-komponen/my-app/img/Screenshot_414.png)

### page.tsx
![page](/03-belajar-komponen/my-app/img/Screenshot_413.png)

## Soal 7
Jika kode di atas terdapat error, silakan diperbaiki. Komponen MyGallery ini berisi dua markup yang sama persis. Ekstraklah menjadi komponen MyProfile untuk mengurangi duplikasi. Anda perlu memilih props apa saja yang akan dikirimkan. Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

### Penjelasan
Saya mempelajari cara penggunaan props, dan  menggunakan impor-ekspor sehingga dapat menimalisir duplikasi kode. Hasil compile kode menampilkan gambar 2 ilmuwan beserta nama, profesi, penghargaan dan penemuannya.

### result
![result](/03-belajar-komponen/my-app/img/Screenshot_415.png)

### mygallery.tsx
![result](/03-belajar-komponen/my-app/img/Screenshot_416.png)

### page.tsx
![page](/03-belajar-komponen/my-app/img/Screenshot_417.png)
