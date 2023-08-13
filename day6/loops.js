// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);
console.log("_____________");

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let x = 10;
while (x >= 0) {
  console.log(x);
  x--;
}

let k = 10;
do {
  console.log(k);
  k--;
} while (k >= 0);
console.log("_____________");

// Iterate 0 to n using for loop
let n = 34;
for (let y = 0; y <= n; y++) {
  console.log(y);
}
console.log("_____________");

/* Write a loop that makes the following pattern using console.log():
#
##
###
####
#####
######
####### */
let m = 0;
while (m <= 7) {
  console.log("#".repeat(m));
  m++;
}
console.log("_____________");

/* Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */
let a = 0;
while (a <= 10) {
  console.log(`${a} x ${a} = ${a * a}`);
  a++;
}
console.log("_____________");

/* Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */
console.log("i    i^2   i^3");
for (let i = 0; i <= 10; i++) {
  if (i == 10) {
    console.log(`${i}   ${i * i}   ${i ** 3}`);
  } else {
    console.log(`${i}    ${i * i}   ${i ** 3}`);
  }
}
console.log("_____________");

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let count = 0; count <= 100; count++) {
  if (count % 2 == 0) {
    console.log(count);
  }
}
console.log("_____________");

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let countOdd = 0; countOdd <= 100; countOdd++) {
  if (countOdd % 2 > 0) {
    console.log(countOdd);
  }
}
console.log("______a_______");

// Use for loop to iterate from 0 to 100 and print only prime numbers
let count = 0;
let q, w;
for (w = 2; w <= 100; w++) {
  for (q = 1; q <= w; q++) {
    if (w % q == 0) count++;
  }

  if (count == 2) console.log(w);
  count = 0;
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers. The sum of all numbers from 0 to 100 is 5050.
const arr = [];
let sum = 0;
for (let i = 0; i <= 100; i++) {
  arr.push(i);
}
for (const num of arr) {
  sum += num;
}
console.log(sum);
console.log("_____________");

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
const odds = [];
const evens = [];
let sumOdds = 0;
let sumEvens = 0;
let sums;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evens.push(i);
  } else {
    odds.push(i);
  }
}

for (const num of odds) {
  sumOdds += num;
}
for (const num of evens) {
  sumEvens += num;
}
sums = sumEvens + sumOdds;
console.log("evens:", sumEvens, "\nodds", sumOdds, "\nsum", sums);
console.log("_____________");

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array [2550, 2500]
sumOdds = 0;
sumEvens = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}
const arraysum = Array(sumEvens, sumOdds);
console.log(arraysum);
console.log("_____________");

// Develop a small script which generate array of 5 random numbers
const randomArr = [];
for (let i = 0; i <= 5; i++) {
  randomArr.push(Math.floor(Math.random() * 10));
}
console.log(randomArr);
console.log("_____________");

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const randomUniqueArr = [];

randomUniqueArr.push(Math.floor(Math.random() * 10));
while (randomUniqueArr.length <= 4) {
  let uniqueNum = Math.floor(Math.random() * 10);
  if (randomUniqueArr.includes(uniqueNum)) {
    randomUniqueArr.pop();
  } else {
    randomUniqueArr.push(uniqueNum);
  }
}
console.log(randomUniqueArr);
console.log("_____________");

// Develop a small script which generate a six characters random id. Example: 5j2khz
const id = [];
while (id.length <= 5) {
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
console.log(id.join(""));
console.log("_____________");
