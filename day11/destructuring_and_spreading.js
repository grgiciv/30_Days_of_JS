const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
console.log("_____1_____");
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
console.log("_____2_____");
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Destructure the rectangle object by its properties or keys.
console.log("_____3_____");
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);
