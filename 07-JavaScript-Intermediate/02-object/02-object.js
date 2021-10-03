// turn on/off debugging
let soal1 = true,
    soal2 = true,
    soal3 = true;
//  soal 01
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
person.name = "Zulfiqar";
for(let i=0; i < person.favDrinks.length; i++){
    if(person.favDrinks[i].search("temulawak") >= 0){
        person.favDrinks[i] = "tap water";
    }
}

/// STOP
if(soal1){
    console.log(person.name);
    console.log(person.age);
    console.log(person.favDrinks);
    console.log(person.greeting("John Watson"));
}

// soal 02
function getObjectValue(obj, path) {
    path = path.split(".");
    let curr = obj;

    for (let i = 0; i < path.length; i++) {
        const activeObj = curr[path[i]];
        curr = activeObj;
    }
    
    if(curr === undefined){
        return null;
    }
    
    return curr;
}


const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

if(soal2){
    console.log(espresso);
    console.log(coffeeBrand);
    console.log(isMilkVegan);
}

//soal 3
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
    },
    {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
    },
    {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
    },
];

const calculateIncome = (items) => {
    return items.reduce((tmp, curr) => {
        const btcSum = curr.btc.sell - curr.btc.buy;
        const dogeSum = curr.doge.sell - curr.doge.buy;
        const ethSum = curr.eth.sell - curr.eth.buy;
        return {
            btc: tmp.btc + btcSum,
            doge: tmp.doge + dogeSum,
            eth: tmp.eth + ethSum,
        };
    }, {
        btc: 0,
        doge: 0,
        eth: 0
    });
}

if(soal3){
    console.log(calculateIncome(items));
}