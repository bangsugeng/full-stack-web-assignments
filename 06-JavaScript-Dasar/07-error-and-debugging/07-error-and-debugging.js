/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
    - Type Error: Merepresentasikan error saat operasi tidak dapat dilakukan yang biasanya karna value tidka seperti yang diexpect oleh type.
    - Reference Error : Merepresentasikan error saat tidak adanya variabel yang tersedia dipanggil.
    - RangeError : error saat value tidak diset atau range valuenya tidak diperbolehkan.
    - Syntax Error :  error saat mencoba untuk memanggil fungsi/method yang tidak tersedia oleh sebuah bahasa.
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/*
    - Terjadi error
    - ReferenceError pada baris console.log(salaryWithConst)
    - Hal ini terjadi karena program mengakses variabel yang belum diinisialisasi
*/

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
