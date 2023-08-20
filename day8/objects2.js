import { users } from "./user.js";
import { countries } from "./countries.js";

// Find the person who has many skills in the users object.
console.log("_____1_____");
const userArray = Object.entries(users);
console.log(userArray);
const mostSkills = [];

for (let i = 0; i < userArray.length; i++) {
  mostSkills.push(userArray[i][1].skills.length);
}

let numberOfSkills = Math.max(...mostSkills);
let indexOfSkilledPerson = mostSkills.indexOf(numberOfSkills);

console.log(
  `User ${userArray[indexOfSkilledPerson][0]} has most skills (${numberOfSkills} in total)`
);

// Count logged in users, count users having greater than equal to 50 points from the following object.
console.log("_____2_____");
const loggedInUsers = userArray.filter((index) => index[1].isLoggedIn === true);
const usersWithPoints = userArray.filter((element) => element[1].points >= 50);
console.log(
  `There are ${loggedInUsers.length} users online\nThere are ${usersWithPoints.length} users wih 50+ points`
);

// Find people who are MERN stack developer from the users object
console.log("_____3_____");
const mernUsers = userArray.filter((item) =>
  item[1].skills.includes("MongoDB" && "Express" && "React" && "Node")
);
console.log(mernUsers);

// Set your name in the users object without modifying the original users object
console.log("_____4_____");
users.Ivan = {
  email: "ivan.grgic@mail.com",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  age: 30,
  isLoggedIn: true,
  points: 99,
};
console.log(users);

// Get all keys or properties of users object
console.log("_____5_____");
const keys = Object.keys(users);
console.log(keys);

// Get all the values of users object
console.log("_____6_____");
const values = Object.values(users);
console.log(values);

// Use the countries object to print a country name, capital, populations and languages.
console.log("_____7_____");
const languages = countries.map((country) =>
  console.log(
    "Name:",
    country.name,
    "\nCapital:",
    country.capital,
    "\nPopulation:",
    country.population,
    "\nLanguages:",
    country.languages.join(", ")
  )
);
