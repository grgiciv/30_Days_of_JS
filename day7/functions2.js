// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
  for (let i = 0; i * a <= c; i++) {
    if ((c - i * a) % b == 0) {
      console.log(`x = ${i}, y = ${(c - i * a) / b}`);
      return;
    } else {
      console.log("No solution");
    }
  }
}
solveLinEquation(2, 3, 7);
console.log("_________");

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
  let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  console.group(x1, x2);
  return x1 === x2 ? [x1] : { x1, x2 };
}
console.log(solveQuadEquation(1, 7, 12));
console.log("_________");

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const arr = [1, 4, "dog", false, 5.34];

/* const printArray = (...array) => {
  return array;
}; */
function printArray(...array) {
  return array;
}

console.log(printArray(1, 4, "dog", false, 5.34));
console.log("_________");

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
  let date = new Date();
  return `${date.getDate().toString().padStart(2, "0")}/${date
    .getMonth()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}
console.log(showDateTime());
console.log("_________");

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  let c;
  console.log(`x is ${x}, y is ${y}.`);
  c = x;
  x = y;
  y = c;
  return `x is ${x}, y is ${y}.`;
}
console.log(swapValues(2, 3));
console.log("_________");

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const example = [1, "mango", 2.57, 4.02e-4, 0.17, [2, 9]];
function reverseArray(array) {
  const arrayReversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayReversed.push(array[i]);
  }
  return arrayReversed;
}
console.log(reverseArray(example));
console.log(reverseArray(["A", "B", "C"]));
console.log("_________");

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
function capitalizeArray(array) {
  let capitalizedarray = array.map((item) => item.toUpperCase());
  return capitalizedarray;
}
console.log(capitalizeArray(webTechs));
console.log(capitalizeArray(["banana", "orange", "mango", "lemon"]));
console.log("_________");

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const items = [];
const addItem = (item) => {
  items.push(item);
  return items;
};
console.log(addItem("apple"));
console.log(addItem("pineapple"));
console.log(addItem("fig"));
console.log("_________");

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (index) => {
  items.splice(index, 1);
  return items;
};
console.log(removeItem(1));
console.log("_________");

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (number) => {
  const nums = [];
  for (let i = 0; i <= number; i++) {
    nums.push(i);
  }
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
};
console.log(sumOfNumbers(15));
console.log("_________");

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (number) => {
  const nums = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 > 0) {
      nums.push(i);
    }
  }
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
};
console.log(sumOfOdds(5));
console.log("_________");

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (number) => {
  const nums = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
};
console.log(sumOfEven(5));
console.log("_________");

/* Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number. 
evensAndOdds(100);
The number of odds are 50.
The number of evens are 51. */
const evensAndOdds = (number) => {
  const odds = [];
  const evens = [];
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  return `The number of odds are ${odds.length}.\nThe number of evens are ${evens.length}.`;
};
console.log(evensAndOdds(100));
console.log("_________");

// Write a function which takes any number of arguments and return the sum of the arguments
const sumOfNums = (...nums) => {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};
console.log(sumOfNums(1, 4, 7, 8, 2, "b"));
console.log("_________");

// Write a function which generates a randomUserIp.
function randomUserIp() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(
    Math.random() * 256
  )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}
console.log(randomUserIp());
console.log("_________");

// Write a function which generates a randomMacAddress
function randomMacAddress() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const macAddress = [];
  for (let i = 0; i <= 12; i++) {
    let hexNumber = Math.floor(Math.random() * 16);
    macAddress.push(hex[hexNumber]);
  }
  return `${macAddress[0]}${macAddress[1]}:${macAddress[2]}${macAddress[3]}:${macAddress[4]}${macAddress[5]}:${macAddress[6]}${macAddress[7]}:${macAddress[8]}${macAddress[9]}:${macAddress[10]}${macAddress[11]}`;
}
console.log(randomMacAddress());
console.log("_________");

/* Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
console.log(randomHexaNumberGenerator());
'#ee33df' */
function randomHexaNumberGenerator() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  const hexNumber = ["#"];
  for (let i = 0; i < 6; i++) {
    let randomHex = Math.floor(Math.random() * 16);
    hexNumber.push(hex[randomHex]);
  }
  return hexNumber.join("");
}
console.log(randomHexaNumberGenerator());
console.log("_________");

/* Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
console.log(userIdGenerator());
41XTDbE */
function userIdGenerator() {
  const id = [];
  while (id.length + 1 <= 7) {
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
console.log(userIdGenerator());
