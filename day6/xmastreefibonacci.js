function printXmasTree(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
  }
  console.log(" ".repeat(rows - 1) + "*");
}

// Example: print a tree with 5 rows
printXmasTree(5);

function bor(num) {
  let i = 0;
  console.log(
    `${" ".repeat(num - i / 2)}${"#".repeat(i)}${" ".repeat(num - i / 2)}`
  );
  while (i <= 2 * num) {
    if (i % 2 > 0) {
      console.log(
        `${" ".repeat(num - i / 2)}${"#".repeat(i)}${" ".repeat(num - i / 2)}`
      );
    }
    i++;
  }
}
bor(10);

const fibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // Using the 'reduce' method on an array of size (n - 2) to produce the required sequence
  return [...Array(n - 2)].reduce(
    (acc) => {
      acc.push(acc[acc.length - 1] + acc[acc.length - 2]);
      return acc;
    },
    [0, 1]
  );
};

console.log(fibonacci(10));

function calculateTotal(price, pdv, discount) {
  let priceTaxed = price + (price * pdv) / 100;
  let discountedPrice = priceTaxed - (priceTaxed * discount) / 100;

  console.log(priceTaxed);
  console.log(discountedPrice);

  return discountedPrice;
}

calculateTotal(1000, 18, 20);

console.log(":::::::::::::");

let people = [
  { name: "pero", age: "01-01-2020" },
  { name: "bero", age: "01-04-1978" },
];

const filterPeople = people.filter((person) => {
  console.log(new Date(person.age).getFullYear());
  const thisYear =
    new Date().getFullYear() - new Date(person.age).getFullYear();
  console.log("AAAAAAAAAA", typeof thisYear);
  return thisYear > 18 ? true : false;
});
console.log(people, filterPeople);
