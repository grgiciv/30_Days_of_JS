import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries)

countries.includes('Ethiopia') ? console.log(countries[countries.indexOf('Ethiopia')].toUpperCase()) : countries.push('Ethiopia')
console.log(countries)

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log(webTechs)
webTechs.includes('Sass') ? console.log("Sass is a CSS preprocess") : webTechs.push('Sass')
console.log(webTechs)
console.log("_________");

// Slice the first ten countries from the countries array
console.log(countries.slice(0,10))

//Find the middle country(ies) in the countries array
let countriesMid = countries.length % 2;
if (countriesMid > 0) {
    console.log(countries[Math.floor(countries.length / 2)])
} else {
    console.log(countries.slice(countries.length / 2 -1, countries.length / 2 +1))
}
console.log("_________");


// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
countriesMid = countries.length % 2;
if (countriesMid > 0) {
    let firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
    let secondHalf = countries.slice(Math.ceil(countries.length / 2), countries.length);
    console.log(`First half: ${firstHalf}\n\nSecond half:\n${secondHalf}`);
} else {
    let firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
    let secondHalf = countries.slice(Math.ceil(countries.length / 2), countries.length);
    console.log(`First half: ${firstHalf}\n\nSecond half:\n${secondHalf}`);
}