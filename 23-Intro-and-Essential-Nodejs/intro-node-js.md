1. Apa itu Node.js dan perbedaannya dengan Javascript <br>
    Node.js merupakan runtime environment javascript yang digunakan di sisi server (back-end) sehingga javascript dapat dieksekusi di luar browser seperti di terminal kita sendiri.

    Perbedaan antara node.js dengan javascript adalah javascript merupakan scripting language yang biasanya digunakan untuk client-side acivity sedangkan node js merupakan runtime environment untuk javascript sehingga javascript dapat dijalankan pada server-side.

<br>

2. Arsitektur dari Node.js <br>
    Node.js menggunakan arsitektur Single Threaded Event Loop untuk menangani beberapa request secara bersamaan. Model pemrosesan Node.js berdasarkan pada javascript event-based model bersama dengan mekanisme callback javascript.
    Node.js arsitektur terdiri dari request, server, event queue, thread pool, event loop dan external resource. Ketika client memberikan request pada server, node js mengambil request tersebut dan menambahkannya ke event queue yang kemudian diteruskan satu per satu melalui event loop. Jika requestnya sederhana maka akan diproses oleh event loop dan dikembalikan responsenya namun jika cukup kompleks dan membutuhkan resource eksternal maka akan diberikan thread pool yang berjalan di background untuk eksekusi proses tersebut, ketika selesai maka akan diberikan response ke event loop yang kemudian diteruskan kembali ke pengguna.

<br>

3. Perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js <br>
    Built-in module adalah module bawaan dari node.js, module yang sudah include ketika kita menginstal node.js. External module merupakan module dari 3rd party yang harus kita install terlebih dahulu agar bisa digunakan pada node.js, external module ini dapat diinstal spesifik pada project tertentu atau secara global. Custom module merupakan module yang kita definisikan sendiri misalnya untuk satu project tertentu.

<br>

4. Salah satu contoh Built-in Module, External Module, dan Custom Module pada Node.js
    * Contoh built-in module seperti: process, events, errors, url

    * Contoh external module seperti: nodemon, express, mysql, sequelize
    
    * Contoh custom module seperti:
      kita membuat suatu file javascript yang berisi fungsionalitas tertentu misalkan seperti di bawah ini sebuah simple logging module yang memberikan log informasi, warning atau eror pada program, kemudian module tersebut diexport
      ```js
        const log = {
            info: function (info) { 
                console.log('Info: ' + info);
            },
            warning:function (warning) { 
                console.log('Warning: ' + warning);
            },
            error:function (error) { 
                console.log('Error: ' + error);
            }
        };

        module.exports = log
      ```