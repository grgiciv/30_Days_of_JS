// Create an empty object called dog
console.log("_____1_____");
const dog = {};

// Print the the dog object on the console
console.log("_____2_____");
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
console.log("_____3_____");
dog.name = "Fido";
dog.legs = 4;
dog.color = "white";
dog.age = 2;
dog.bark = function () {
  return "woof woof";
};

// Get name, legs, color, age and bark value from the dog object
console.log("_____4_____");
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// Set new properties the dog object: breed, getDogInfo
console.log("_____5_____");
dog.breed = "husky";
dog.getDogInfo = function () {
  return `Dog ${this.name} is a ${this.color} ${this.breed} dog with ${
    this.legs
  } legs. He is ${this.age} years old and goes ${this.bark()}.`;
};
console.log(dog.getDogInfo());
