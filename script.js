'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelievery: function({time = "20:00", mainIndex = 0, starterIndex = 0, address}){
    console.log(time, this.mainMenu[mainIndex], this.starterMenu[starterIndex], address);
  },
  orderPasta: function(ingri1, ingri2, ingri3){
    console.log(`Here is your delicious pasta with ${ingri1}, ${ingri2}, ${ingri3}`);
  },
  orderPizza: function(mainIngridient, ...otherIngridient){
    console.log(mainIngridient, otherIngridient);
  }
};

restaurant.orderDelievery({
  time: "22:30",
  address: "Via del Sole 21",
  mainIndex: 2,
  starterIndex: 2
});
restaurant.orderDelievery({
  starterIndex: 2, 
  address: "via del sole 21"
});

const arr = [2, 3, 4];
const a = arr[0]; 
const b = arr[1]; 
const c = arr[2]; 

const [x, y, z] = arr;
console.log(x, y, z);

let [first, ,second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [1, 2, [3, 4]];
const [i, ,[j, k]] = nested;
console.log(i, j, k);

const [p=1,q=1,r=1,s=1] = [1,2,1];
console.log(p,q,r,s);

let { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

let {
  menu = [],
  starterMenu: starters = []
} = restaurant;
console.log(menu, starters);

let a1 = 10;
let b1 = 12;
const obj = {a1: 27 , b1: 23, c1: 12};
({a1, b1} = obj);
console.log(a1,b1);

const {fri: {open: o, close: c2}} = restaurant.openingHours;
console.log(o, c2);

// spread operator:
// to expand the array element at once.
// it is used into the right side of the equal sign
// to expand and pass multiple arguments in function

const arr1 = [7,8,9];
const badNewarr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewarr);

const newArr = [1, 2, ...arr1];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const mneu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mneu);

const str = "jonas";
const letters = [...str];
console.log(letters);
console.log(...str);
// console.log(`${...str} Doe`);

// const ingridients = [prompt("first ingridients"),prompt("second ingridients"),prompt("third ingridients")];
// restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
// restaurant.orderPasta(...ingridients);


const newRestaurant = {foundIn: 1998, ...restaurant, founder: "Jonas"};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Sayaji";
console.log(restaurantCopy.name);
console.log(restaurant.name);


// rest operator:
// to pack the element in one array.
// it is used into the left side of the equal sign
// it is used in left side in distruction operation.
// must only one rest element   

const [a11, b12, ...others] = [1, 2, 3, 4, 5];
console.log(a11, b12, others);

const [pizza, ,rissoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, rissoto, otherFood);

const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

const add = function(...numbers){
let sum = 0;
  for(let i=0; i<numbers.length; i++){
      sum += numbers[i];
  }
  console.log(sum);
}
add(2,3);
add(2,3,5,7);
add(2,3,5,7,9,1,11);

const x1 = [1,2,3,4,5,6,7];
add(...x1);


restaurant.orderPizza("Panner", "chesse", "onion", "olives", "spinach");
restaurant.orderPizza("panner");

// ==========OR======
// use any Data-types, return any Data-types, short-circuiting
// true values are returned if its first one
console.log(3 || "jonas");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(false || "jonas");
console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
const guest2 = restaurant.numGuests || 10;
console.log(guest2);


// =======AND=======
// return last true value if all the values are true
// if the first value is false then it returned the first false value
console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log(undefined && "Jonas");
console.log(7 && null);

if(restaurant.orderPizza)
    restaurant.orderPizza("panner", "chesse");
const pizza1 = restaurant.orderPizzas && restaurant.orderPizza("panner", "chesse");
console.log(pizza1);