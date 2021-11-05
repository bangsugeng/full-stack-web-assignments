const person = {
    name: "person A",
    age: 100,
    favDrinks: [
        "coffee",
        "jamu temulawak",
        "tea"
    ],
    greeting: function (name) {
        return "Hello, " + name;
    }
}

/// EDIT HERE
// ubah field name pada variable person menjadi namamu sendiri
person.name = "Masdoni";

// ubah field favDrinks yang berisi "temulawak" menjadi "tap water"
person.favDrinks[1] = "tap water"

// ubah field greeting menjadi sebuah fungsi, dengan spesifikasi
// memiliki 1 parameter
// name [String] => nama seseorang yang akan disapa
// return value [String] => akan mengembalikan sebuah String dengan format "Hello, $NAME"
person.greeting = (name) => {
    if(typeof name !== 'string' || name.trim().length === 0) {
      return 'Please check your input again'
    } else {
      return `Hello, ${name.trim()}`
    }
  }

/// STOP
if(soal1){
    console.log(person.name);
    console.log(person.age);
    console.log(person.favDrinks);
    console.log(person.greeting("John Watson"));
}