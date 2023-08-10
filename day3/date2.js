/* Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100 */
let base = prompt('Enter base', 'number goes here');
let height = prompt('Enter height', 'number goes here');
let area = 0.5 * base * height;
alert(`area is ${area}`);
console.log(area);

/* Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */
let a = prompt("enter side a:", 'number goes here');
let b = prompt("enter side b:", 'number goes here');
let c = prompt("enter side c:", 'number goes here');
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
alert(`perimeter is ${perimeter}`);
console.log(perimeter);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = parseInt(prompt('Enter length', 'number goes here'));
let width = parseInt(prompt('Enter width', 'number goes here'));
area = length * width;
perimeter = 2 * ( length + width);
alert(`Area is ${area}\nPerimeter is ${perimeter}`);
console.log(`Area is ${area}\nPerimeter is ${perimeter}`);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14
let radius = parseInt(prompt("enter radius", " number goes here"));
let areaCircle = PI * radius * radius;
let circumference = 2 * PI * radius;
alert(`Area of circle is ${areaCircle} \nCircumnference is ${circumference}`);
console.log(`Area of circle is ${areaCircle} \nCircumference is ${circumference}`);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slope = 2
let xintercept = 2/2
let yintercept = 2 * 0 -2
console.log(`slope: ${slope}\nx-intercept: ${xintercept}\ny-intercept: ${yintercept}`);

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let m = (y2 - y1) / (x2-x1);
console.log(m);

// Compare the slope of above two questions.
console.log(slope == m);

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = parseInt(prompt('Enter x value', 'number goes here'));
let y = x**x + 6*x + 9;
console.log(y);

/* Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */
let hours = parseInt(prompt('Enter hours', 'number goes here'));
let ratePerHour = parseInt(prompt('Enter rate per hour', 'number goes here'));
let earnings = alert(`Your weekly earning is ${hours * ratePerHour}`);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let ime = "Ivan"
ime.length > 7 ? console.log("your name is long") : console.log("your name is short");

// Compare your first name length and your family name length and you should get this output.
let prezime = "Grgić"
ime.length > prezime.length ? console.log(`Your first name, ${ime} is longer than your family name, ${prezime}`) : console.log(`Your first name, ${ime} is shorter than your family name, ${prezime}`)

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you.`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = parseInt(prompt("enter your birth year", "year goes here"));
let currentYear = new Date()
let age = currentYear.getFullYear() - birthYear;
age >= 18 ? alert(`You are ${age}. You are old enough to drive`) : alert(`You are ${age}. You will be allowed to drive after ${18-age} years.`)

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let numberOfYears = parseInt(prompt("enter number of years you lived", "year goes here"));
let secondsInLife = 100 * 365 * 24 * 60 * 60;
let secondsLived = numberOfYears * 365 * 24 * 60 *60;
let secondsLeft = secondsInLife - secondsLived;
console.log(`"If you lived 100 years, you have ${secondsLeft} to live`);

/* Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */
let date = new Date();
console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);
console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);

