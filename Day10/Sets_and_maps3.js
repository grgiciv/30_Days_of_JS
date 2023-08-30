import { countries } from "../day8/countries.js";

// How many languages are there in the countries object file.
console.log("_____1_____");
const languages = countries.map((country) => country.languages).flat();
const languageSet = new Set(languages);
console.log(`There are ${languageSet.size} languages in file`);
console.log(languageSet);
// Use the countries data to find the 10 most spoken languages
console.log("_____2_____");
