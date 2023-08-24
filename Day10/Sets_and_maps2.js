const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

//Find a union b
console.log("_____1_____");
let c = [...a, ...b];
let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C);

// Find a intersection b
console.log("_____2_____");
A = new Set(a);
B = new Set(b);
c = a.filter((num) => B.has(num));
C = new Set(c);
console.log(C);

// Find a with b
console.log("_____3_____");
A = new Set(a);
B = new Set(b);

c = a.filter((num) => !B.has(num));
C = new Set(c);

console.log(C);
