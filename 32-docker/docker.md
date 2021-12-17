1. Jelaskan apa yang dimaksud dengan **container** pada docker ! <br>
**contaienr** merupakan unit standar aplikasi yang di dalamnya sudah terdapat package code dan semua dependensinya sehingga aplikasi dapat berjalan dengan cepat dan handal di lingkungan komputer yang berbeda. Container membuat abstraksi pada layer aplikasi sehingga aplikasi yang dijalankan terisolasi antar satu sama lain

<br>

2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** ! <br>
Container memberikan abstraksi pada bagian aplikasi saja dan berjalan pada satu os dasar yang sama sedangkan virtual machine mengabstraksi bagian physical hardware, jadi setiap vm akan menyertakan salinan lengkap sistem operasi, aplikasi, binari, dan library yang diperlukan sedangkan container hanya akan menyertakan aplikasi beserta library yang diperlukan saja.

<br>

3. Apa yang dimaksud dengan **docker file** ? <br>
**docker file** merupakan sebuah file yang berisi konfigurasi (command-command yang dijalankan pada terminal) untuk membuat sebuah image

<br>

4. Apa yang dimaksud dengan **docker registery** ? <br>
docker registery merupakan tempat untuk hosting atau menyimpan image yang kita miliki sehingga dapat diakses oleh banyak orang, seperti halnya github

<br>

5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung ! <br>
Dengan cara membuat setup di satu file docker-compose.yml yang nantinya akan mengelompokkan container yang berbeda menjadi satu container sehingga dapat terhubung dan dijalankan secara bersamaan