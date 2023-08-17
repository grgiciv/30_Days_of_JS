/* 1. Scope and Function Task:
- Create a function named `outer` which defines a variable `x` with a value of 10. Inside this function, define another function named `inner` which prints the value of `x`. Call the `inner` function from inside the `outer` function to display the value of `x`. */
console.log("_____1_____");
//pimjer closure
function outer(x = 10) {
  const inner = () => {
    return x;
  };
  return inner();
}
console.log(outer(5));

/* 2. Boolean and Operators Task:
   - Create a function named `isEven` that takes a number as a parameter and returns `true` if the number is even, otherwise returns `false`. */
console.log("_____2_____");
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// const isEven = (num) => (num % 2 === 0 ? true : false);
console.log(isEven(10));
console.log(isEven(7));

/* 3. Array and Function Task:
   - Define an array of numbers. Create a function named `sumArray` that takes an array as a parameter and returns the sum of all numbers in the array. */
console.log("_____3_____");
const numberArray = [2, 1, 5, 8, 4];
const sumArray = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
  });
};
console.log(sumArray(numberArray));

/* 4. Array, Loop, and Operators Task:
   - Create an array of numbers. Write a function named `findMax` that finds and returns the largest number in the array using a `for` loop. */
console.log("_____4_____");
const sortedArray = [2, 500, 1, 4, 35, 245, 7000, 1, 9800, 9000, 76, 12, 344];
function findMax(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        array[j + 1] = array[j];
      }
    }
  }

  return array.pop();
}

console.log(findMax(sortedArray));

/* 5. Object Task:
   - Create an object that represents a book, with properties for `title`, `author`, and `yearPublished`. Create a function named `getBookInfo` that takes a book object as a parameter and prints the book's details. */
console.log("_____5_____");
const book = {
  title: "The Raven",
  author: "Edgar Allan Poe",
  yearPublished: "1845",
};
function getBookInfo(bookObject) {
  console.log(
    `Title of the book is: ${bookObject.title}\nAuthor is: ${bookObject.author}\nYear published is: ${bookObject.yearPublished}`
  );
}
getBookInfo(book);

/* 6. Array of Objects and Loop Task:
   - Define an array of student objects, where each student has a `name` and `grade`. Create a function named `printPassingStudents` that prints the names of all students with a grade above 50.
 */
console.log("_____6_____");
const students = [
  { name: "George", grade: 50 },
  { name: "Giovanni", grade: 78 },
  { name: "Giorgio", grade: 99 },
  { name: "Graham", grade: 43 },
];
function printPassingStudents(studentObject) {
  for (let i = 0; i < studentObject.length; i++) {
    if (studentObject[i].grade > 50) {
      console.log(studentObject[i].name);
    }
  }
}
printPassingStudents(students);
/* 7. Function and Boolean Task:
   - Create a function named `isValidPassword` that takes a string as a parameter. The function should return `true` if the password is longer than 8 characters and contains both letters and numbers. Otherwise, it should return `false`. */
console.log("_____7_____");
function isValidPassword(string) {
  if (string.length > 8) {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    console.log(string);
    const splitPassword = string.split("");
    for (let i = 0; i < splitPassword.length; i++) {
      if (nums.includes(splitPassword[i])) {
        return true;
      } else {
        continue;
      }
    }
  } else {
    return false;
  }
}
console.log(isValidPassword("rtza643fhdfhsr;i8"));

/* 8. Array, Loop, and Function Task:
   - Create an array of strings. Write a function named `countVowels` that takes an array of strings and returns the total count of vowels in all strings. */
console.log("_____8_____");
const stringArray = ["Abr0uuu", "SDGA", "shrt", "UUUU"];
function countVowels(array) {
  const vowels = ["a", "i", "u", "e", "o"];
  let vowelCount = 0;
  for (let i = 0; i < array.length; i++) {
    let splitString = array[i].toLowerCase().split("");
    for (let j = 0; j < splitString.length; j++) {
      if (vowels.includes(splitString[j])) {
        vowelCount += 1;
      }
    }
  }
  return vowelCount;
}
console.log(countVowels(stringArray));

/* 9. Operators and Loop Task:
   - Create a function named `fizzBuzz` that loops from 1 to 100. For multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz". */
console.log("_____9_____");
function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

/* 10. Object, Loop, and Array Task:
   - Create an object representing a shopping cart, which contains an array of products (each product being an object with properties for `name` and `price`). Write a function named `totalCost` that calculates and returns the total cost of all products in the cart. */
console.log("_____10_____");
const shoppingCart = {
  products: [
    { name: "Carrot", price: 12 },
    { name: "Watermelon", price: 20 },
    { name: "Juice", price: 18 },
  ],
};
function totalCost(cart) {
  let total = 0;
  for (let i = 0; i < cart.products.length; i++) {
    total = total + cart.products[i].price;
  }
  return total;
}
console.log(totalCost(shoppingCart));
