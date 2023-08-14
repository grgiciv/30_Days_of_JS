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
console.log("_____________");

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
console.log("_____________");

// Using the above countries array, create an array for countries length'.
let countriesLength = countries.map((country) => country.length);
console.log(countriesLength);
console.log("_____________");

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
console.log("_____________");

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const landCountries = countries.filter((country) => country.includes("land"));
landCountries.length > 0
  ? console.log(landCountries)
  : console.log("All these countries are without land");
console.log("_____________");

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'. ['Albania', 'Bolivia','Ethiopia']
const iaCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("ia")) {
    iaCountries.push(countries[i]);
  }
}
iaCountries.length > 0
  ? console.log(iaCountries)
  : console.log("These are countries ends without ia");
console.log("_____________");

// Using the above countries array, find the country containing the biggest number of characters. Ethiopia
const reversed = countries.sort(
  (firstCountry, secondCountry) => firstCountry.length - secondCountry.length
);
console.log(reversed.pop());
console.log("_____________");

// Using the above countries array, find the country containing only 5 characters. ['Japan', 'Kenya']
const fiveChars = countries.filter((country) => country.length == 5);
console.log(fiveChars);
console.log("_____________");

// Find the longest word in the webTechs array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const longestWord = webTechs.sort(
  (tech1, tech2) => tech1.length - tech2.length
);
console.log(longestWord.pop());
console.log("_____________");
longestWord.push("JavaScript"); // adds element previously deleted with pop()

// Use the webTechs array to create the following array of arrays: [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const techModified = webTechs.map((tech) => new Array(tech, tech.length));
console.log(techModified);
console.log("_____________");

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
console.log(mernStack.map((tech) => tech.slice(0, 1)).join(""));
console.log("_____________");

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}
console.log("_____________");

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ["banana", "orange", "mango", "lemon"];
const fruitsReversed = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  fruitsReversed.push(fruits[i]);
}
console.log(fruitsReversed);
console.log("_____________");

/* Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB */
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let flatFullStack = fullStack.flat();
flatFullStack.map((tech) => console.log(tech.toUpperCase()));
