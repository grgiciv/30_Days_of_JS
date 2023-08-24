const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

import { countries } from "../day8/countries.js";

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
console.log("_____1_____");
const sum = products
  .map((item) => item.price)
  .filter((item) => typeof item === "number")
  .reduce((acc, cv) => acc + cv);
console.log(sum);

//Find the sum of price of products using only reduce reduce(callback))
console.log("_____2_____");
function filtration(array) {
  const filtered = array
    .filter((item) => typeof item.price === "number")
    .map((item) => item.price);
  return filtered;
}
function sumAll(acc, cv) {
  return acc + cv;
}

const filtered = filtration(products);
console.log(filtered);
console.log(filtered.reduce(sumAll));

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
console.log("_____3_____");

function categorizeCountries(array) {
  return array.filter((item) => item.population < 5000);
}
console.log(categorizeCountries(countries));

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
console.log("_____4_____");
// Weird english

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
console.log("_____5_____");
function getFirstTenCountries(array) {
  return array.map((item) => item.name).splice(0, 10);
}
console.log(getFirstTenCountries(countries));

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
console.log("_____6_____");
function getLastTenCountries(array) {
  return array.map((item) => item.name).splice(array.length - 10);
}
console.log(getLastTenCountries(countries));

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
console.log("_____7_____");
const letters = [];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
for (let i = 0; i < alphabet.length; i++) {
  let letter = countries
    .map((item) => item.name)
    .filter((item) => item[0] === alphabet[i]);
  letters.push(letter);
}
const sorted = letters.sort((a, b) => b.length - a.length);
console.log(sorted);
console.log(
  `Initial letter that most countries have in their name is letter "${sorted[0][0][0]}" with ${sorted[0].length} instances`
);
