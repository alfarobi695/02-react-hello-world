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





