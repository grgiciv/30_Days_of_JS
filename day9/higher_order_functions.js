//Explain the difference between forEach, map, filter, and reduce.
console.log("_____1_____");
/* forEach - uses callback function for every element of arrays only, returns undefined 
   map - uses callback function for each element, returns copy of array with each element modified by the callback function.
   filter - uses callback function for each element, returns elements that pass the condition provided in callback
   reduce - uses callback for eaxh element, returns value that results from applying callback to each element*/

// Define a callback function before you use it in forEach, map, filter or reduce.
console.log("_____2_____");
const arr = [2, 3, 4, 7, 6, 8, 9, 2];

function callBackForEach(item) {
  console.log(item * 2);
}

function callBackForMap(item) {
  return item * item;
}

function callBackForFilter(number) {
  return number % 2 === 0;
}
function callBackForReduce(prevNum, cV) {
  return prevNum + cV;
}

arr.forEach(callBackForEach);

const maped = arr.map(callBackForMap);
console.log(maped);

const filtered = arr.filter(callBackForFilter);
console.log(filtered);

const reduced = arr.reduce(callBackForReduce, 0);
console.log(reduced);

// Use forEach to console.log each country in the countries array.
console.log("_____3_____");
const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "Estonia",
];
countries.forEach((country) => console.log(country));

// Use forEach to console.log each name in the names array.
console.log("_____4_____");
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach((name) => console.log(name));

// Use forEach to console.log each number in the numbers array.
console.log("_____5_____");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => console.log(number));

// Use map to create a new array by changing each country to uppercase in the countries array.
console.log("_____6_____");
const mapToUpperCase = countries.map((country) => country.toUpperCase());
console.log(mapToUpperCase);

// Use map to create an array of countries length from countries array.
console.log("_____7_____");
const countryLength = countries.map((country) => country.length);
console.log(countryLength);

// Use map to create a new array by changing each number to square in the numbers array
console.log("_____8_____");
const squared = numbers.map((number) => number ** 2);
console.log(squared);

// Use map to change to each name to uppercase in the names array
console.log("_____9_____");
const nameUppercase = names.map((name) => name.toUpperCase());
console.log(nameUppercase);

// Use map to map the products array to its corresponding prices.
console.log("_____10_____");
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const prices = products.map((item) => item.price);
console.log(prices);

// Use filter to filter out countries containing land.
console.log("_____11_____");
const countriesWithLand = countries.filter(
  (country) => country.includes("Land") || country.includes("land")
);
console.log(countriesWithLand);

// Use filter to filter out countries having six character.
console.log("_____12_____");
const countriesWithSixLetters = countries.filter(
  (country) => country.length === 6
);
console.log(countriesWithSixLetters);

// Use filter to filter out countries containing six letters and more in the country array.
console.log("_____13_____");
const countriesWithSixLettersOrMore = countries.filter(
  (country) => country.length >= 6
);
console.log(countriesWithSixLettersOrMore);

//Use filter to filter out country start with 'E';
console.log("_____14_____");
const countryStartsWithE = countries.filter((country) => country[0] === "E");
console.log(countryStartsWithE);

// Use filter to filter out only prices with values.
console.log("_____15_____");
const productsWithValues = products.filter(
  (item) => typeof item.price === "number"
);
console.log(productsWithValues);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
console.log("_____16_____");
function getStringLists(array) {
  return array.filter((item) => typeof item === "string");
}
const array1 = ["stringeriolicious", 2, 4, 5, "", " ", 4, true, "QWert"];

console.log(getStringLists(array1));

//Use reduce to sum all the numbers in the numbers array.
console.log("_____17_____");
const numArray = [2, 3, 5, 6, 3, 21, 2, 6];
console.log(numArray.reduce((acc, cv) => acc + cv));

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log("_____18_____");
const sum = countries.reduce((previousValue, currentValue) => {
  if (currentValue === countries[countries.length - 2]) {
    return previousValue + ", " + currentValue + " and ";
  } else if (currentValue === countries[countries.length - 1]) {
    return previousValue + currentValue + " are north European countries";
  } else {
    return previousValue + ", " + currentValue;
  }
});
console.log(sum);

// Explain the difference between some and every
console.log("_____19_____");
/* some - takes callback and returns true if at least one element in array satisfies condition in callback
every - takes callback and returns true if all elements in array satisfy condition in callback  */

// Use some to check if some names' length greater than seven in names array
console.log("_____20_____");
console.log(names.some((name) => name.length > 7));

//Use every to check if all the countries contain the word land
console.log("_____21_____");
console.log(names.every((name) => name.length > 7));

// Explain the difference between find and findIndex.
console.log("_____22_____");
/*
find - returns first element in array that satisfies testing function
findIndex - returns index of first element that satisfies testing function
 */

//Use find to find the first country containing only six letters in the countries array
console.log("_____23_____");
console.log(countries.find((item) => item.length === 6));

//Use findIndex to find the position of the first country containing only six letters in the countries array
console.log("_____24_____");
console.log(countries.findIndex((item) => item.length === 6));

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log("_____25_____");
console.log(countries.findIndex((item) => item.includes("Norway")));

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log("_____26_____");
console.log(countries.findIndex((item) => item.includes("Russia")));
