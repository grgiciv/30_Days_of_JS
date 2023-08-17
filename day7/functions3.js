// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
console.log("____1____");
function userIdGeneratedByUser() {
  let numberOfCharacters = parseInt(
    prompt(
      "Enter number of characters you wish to have in ID",
      "number goes here"
    )
  );
  let numberOfIDs = parseInt(
    prompt("Enter number of IDs you wish to generate", "Number goes here")
  );

  const ids = [];

  for (let i = 0; i < numberOfIDs; i++) {
    const singleId = [];
    for (let j = 0; j < numberOfCharacters; j++) {
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
      singleId.push(possibleChar[Math.floor(Math.random() * 3)]);
    }
    ids.push(singleId.join(""));
  }
  return ids.join("\n");
}
console.log(userIdGeneratedByUser());

// Write a function name rgbColorGenerator and it generates rgb colors.
console.log("____2____");
const rgb = () => {
  let rgbNumber = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  return rgbNumber;
};
console.log(rgb());

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
console.log("____3____");
const arrayOfHexaColors = (numberOfHexaColors) => {
  const arrayOfHexaColors = [];
  for (let num = 0; num < numberOfHexaColors; num++) {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    const hexNumber = ["#"];
    for (let i = 0; i < 6; i++) {
      let randomHex = Math.floor(Math.random() * 16);
      hexNumber.push(hex[randomHex]);
    }
    arrayOfHexaColors.push(hexNumber.join(""));
  }
  return arrayOfHexaColors;
};
console.log(arrayOfHexaColors(4));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
console.log("____4____");
const arrayOfRgbColors = (numberOfRgbColors) => {
  const arrayOfRgbColors = [];
  for (let i = 0; i < numberOfRgbColors; i++) {
    let rgbNumber = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
    arrayOfRgbColors.push(rgbNumber);
  }
  return arrayOfRgbColors;
};
console.log(arrayOfRgbColors(7));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
console.log("____5____");
function convertHexaToRgb(hexaNumber) {
  const hexArray = hexaNumber.toUpperCase().split("");
  if (hexArray[0] === "#") {
    hexArray.shift();
  }
  for (let i = 0; i < 6; i++) {
    if (hexArray[i] === "A") {
      hexArray[i] = 10;
    } else if (hexArray[i] === "B") {
      hexArray[i] = 11;
    } else if (hexArray[i] === "C") {
      hexArray[i] = 12;
    } else if (hexArray[i] === "D") {
      hexArray[i] = 13;
    } else if (hexArray[i] === "E") {
      hexArray[i] = 14;
    } else if (hexArray[i] === "F") {
      hexArray[i] = 15;
    } else {
      hexArray[i] = parseInt(hexArray[i]);
    }
  }
  let firstNumber = hexArray[0] * 16 ** 1 + hexArray[1] * 16 ** 0;
  let secondNumber = hexArray[2] * 16 ** 1 + hexArray[3] * 16 ** 0;
  let thirdNumber = hexArray[4] * 16 ** 1 + hexArray[5] * 16 ** 0;

  const rgbArray = [firstNumber, secondNumber, thirdNumber];

  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
}
console.log(convertHexaToRgb("#1D22Fb"));

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
console.log("____6____");
function convertRgbToHexa(rgb) {
  const rgbArray = rgb
    .replace("rgb", "")
    .replace(" ", "")
    .replace("(", "")
    .replace(")", "")
    .split(",");
  for (let i = 0; i < 3; i++) {
    rgbArray[i] = parseInt(rgbArray[i]);
    if (rgbArray[i] > 255 || rgbArray[i] < 0) {
      console.log("The number in RGB array must be between 0 and 255");
    }
  }

  const hexArray = [];
  for (let i = 0; i < rgbArray.length; i++) {
    let hexQuotient = Math.floor(rgbArray[i] / 16);
    console.log("kvocijent", hexQuotient);
    let hexRemainder = rgbArray[i] % 16;
    console.log("remainder", hexRemainder);
    if (hexQuotient === 10) {
      hexQuotient = "a";
    } else if (hexQuotient === 11) {
      hexQuotient = "b";
    } else if (hexQuotient === 12) {
      hexQuotient = "c";
    } else if (hexQuotient === 13) {
      hexQuotient = "d";
    } else if (hexQuotient === 14) {
      hexQuotient = "e";
    } else if (hexQuotient === 15) {
      hexQuotient = "f";
    }

    hexArray.push(hexQuotient);
    if (hexRemainder === 10) {
      hexRemainder = "a";
    } else if (hexRemainder === 11) {
      hexRemainder = "b";
    } else if (hexRemainder === 12) {
      hexRemainder = "c";
    } else if (hexRemainder === 13) {
      hexRemainder = "d";
    } else if (hexRemainder === 14) {
      hexRemainder = "e";
    } else if (hexRemainder === 15) {
      hexRemainder = "f";
    }
    hexArray.push(hexRemainder);
  }

  return `#${hexArray.join("")}`;
}
console.log(convertRgbToHexa("rgb(200, 159, 60)"));

