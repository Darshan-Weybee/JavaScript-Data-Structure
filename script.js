'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const weekdays1 = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
let openingHours = {
  [weekdays1[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays1[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays1[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]];
  },
  openingHours,

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

let { name, openingHours1, categories } = restaurant;
console.log(name, openingHours1, categories);

const {
  name: restaurantName,
  openingHours1: hours,
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

// const minu = [...restaurant.mainMenu];
// console.log("....",minu);


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


// it works on nullish value not on falsy value
// nullish value are: null and undefined (not 0 and "")
restaurant.numGuests1 = 0;
const guestCorrect = restaurant.numGuests1 ?? 10;
console.log(guestCorrect);

// OR Assignment Operator
const rest1 = {
  name: "Capri",
  numGuests: 0
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi"
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

// rest1.owner = rest1.owner && "<Annonymous>";
// rest2.owner = rest2.owner && "<Annonymous>";
// console.log(rest1);
// console.log(rest2);

rest1.owner &&= "<Annonymous>";
rest2.owner &&= "<Annonymous>";
console.log(rest1);
console.log(rest2);

// for of loop
// it gives the all element in the array
// to get the index of the array element use "entries()" method  e.g. menu.entries()

const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
 for(const item of menus){
      console.log(item);}
 for(const item of menus.entries())
      console.log(item);
 for(const item of menus.entries())
      console.log(`${item[0]+1}: ${item[1]}`);
 for(const [i, el] of menus.entries())
      console.log(`${i+1}: ${el}`);

// object literals
console.log(restaurant.openingHours);
// for defining method  in object 
const hours1 = {
  fri: 12,

  opening(hours, hours1){
    console.log("hagxka");
  }
}

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? "closed";  
  console.log(open);
}

// methods
console.log(restaurant.order?.(0,1) ?? "Method does not exists");
console.log(restaurant.orderRisotto?.(0,1) ?? "Method does not exists");

const user = [{name: "jonas", email: "jonas@gmail.com"}];
console.log(user[0]?.name ?? "Users array empty");

// for properties of object use "Object.keys(object name)"
for(const day of Object.keys(openingHours))
    console.log(day);

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we aer open on ${properties.length} days: `;
for(const day of properties)
      openStr += `${day}  `;
console.log(openStr);

// for values of objects use "Object.values(object name)"
const value = Object.values(openingHours);
console.log(value);

const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open, close}] of entries)
    console.log(`On ${key} we open at ${open} and close at ${close}`);


// sets is collection of unique values
// it does not contain any duplicate values
// set can hold different datatypes also
// order of the set in set are irrelevant
// .size, .has, .add, .delete
const ordersSet = new Set(["pizza","pasta", "risotto", "pasta", "pizza"]);
// for(let i=0; i<ordersSet.size; i++){
//     console.log("....",ordersSet);
// }
const orderArray = [...ordersSet];
console.log("....",orderArray[1]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has("pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("risotto");
console.log(ordersSet);

for(const order of ordersSet)
    console.log(order);
  
const staff = ["waiter", "manager", "receptionist","waiter", "chef", "chef"];
const staffUnique = new Set(staff);
const staffUnique1  = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUnique1);

console.log(staffUnique.size);
console.log(new Set(staff).size);
console.log(new Set(["waiter", "manager", "receptionist","waiter", "chef", "chef"]).size);

console.log(new Set("DarshanKagthara").size);


// data stored in map in key value pairs
// in map keys are anything but in object keys are string  
// set() method is used to set the data into the set and it return the updated map
// .set(key, value), .get(), .has(), .delete, .clear(), .size
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisboun, Portugal"));
console.log(rest);

rest.set("categories", ["Italian","Pizzeria","Vegetarian","Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "we are open :)")
    .set(false, "we are closed :(");

console.log(rest.get("name"));
console.log(rest.get(1));
console.log(rest.get(true));
console.log(rest.get(false));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr2 = [1,2];
rest.set(arr2, "Test");
rest.set(document.querySelector("h1"), "heading");
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr2));


const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Corect"],
  [false, "Try Again!"]
]);

console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log("....",hoursMap);

// for(const q of question){
//   console.log("....",q);
// }
console.log(question.get("question"));
for(const [key, value] of question){
  // console.log(key);
  if(typeof key == "number"){
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = 3; //prompt("Enter Your Answer");
console.log(question.get(question.get("correct") == answer));


// input comes from three sources
// 1) from the program itself (e.g. status message)
// 2) from the Ui (e.g. form and prompt box)
// 3) from the external sources (e.g. web api)

// for simple list: Arrays or sets
// for key/value pairs: objects or map
// data come fro web api is in form of JSON

// Array
/*Use when you need to work with ordered list of value(might contain duplicate)
use wen you need to manipulate the data*/

// Set
/*Use when you need to work with unique values
Use when high-performance is really important
Use to remove duplicates from arrays*/

//objects
/*More traditional key/value store
Easier to write and access values with  .  and  []
Use when you need to include function(methods)
use when working with JSON(can be converted to map)*/

//Maps
/*Better Performance
Keys can have any data type
Easy to iterate
Easy to compute size
Use when you simply need to map key to values
Use when you need keys that are not strings*/

// Strings
// .length, indexOf(),   lastindexOf(), slice()

const airline = "TAP Air Portugal";
const plane  = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("Darshan"[2]);

console.log(airline.length);
console.log("Darshan".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ")+1));

console.log(airline.slice(-4));
console.log(airline.slice(1, -4));

function checkMiddleSeat(seat){
    const s = seat.slice(-1);
    if(s == "B" || s == "E"){
        console.log("You get the middle seat");
    }
    else{
        console.log("You are lucky you get the window side seat");
    }
}
checkMiddleSeat("11B");
checkMiddleSeat("11F");
checkMiddleSeat("11C");
checkMiddleSeat("11E");

// for this
// javascript behind the string put that string into the object and then call the method on it
console.log(new String("jonas"));
console.log(typeof new String("jonas"));
console.log(typeof new String("jonas").slice(1));


// .toLowerCase,   .toUpperCase,  trim(), replace()(it is case sensitive method),  /string/g(to change all the string without replaceAll() method)
console.log(airline.toLowerCase());
console.log("Darshan".toUpperCase());

const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = "darshan@gmail.com";
const loginEmail = "   Darshan@gmail.Com \n";
const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const correctEmail = lowerEmail.trim();
console.log(correctEmail);

const normallizeEmail = loginEmail.toLowerCase().trim();
console.log(normallizeEmail);

const priceGB = "288,97!";
const priceGBUpdated = priceGB.replace("!", "$").replace(",", ".");
console.log(priceGBUpdated);

const annoucement = "All passenger come to boarding door 23!, Boarding door 23!";
const annoucementUpdated = annoucement.replace("door", "gate");
console.log(annoucementUpdated);

const annoucementNew = annoucement.replace(/door/g, "gate");
console.log(annoucementNew);


// includes(),  startsWith(), endsWith()
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.includes("Airbue"));
console.log(plane1.includes("neo"));
console.log(plane1.startsWith("Airbus"));
console.log(plane1.endsWith("ne"));

if(plane1.startsWith("Airbus") && plane1.endsWith("neo")){
  console.log("Part of new airbus family");
}
else
    console.log("Not Part of new airbus family");


const checkBaggage = function (items){
    const baggage = items.toLowerCase();
    if(baggage.includes("knife") || baggage.includes("gun"))
        console.log("you are not allowed");
    else
        console.log("welcome to aboard");
}
checkBaggage("laptop, food, pocket knife");
checkBaggage("laptop, food");
checkBaggage("laptop, food, pocket gun");

// split(), join()

console.log("a+very+nice+string".split("+"));
console.log("Darshan Kagthara".split(" "));

const [firstName, lastName] = "Darshan Kagathara".split(" ");
console.log(firstName, lastName);

const newName = ["Mr." ,firstName.toUpperCase(), lastName.toLowerCase()].join(" ");
console.log(newName);

capitalizename("jessica ann smith davis");
capitalizename("jonas deo");

function capitalizename(name){
    const names = name.split(" ");
    const namesUpper = [];

    for(const n of names){
      namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(" "));
}

// add  padding at start and at end 
// padStart(), padEnd(), repeat()

const message = "Go to gate 20!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Darshan".padStart(20, "=").padEnd(30, "="));

maskCreditCard(213456798979879);
maskCreditCard("123546879921369");
maskCreditCard("12345678");

function maskCreditCard(number){
  const numbers = String(number);
  const lastNumber = numbers.slice(-4);
  console.log(lastNumber.padStart(numbers.length, "*"));
}

const message1 = "Bad Weather ";
console.log(message1.repeat(5));

planeInLine(5);
planeInLine(6);
planeInLine(10);

function planeInLine(n){
    console.log(`There are ${n} planes in line ${"airbus    ".repeat(n)}`);
}


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  for(const flight of flights.split("+")){
     const [type, from, to, time] = flight.split(";");
     let output = type.replaceAll("_", " ") + " from " + from.slice(0,3).toUpperCase() + " to " +to.slice(0,3).toUpperCase() + "  " +time.replace(":", "h");
     output = output.padStart(43);
     console.log(output);
  }
