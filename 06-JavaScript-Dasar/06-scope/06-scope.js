/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*
ada 2 scope
    - Local Scope
        - Block scope
            variabel yang dideklarasikan diadalm { } dan tidak bisa diakses diluar bloknya sendiri
        - Function scope
            variabel yang dideklarasikan didalam sebuah function dan tidak bisa diakses diluar function itu sendiri

    - Global scope
        variabel yang dideklarasikan secara global dan bisa dipanggil di blok/fungsi manapun
*/

//Local Scope (block scope)
if(1){ 
    let city = "Bikini Bottom";
}

//local Scope (function scope)
function myFunction() {
    var city = "Bikini Bottom";
}

// global
let city = "Bikini Bottom";


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
/*
- yang tampil dalam console.log adalah Mariah
- alasannya adalah karena variabel global lebih diprioritaskan
*/

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
