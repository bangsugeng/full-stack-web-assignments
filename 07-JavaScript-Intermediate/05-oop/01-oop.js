// soal 01
// TULIS ANALISA ANDA DIBAWAH

// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// fun1 mereturn object
// fun2 tidak mereturn apapun
/* output : 
    fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
    fun2 {}
*/

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// berbeda

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// karena this pada arrow function mengambil dari konteks mereka dibuat, dalam kasus ini kosong
const obj = {
    fun1: function() {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();