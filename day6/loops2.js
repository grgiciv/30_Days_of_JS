// Develop a small script which generate any number of characters random id: Example: fe3jo1gl124g xkqci4utda1lmbelpkm03rba
function idGenerator(idLength) {
  const id = [];
  while (id.length + 1 <= idLength) {
    let charUpper = String.fromCodePoint(
      Math.floor(Math.random() * (90 - 65 + 1) + 65)
    );
    let charLower = String.fromCodePoint(
      Math.floor(Math.random() * (122 - 97 + 1) + 97)
    );
    let number = String.fromCodePoint(
      Math.floor(Math.random() * (57 - 48 + 1) + 48)
    );
    const possibleChar = [charLower, charUpper, number];
    id.push(possibleChar[Math.floor(Math.random() * 3)]);
  }
  return id.join("");
}

console.log(idGenerator(40));
console.log("_____________");

// Write a script which generates a random hexadecimal number. Example: '#ee33df'
const hex = ["#"];
const characters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
while (hex.length <= 6) {
  hex.push(characters[Math.floor(Math.random() * 16)]);
}
console.log(hex.join(""));

// Write a script which generates a random rgb color number. rgb(240,180,80)
let rgbNumber = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
  Math.random() * 256
)},${Math.floor(Math.random() * 256)})`;
console.log(rgbNumber);

// Using the countries array below, create the following new array. ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let countriesUpper = countries.map((country) => country.toUpperCase());
console.log(countriesUpper);

// Using the above countries array, create an array for countries length'.
let countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

/* Use the countries array to create the following array of arrays: [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */
const arrArr = countries.map(
  (country) =>
    new Array(country, country.slice(0, 3).toUpperCase(), country.length)
);
console.log(arrArr);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
