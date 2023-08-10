// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

/* Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
 */

//Find the median age(one middle item or two middle items divided by two)
let arrayMid = ages.length % 2;
if (arrayMid > 0) {
    console.log(ages[Math.floor(ages.length / 2)])
} else {
    console.log(ages.slice(ages.length / 2 -1, ages.length / 2 +1))
}
console.log("_________");


// Find the average age(all items divided by number of items)
console.log(ages.reduce((accumulator, currentValue) => accumulator + currentValue) / ages.length)
console.log("_________");


// Find the range of the ages(max minus min)
console.log(Math.max(...ages) - Math.min(...ages))
console.log("_________");

// Compare the value of (min - average) and (max - average), use abs() method
let average = ages.reduce((accumulator, currentValue) => accumulator + currentValue) / ages.length;
let min = Math.min(...ages);
let max = Math.max(...ages);
console.log(Math.abs(min - average) === max - average)
console.log("_________");
