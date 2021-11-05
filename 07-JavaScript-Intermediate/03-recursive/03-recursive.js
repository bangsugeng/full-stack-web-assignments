const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, num) {
    if (arr[arr.length - 1] === num) {
        return "angka ditemukan pada index: "+(arr.length - 1);
    }
    if (arr.length === 1) {
        return "angka tidak ditemukan";
    }
    return searchInArray(arr.slice(0, -1), num);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));