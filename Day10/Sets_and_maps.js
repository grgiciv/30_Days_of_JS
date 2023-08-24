//create an empty set
console.log("_____1_____");
const set1 = new Set();
console.log(set1);

// Create a set containing 0 to 10 using loop
console.log("_____2_____");

for (let i = 0; i <= 10; i++) {
  set1.add(i);
}
console.log(set1);

// Remove an element from a set
console.log("_____3_____");
set1.delete(4);
console.log(set1);

// Clear a set
console.log("_____4_____");
set1.clear();
console.log(set1);

//Create a set of 5 string elements from array
console.log("_____5_____");
arr = ["a", "c", "b", "d"];
const set2 = new Set(arr);
console.log(set2);

// Create a map of countries and number of characters of a country
console.log("_____6_____");
const countries = ["Finland", "Sweden", "Norway"];
const countriesWithLength = new Map([
  [countries[0], countries[0].length],
  [countries[1], countries[1].length],
  [countries[2], countries[2].length],
]);
console.log(countriesWithLength);
