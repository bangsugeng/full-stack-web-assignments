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