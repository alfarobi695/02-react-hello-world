Nama : Muhamad Al Faroby

Kelas: TI-4J

NIM  : 2341727001

# Pratikum 2 PBF Semester 8

## Soal 1

### TypeScript

    TypeScript adalah sebuah bahasa pemrograman open-source yang dikembangkan oleh Microsoft. Ini menyediakan fitur tipe statis opsional yang meningkatkan keamanan dan keandalan kode JavaScript.

### ESLint

    ESLint adalah alat linting JavaScript yang membantu dalam mengidentifikasi dan memperbaiki pola kode yang buruk atau tidak efisien. Ini membantu dalam menjaga konsistensi kode dan memastikan standar kualitas yang tinggi.

### Tailwind CSS

    Tailwind CSS adalah sebuah kerangka kerja CSS yang memungkinkan pengembang untuk membuat desain web yang responsif dan konsisten dengan cepat. Ini mempromosikan pendekatan utility-first untuk styling, memungkinkan fleksibilitas yang besar dalam desain.

### App Router

    App Router bertanggung jawab atas manajemen navigasi dalam aplikasi web. Ini memungkinkan pengguna untuk berpindah antara berbagai halaman atau bagian dari aplikasi dengan mudah tanpa perlu memuat ulang seluruh situs web.

### Import Alias

    Import Alias memungkinkan memberi nama alias pada direktori atau modul dalam kode JavaScript/TypeScript. Ini membantu dalam pengorganisasian kode dan meningkatkan keterbacaan.

## Soal 2

### Folder

    1. .git 
    Digunakan oleh Git untuk menyimpan semua metadata dan database objek proyek. Ini penting untuk kontrol versi dan manajemen kode sumber.

    2. node_modules
    Berisi berbagai file dan konfigurasi yang mendukung fitur-fitur Next.js, seperti routing pages, built-in CSS support, layout component, image optimization, font optimization, script optimization, static file serving, dan fast refresh.

    3. Public
    Folder ini berisi file-file statis yang akan diakses secara langsung oleh pengguna. Misalnya, file HTML utama (index.html) berada di sini bersama dengan file gambar, favicon, atau font yang akan digunakan dalam aplikasi. Ini adalah tempat yang tepat untuk meletakkan aset yang tidak akan dimanipulasi oleh React atau Webpack.

    4. src
    Merupakan folder yang berisi kode sumber dari aplikasi React. Kode JavaScript atau TypeScript, komponen React, file CSS, atau file lain yang dibutuhkan untuk membangun aplikasi berada di sini. Ini adalah tempat utama di mana Anda akan menghabiskan sebagian besar waktu Anda dalam pengembangan aplikasi.

### File

    1. .eslintrc.json
    File konfigurasi untuk ESLint, alat yang mengidentifikasi dan melaporkan pola yang ditemukan dalam kode ECMAScript/JavaScript untuk menjadikannya lebih konsisten dan menghindari bug.

    2. .gitignore
    Daftar file dan direktori yang diabaikan saat mengunggah ke repositori Git.

    3. next.config.mjs & next-env.d.ts
    File konfigurasi terkait kerangka kerja Next.js yang digunakan untuk merender aplikasi React secara server-side.

    4. package.json & package-lock.json
    Berisi metadata tentang proyek seperti dependensi. File lock memastikan setiap instalasi menghasilkan versi dependensi yang sama di semua mesin.

    5. postcss.config.js
    File konfigurasi untuk PostCSS, alat untuk mengubah CSS dengan plugin JavaScript seperti autoprefixer atau cssnext.
    
    6. README.md
    File markdown berisi informasi tentang proyek seperti petunjuk instalasi atau dokumentasi.

    7. tailwind.config.ts
    File konfigurasi untuk kerangka kerja Tailwind CSS yang memungkinkan pengembang membangun situs web modern dengan struktur kelas CSS berbasis utilitas.
    
    8. tsconfig.json
    Opsi konfigurasi untuk proyek TypeScript.

## Soal 3

![CMD](/public/1%20(2).png)

Penejalasan : pada project next.js ketika telah berhasil mengganti teks , tidak perlu menjalankan perintah npm run dev dan tidak juga diperlukan me-reload halaman di browser karena adanya fitur yang disebut dengan "Hot Module Replacement" (HMR) dalam lingkungan pengembangan Next.js. HMR memungkinkan perubahan kode yang dibuat pada aplikasi Next.js untuk langsung tercermin di browser tanpa perlu melakukan reload halaman secara manual. Perintah npm run dev memungkinkan HMR aktif secara default.

# Tugas Pratikum 2 PBF Semester 8

## Next.js
create project
![CMD](/public/Screenshot_383.png)
run project
![CMD](/public/Screenshot_384.png)
result
![CMD](/public/1%20(2).png)

## Remix
create project
![CMD](/public/Screenshot_385.png)
run project
![CMD](/public/Screenshot_386.png)
result
![CMD](/public/Screenshot_387.png)

## Gatsby
create project
![CMD](/public/Screenshot_388.png)
run project
![CMD](/public/Screenshot_389.png)
result
![CMD](/public/Screenshot_390.png)

## Perbedaannya diantara ketiga framework

1. **Next.js** : framework React yang memungkinkan untuk membuat aplikasi web dengan mudah, termasuk fitur-fitur seperti Server-side Rendering (SSR) dan Static Site Generation (SSG), serta kemampuan routing dinamis. Cocok untuk aplikasi yang membutuhkan performa tinggi dan fleksibilitas dalam penanganan rute.

2. **Remix** : framework yang kuat untuk membangun aplikasi web dengan fokus pada manajemen data yang canggih, rerendering otomatis untuk meningkatkan performa, serta kemampuan mutasi langsung di sisi server. Cocok untuk aplikasi dengan logika data yang kompleks dan penanganan form yang kuat.

3. **Gatsby** : Static Site Generator yang memungkinkan pembangunan situs web statis dengan cepat dan efisien. Dengan menggunakan GraphQL untuk mengelola data, serta sistem plugin yang kuat untuk menambahkan fungsionalitas tambahan, Gatsby cocok untuk pembangunan situs web dengan performa tinggi dan SEO yang optimal.