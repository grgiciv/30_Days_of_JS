// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Ivan"
let lastName = "Grgić"
let country = "Croatia"
let city = "Osijek"
let age = 34
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log("_________");

// Check if type of '10' is equal to 10
console.log(typeof '10' == 10);
console.log("_________");

// Check if parseInt('9.8') is equal to 10
console.log("******")
console.log(parseInt('9.8') == 10);
console.log("_________");

// Boolean value is either true or false.
console.log(11 == '11');
console.log(false == '');
console.log('asfa' !== 'zujgh');
console.log("::::");
console.log(NaN === 0);
console.log(34 <= 6);
console.log(parseInt('25') > 26);
console.log("_________");


/* Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' false
4 == '4' true
4 === '4' false
Find the length of python and jargon and make a falsy comparison statement. */
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 == '4');
console.log(4 === '4');
console.log("python".length > "jargon".length);
console.log("_________");

/* Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') true
There is no 'on' in both dragon and python  true */
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log("dragon".includes("on") && "python".includes("on"));
console.log("_________");

/* Use the Date object to do the following activities
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());
console.log("_________");