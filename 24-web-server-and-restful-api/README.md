1. Apa perbedaan antara static web server dan dynamic web server? <br>
    *  Static web server merupakan web server yang tidak memiliki perubahan data, datanya hanya sekedar request dari client dan apa yang diresponse server, sudah begitu saja tidak ada processing data di web servernya, hanya sekedar menampilkan data saja, method yang ada pada static web server juga hanya method get saja.
    * Dynamic web server merupakan web server yang datanya dapat berubah-ubah sesuai dengan request dari pengguna dan data yang ditampilkan juga akan menyesuaikan dengan kondisi tertentu. Pada dynamic web server dapat dilakukan crud yang artinya terdapat pemrosesan data pada web server ini.

<br>

2. Jelaskan arsitektur static site dan dynamic site <br>
    * Arsitektur dari static site adalah browser akan melakukan request ke web server, di dalam web server tersebut terdapat file html, css, javascript dan file pendukung lainnya, kemudian server akan mengirimkan response file tersebut ke browser.
    * Arsitektur dari dynamic site adalah seperti berikut ini client melakukan request ke web server dengan request methodnya yang kemudian masuk ke web server dan diarahkan ke web application, di dalam web application akan ada processing data sesuai dengan methodnya untuk dikomunikasikan ke database, kalau get maka akan dilakukan pengambilan data dari database, data yang sudah didapatkan tersebut akan disematkan di dalam html kemudian diberikan ke web server bersama dengan static resource yang ada, baru akhirnya diberikan response ke client dan tampil di browsernya.

<br>

3. Apa saja yang dapat kita buat pada sisi server? <br>
    * Penyimpanan dan pengirimian informasi yang efisien
    * User experience yang disesuaikan dengan menggunakan informasi pengguna yang disimpan pada server sehingga dapat memberikan user experience yang nyaman dan sesuai dengan pengguna
    * Pengontrolan akses terhadap konten yang disediakan, akses terhadap konten dibatasi hanya untuk pengguna yang berwenang dan diizinkan
    * Penyimpanan informasi session/state

<br>

4. Mohon jelaskan apa itu RESTful? <br>
    Restful merupakan sebuah arsitektur yang menyediakan standar komunikasi antar sistem computer di web dan menggunakan protokol HTTP untuk komunikasinya, restful memungkinkan implementasi client dan server dibuat secara independen atau terpisah. RESTful mengidentifikasi setiap resource yang ada dengan menggunakan URI dan direpresentasikan dalam bentuk format teks, JSON atau XML. Setiap kali client request harus menyertakan semua data dan parameter dengan lengkap ketika mengakses suatu endpoint.

<br>

5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing) <br>
    * GET, mengambil resource dari server sesuai dengan request yang diberikan
    * POST, menambahkan entitas baru pada resource yang ditentukan
    * PUT, memperbarui atau mengganti suatu entitas dari target resource
    * DELETE, menghapus resource yang ditentukan

<br>

6. Apa fungsi dari Response Codes? <br>
    Response codes berfungsi untuk menunjukkan pada client informasi apakah operasi dari request yang diberikan berhasil diproses atau tidak