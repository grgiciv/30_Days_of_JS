// Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");
console.log("__________");

// Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."
);
console.log("__________");

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === typeof 10);
console.log(typeof parseInt('10') === typeof 10);
console.log("__________");

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') == 10);
console.log(Math.ceil(parseFloat('9.8')) == 10)
console.log("__________");

// Check if 'on' is found in both python and jargon
let word1 = 'python'
let word2 =  'jargon'
console.log(word1.includes('on'));
console.log(word2.includes('on'));
console.log("__________");

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon."
console.log(sentence.includes("jargon"));
console.log("__________");

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*101));
console.log("__________");

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random()*51) + 50);
console.log("__________");

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*256));
console.log("__________");


// Access the 'JavaScript' string characters using a random number.
let string = 'JavaScript'
console.log(string[Math.floor(Math.random()*string.length)]);
console.log("__________");

// Use console.log() and escape characters to print the following pattern.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
console.log("__________");

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.substr(sentence.indexOf("because"), 23));



