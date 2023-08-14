// Declare a function fullName and it print out your full name.
function fullNamee() {
  return "Ivan Programator";
}
console.log(fullNamee());
console.log("_________");

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return `${firstName} - ${lastName}`;
}
console.log(fullName("Ivan", "Satirac"));
console.log("_________");

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(2, 7));
console.log("_________");

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(4, 5));
console.log("_________");

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(7, 8));
console.log("_________");

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(3, 5, 7));
console.log("_________");

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
  let area = Number.parseFloat(Math.PI).toFixed(3) * radius ** 2;
  return area;
}
console.log(areaOfCircle(3));
console.log("_________");

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
  let circumference = 2 * Number.parseFloat(Math.PI).toFixed(3) * radius;
  return circumference;
}
console.log(circumOfCircle(6));
console.log("_________");

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  let density = Number.parseFloat(mass / volume).toFixed(4);
  return density;
}
console.log(density(7, 9));
console.log("_________");

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
  let speed = Number.parseFloat(distance / time).toFixed(4);
  return speed;
}
console.log(speed(100, 7));
console.log("_________");

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity = 9.81) {
  let weight = mass * gravity;
  return weight;
}
console.log(weight(96));
console.log("_________");

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit = `${(celsius * 9) / 5 + 32}F`;
  return fahrenheit;
}
console.log(convertCelsiusToFahrenheit(25));
console.log("_________");

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below. 
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */
function bmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log(bmi);
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(bmi);
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(bmi);
    return "Overweight";
  } else {
    console.log(bmi);
    return "Obese";
  }
}
console.log(bmi(96, 1.92));
console.log("_________");

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const autumn = ["september", "october", "november"];
const winter = ["december", "january", "february"];
const spring = ["march", "april", "may"];
const summer = ["june", "july", "august"];
function checkSeason(month) {
  let monthToLowerCase = month.toLowerCase();
  if (autumn.includes(monthToLowerCase)) {
    return "Autumn";
  } else if (winter.includes(monthToLowerCase)) {
    return "Winter";
  } else if (spring.includes(monthToLowerCase)) {
    return "Spring";
  } else if (summer.includes(monthToLowerCase)) {
    return "Summer";
  } else {
    return "Not valid month";
  }
}
console.log(checkSeason("february"));
console.log("_________");

/* Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
 */
function findMax(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
console.log(findMax(1.23e10, 70, 89907));
