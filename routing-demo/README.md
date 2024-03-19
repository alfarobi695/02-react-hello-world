Nama : Muhamad Al Faroby

Kelas: TI-4J

NIM  : 2341727001

## Praktikum 1: Membuat routing sederhana 

1. Persiapkan project dengan memanfaatkan template repository yang telah dipersiapkan di alamat https://github.com/dhanifudin/routing-demo dan gunakan tombol Use this template kemudian pilih Create a new repository.
    ![1](/routing-demo/images/Screenshot_520.png)

2. Clone project ke lokal laptop anda dan lakukan instalasi dependencies dengan menjalankan perintah berikut. `npm install`
    ![1](/routing-demo/images/Screenshot_499.png)<br>
    ![1](/routing-demo/images/Screenshot_521.png)<br>

3. Silahkan buka project tersebut dengan menggunakan VSCode dan perhatikan file yang ada dalam folder app.<br>
    ![1](/routing-demo/images/Screenshot_500.png)<br>

4. Routing di ReactJS dengan NextJS memanfaatkan organisasi penamaan folder dan file pada folder app. Silahkan tambahkan file page.tsx di dalam folder app, dan buatlah komponen dengan kode berikut.<br>
    ![1](/routing-demo/images/Screenshot_522.png)<br>

5. Jalankan project dengan menggunakan perintah npm run dev di terminal VSCode. Dan silahkan buka browser pada alamat url http://localhost:3000<br>
    ![1](/routing-demo/images/Screenshot_523.png)<br>

6. Perhatikan pada project di VSCode, akan terdapat sebuah file yang akan digenerate yaitu layout.tsx. File ini akan secara otomatis digenerate jika tidak ditemukan. Perhatikan susunan kode yang ada didalamnya. Anda akan menemukan susunan html yang di dalamnya terdapat props children. Props children akan di-replace oleh komponen sesuai dengan routing. <br>
    ![1](/routing-demo/images/Screenshot_524.png)<br>

7. Untuk membuat halaman routing /about dengan NextJS, silahkan buat folder /about dalam /app dan buat file dengan nama page.tsx. Kemudian buat function komponen seperti pada kode berikut.<br>
    ![1](/routing-demo/images/Screenshot_525.png)<br>
    ![1](/routing-demo/images/Screenshot_526.png)<br>

## Praktikum 2: Membuat routing bersarang (Nested Routing)
1. Dengan menggunakan konsep yang sama pada Praktikum 1, silahkan tambahkan susunan folder /blogs/first dan /blogs/second. Kemudian tambahkan masing-masing untuk setiap folder dengan file page.tsx.<br>
    ![1](/routing-demo/images/Screenshot_527.png)<br>

2. Pada file /blogs/page.tsx buatlah function component seperti kode berikut atau anda dapat mengkreasikan tampilan dengan selera anda!<br>
    ![1](/routing-demo/images/Screenshot_528.png)<br>

3. Pada file /blogs/first/page.tsx buatlah function component seperti berikut: <br>
    ![1](/routing-demo/images/Screenshot_531.png)<br>

4. Cobalah akses halaman /blogs dan /blogs/first pada browser anda.<br>
    ![1](/routing-demo/images/Screenshot_529.png)<br>
    ![1](/routing-demo/images/Screenshot_530.png)<br>

### Todo: Lengkapi function component pada /blogs/second/page.tsx
![1](/routing-demo/images/Screenshot_532.png)<br>

### Pertanyaan: Apa kekurangan yang mungkin terjadi jika menggunakan pendekatan pada Praktikum 2 untuk menangani routing?
### Struktur bersarang adalah cara bagaimana bagian-bagian sistem disusun di dalam bagian-bagian lainnya. Ini bisa memengaruhi seberapa efisien sistem bekerja, terutama jika ada banyak rute atau jalur yang harus diambil oleh sistem tersebut. Misalnya, jika ada terlalu banyak lapisan struktur bersarang, mungkin akan memperlambat proses atau membuatnya lebih kompleks. 


## Praktikum 3: Membuat routing dinamis (Dynamic Routing)
1. Buatlah file /products/page.tsx yang berisi function component untuk menampilkan list dari products seperti kode berikut.<br>
    ![1](/routing-demo/images/Screenshot_533.png)<br>

2. Untuk mendefinisikan url path di NextJs menggunakan konvensi penamaan direktori dengan mengapit nama path dengan simbol [ ]. Sebagai contoh: [productId] menandakan bahwa path dinamis menggunakan variabel productId (Catatan: Anda boleh menuliskan hanya dengan [id], tetapi untuk mempermudah pembacaan konteks sebaiknya jangan gunakan hanya id).<br>
    ![1](/routing-demo/images/Screenshot_534.png)<br>

3. Kemudian buatlah file page.tsx pada lokasi /app/products/[productId] dan tambahkan kode sebagai berikut.<br>
    ![1](/routing-demo/images/Screenshot_535.png)<br>

4. Untuk mendapatkan nilai path, anda dapat menggunakan pemanggilan params.productId. Pemanggilan atribut params, disesuaikan dengan pendefinisian nama path.

5. Cobalah akses halaman /products dan /products/1 pada browser anda. Ubah nilai productId dengan nilai lainnya. <br>
    ![1](/routing-demo/images/Screenshot_487.png)<br>
    ![1](/routing-demo/images/Screenshot_488.png)<br>

### Todo 1: Perbaiki implementasi Praktikum 2 menggunakan Dynamic Routes
![1](/routing-demo/images/Screenshot_491.png)<br>
![1](/routing-demo/images/Screenshot_493.png)<br>

### Todo 2: Dengan menggunakan konsep Nested Routes dan Dynamic Routes, buatlah halaman dengan routing /products/[productId]/reviews/[reviewId]
![1](/routing-demo/images/Screenshot_494.png)<br>
![1](/routing-demo/images/Screenshot_495.png)<br>

## Praktikum 4: Navigasi dengan Link Component
1. Pada file /app/page.tsx tambahkan import Link komponen seperti kode berikut.<br>
    ![1](/routing-demo/images/Screenshot_496.png)<br>

2. Tambahkan penggunaan Link komponen untuk mengakses halaman /profile dan /about <br>
    ![1](/routing-demo/images/Screenshot_537.png)<br>

3. Coba buka browser anda dan cobalah untuk bernavigasi menggunakan Link komponen. <br>
    ![1](/routing-demo/images/Screenshot_538.png)<br>

### Todo: Tambahkan link yang sebelumnya anda telah kerjakan!
![1](/routing-demo/images/Screenshot_496.png)<br>
![1](/routing-demo/images/Screenshot_497.png)<br>









