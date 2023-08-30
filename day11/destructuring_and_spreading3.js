import { countries } from "../day8/countries.js";

//Destructure the countries object print name, capital, population and languages of all countries
console.log("_____1_____");
for (const { name, capital, population, languages } of countries) {
  console.log(name, capital, population, languages);
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line. Output:      David (4) ["HTM", "CSS", "JS", "React"] 90 95
console.log("_____2_____");
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, [jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

/* Write a function called convertArrayToObject which can convert the array to a structure object.
Output: [
    {
      name: 'David',
      skills: ['HTM','CSS','JS','React'],
      scores: [98,85,90,95]
    },
    {
      name: 'John',
      skills: ['HTM','CSS','JS','React'],
      scores: [85, 80,85,80]
    }
  ] */
console.log("_____3_____");
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
  ["bili", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(array) {
  {
    array.user;
  }
}
console.log(convertArrayToObject(students));
