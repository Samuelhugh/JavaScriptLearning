// Javascript literal object
var pizza = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses: ["mozzarella"],
    toppings: ["pepperoni","sausage"],
}

// Javascript function object
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
// Four different pizzas
var x = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni","sausage"]);
var y = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var s = pizzaOven("original", "marinara", ["swiss", "extra cheese"], "pepperoni");
var r = pizzaOven("thin crust", "buffalo ranch", "american", "grilled chicken");
console.log(x,y,s,r);
