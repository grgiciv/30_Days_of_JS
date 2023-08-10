// Declare an empty array;
let a = Array();

// Declare an array with more than 5 number of elements
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];

// Find the length of your array
console.log(webTechs.length);
console.log("__________")

// Get the first item, the middle item and the last item of the array
console.log(webTechs[0], webTechs[3], webTechs[6]);
console.log("__________")

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["String", 2, false, undefined, [2,3,4], null]
console.log(mixedDataTypes.length);
console.log("__________")

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(itCompanies);
console.log("__________")

// Print the number of companies in the array
console.log(itCompanies.length);
console.log("__________")

// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
console.log("__________")

// Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
console.log("__________")

// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
console.log("__________")

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
itCompanies.splice(6, 0, "and");
itCompanies.push("are big IT companies");
console.log(itCompanies.slice(0, 6).join(", ") + " " + itCompanies.slice(6).join(" "));
console.log("__________")
itCompanies.splice(6, 1,) //deletes "and"
itCompanies.splice(-1, 1); // deletes "are big IT companies"

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes("Google") ? console.log("Google exists in array") : console.log("companiy not found")
itCompanies.includes("Epson") ? console.log("Google exists in array") : console.log("Companiy not found")
console.log("__________")

// Filter out companies which have more than one 'o' without the filter method
console.log("Before filter:", itCompanies)
console.log(`itCompanies array has ${itCompanies.length - 1} items`)

if (itCompanies[5].includes("oo")) {
  itCompanies.splice(5, 1)
}
if (itCompanies[4].includes("oo")) {
  itCompanies.splice(4, 1)
}
if (itCompanies[3].includes("oo")) {
  itCompanies.splice(3, 1)
}
if (itCompanies[2].includes("oo")) {
  itCompanies.splice(2, 1)
}
if (itCompanies[1].includes("oo")) {
  itCompanies.splice(1, 1)
}
if (itCompanies[0].includes("oo")) {
  itCompanies.splice(0, 1)
}
console.log("After filter:", itCompanies);
console.log(`itCompanies array has ${itCompanies.length - 1} items`);
console.log("__________")


// Sort the array using sort() method
const itCompanies2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies2.sort())
console.log("__________")


// Reverse the array using reverse() method
console.log(itCompanies2.reverse())
console.log("__________")


// Slice out the first 3 companies from the array
console.log(itCompanies2.slice(0, 3));
console.log("__________")

// Slice out the last 3 companies from the array
console.log(itCompanies2.slice(itCompanies2.length-3, itCompanies2.length-1));
console.log("__________")


// Slice out the middle IT company or companies from the array
//console.log(itCompanies2.push("Meta")) //za testrianje kada ima paran broj tvrtki
console.log(itCompanies2)
let middleIndex = (itCompanies2.length) % 2
if (middleIndex > 0) {
  console.log(itCompanies2.slice(Math.floor(itCompanies2.length / 2), Math.floor((itCompanies2.length / 2)) + 1))
} else {
  console.log(itCompanies2.slice(parseInt(itCompanies2.length / 2) - 1, parseInt(itCompanies2.length / 2) + 1))
}
console.log("_______");

// Remove the first IT company from the array
itCompanies2.shift()
console.log(itCompanies2)
console.log("_______");

// Remove the middle IT company or companies from the array
console.log("++++++++++");
console.log(itCompanies2)
console.log("++++++++++");
middleIndex = (itCompanies2.length) % 2
if (middleIndex > 0) {
  console.log(itCompanies2.splice(Math.floor(itCompanies2.length / 2), 1))
} else {
  console.log(itCompanies2.splice(parseInt(itCompanies2.length / 2) - 1, 2))
}
console.log("_______");

// Remove the last IT company from the array
itCompanies2.pop()
console.log(itCompanies2)
console.log("_______");


// Remove all IT companies
itCompanies2.splice(0, itCompanies2.length)
console.log(itCompanies2)