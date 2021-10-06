// 01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// 02
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(arr, avg) {
    if (arr.length === 0) {
        return 0;
    }
    let temp = 0;
    if (arr[0] >= avg) {
        temp = 1;
    }
    return temp + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// 03
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, val) {
    if (arr[arr.length - 1] === val) {
        return "angka ditemukan pada index: "+(arr.length - 1);
    }
    if (arr.length === 1) {
        return "angka tidak ditemukan";
    }
    return searchInArray(arr.slice(0, -1), val);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

// 04
function trianglePattern(x, y) {
    if (x === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < y; i++) {
        if (i < x - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (y - x + (i - x) + 2));
        }
    }
    console.log(space);
    trianglePattern(x - 1, y);
}

trianglePattern(5, 5);