// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = parseInt(prompt("enter your number of years", "years goes here"));
age >= 18 ? alert(`You are ${age}. You are old enough to drive`) : alert(`You are ${age}. You will be allowed to drive after ${18-age} years.`)

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = parseInt(prompt("enter your number of years", "years goes here"));
if (myAge > 25) {
    console.log(`You are ${myAge - 25} years older than me.`)
} else {
    console.log(`You are ${25 - myAge} younger than me.`)
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = parseInt(prompt("enter your number", "number goes here"));
number % 2 == 0 ? console.log(`${number} an even number.`) : console.log(`${number} is an odd number.`);