// Write a function generateColors which can generate any number of hexa or rgb colors. console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log("____7____");
function generateColors(colorType, colorInstances) {
  if (colorType === "hexa") {
    const arrayOfHexaColors = [];
    for (let num = 0; num < colorInstances; num++) {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
      const hexNumber = ["#"];
      for (let i = 0; i < 6; i++) {
        let randomHex = Math.floor(Math.random() * 16);
        hexNumber.push(hex[randomHex]);
      }
      arrayOfHexaColors.push(hexNumber.join(""));
    }
    return arrayOfHexaColors;
  }
  if (colorType === "rgb") {
    const arrayOfRgbColors = [];
    for (let i = 0; i < colorInstances; i++) {
      let rgbNumber = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
      arrayOfRgbColors.push(rgbNumber);
    }
    return arrayOfRgbColors;
  }
}
console.log(generateColors("hexa", 7));
console.log(generateColors("rgb", 3));

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
console.log("____8____");
function shuffleArray(array) {
  const shuffledArray = [];
  for (let i = 0; shuffledArray.length <= array.length - 1; i++) {
    randomItem = array[Math.floor(Math.random() * array.length)];
    if (!shuffledArray.includes(randomItem)) {
      shuffledArray.push(randomItem);
    }
  }
  return shuffledArray;
}
console.log(shuffleArray([1, 5, false, "bla"]));
/* Much simpler method:
function shuffleArrays(array) {
  array.sort((item) => Math.random() - 0.5);
  return array;
}
console.log(shuffleArrays([2, 3, 6, 5, 7])); */

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
console.log("____9____");
function factorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(4));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
console.log("____10____");

const isEmpty = (parameter) => {
  return parameter
    ? console.log("Parameter is not empty")
    : console.log("Parameter is empty");
};
console.log(isEmpty(true));
console.log(isEmpty(false));
console.log(isEmpty(""));
console.log(isEmpty("A string"));
console.log(isEmpty([]));
console.log(isEmpty([1, "A", false, []]));
console.log(isEmpty({}));

// Call your function sum, it takes any number of arguments and it returns the sum.
console.log("____11____");
const sum = (...args) => {
  let numSum = 0;
  for (const element of args) {
    numSum += element;
  }

  return numSum;
};
console.log(sum(1, 4, 5, 7));

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
console.log("____12____");
const arrayItems = [2, true, 3, 643, 4, "t", "2"];
const arr2 = [2, 3, 66, 33];
function sumOfArrayItems(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (!(typeof array[i] === "number")) {
      return "all elements in given array are not numbers";
    } else {
      sum += array[i];
    }
  }
  return sum;
}
console.log(sumOfArrayItems(arrayItems));
console.log(sumOfArrayItems(arr2));
