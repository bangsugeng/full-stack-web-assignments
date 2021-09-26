/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let index = 2; index <= 100; index++) {
    let isPrime = true;

    for (let i = 2; i < index; i++) {
        if (index % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(index + " ");
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let index = 2;

while (primeCounter < 50) {
    let isPrime = true;
    
    for (let i = 2; i < index; i++) {
        if (index % i == 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        fiftiethPrime = index;
        primeCounter++;
    }

    index++;
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
index = 0;
do {
    if(index % 2 != 0){
        fiftiethOdd = index;
        oddCounter++;
    }
    index++;
} while (oddCounter < 50);

console.log("fiftiethOdd is " + fiftiethOdd);