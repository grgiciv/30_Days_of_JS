// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "Thomas",
  lastName: "Turner",
  incomes: new Set([
    { amount: 800, description: "8 hours work day" },
    {
      amount: 50,
      description: "Mentoring students on weekends",
    },
  ]),
  expenses: new Set([
    { amount: 50, description: "Eletricty bills" },
    { amount: 10, description: "Gas bills" },
    { amount: 30, descrption: "Entertainment" },
  ]),
  totalIncome: function () {
    const incomeArray = Array.from(this.incomes);
    let total = 0;
    for (let i = 0; i < incomeArray.length; i++) {
      total += incomeArray[i].amount;
    }
    return total;
  },
  totalExpense: function () {
    const expenseArray = Array.from(this.expenses);
    let total = 0;
    for (let i = 0; i < expenseArray.length; i++) {
      total += expenseArray[i].amount;
    }
    return total;
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
  accountInfo: function () {
    console.log(
      `Name: ${this.firstName}\tLast name: ${
        this.lastName
      }\nIncome: ${this.totalIncome()}\nExpense: ${this.totalExpense()}\nBalance: ${this.accountBalance()}`
    );
  },
  addIncome: function () {
    this.incomes.add({
      amount: 560,
      description: "Deafult income description",
    });
  },
  addExpense: function () {
    this.expenses.add({
      amount: 1,
      description: "Deafult expense description",
    });
  },
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
personAccount.addExpense();
personAccount.addExpense();
personAccount.addExpense();
personAccount.addExpense();
personAccount.addIncome();
console.log(personAccount.accountInfo());
console.log("________________");

/* Imagine you are getting the above users collection from a MongoDB database. 
a) Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b) Create a function called signIn which allows user to sign in to the application */
import { users, products } from "./usersAndProducts.js";

function signUp(newUsername) {
  const usersArray = Object.entries(users);
  const flat = usersArray.flat();
  const userNames = [];
  for (let i = 1; i < flat.length; i += 2) {
    userNames.push(flat[i].username);
  }
  if (userNames.includes(newUsername)) {
    alert(`User ${newUsername} alredy exists`);
    console.log(`User ${newUsername} alredy exists`);
  } else {
    const user = prompt("Enter desired username");
    const email = prompt("Enter your email");
    const pass = prompt("Enter your password");
    const date = new Date();
    users.push({
      username: user,
      email: email,
      password: pass,
      createdAt: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      isLoggedIn: true,
    });
    console.log(users);
  }
}
//signUp("Thoas");

function signIn() {
  const user = prompt("Enter username");
  const pass = prompt("Enter password");

  for (let i = 0; i < users.length; i++) {
    if (user === users[i].username && pass === users[i].password) {
      users[i].isLoggedIn = true;
      console.log(users[i].isLoggedIn);
      console.log(users);
      alert("You are signed in");
      break;
    } else {
      console.log("Wrong username or password");
      alert("Wrong username or password");
      break;
    }
  }
}
//signIn();

/* The products array has three elements and each of them has six properties. 
a) Create a function called rateProduct which rates the product 
b) Create a function called averageRating which calculate the average rating of a product */
function rateProduct(userIdName, productId, productRate) {
  const item = products.find(
    (element, index) => products[index]._id === productId
  );
  item.ratings.push({ userId: userIdName, rate: productRate });
}
rateProduct("ab12ex", "aegfal", 4);
rateProduct("RAAAAx", "aegfal", 3);

console.log(products);
console.log("_________");

function averageRating(productId) {
  const product = products.find((element) => element._id === productId);
  const initialValue = 0;
  const ratingSum = product.ratings.reduce(
    (previousValue, cV) => previousValue + cV.rate,
    initialValue
  );
  console.log(ratingSum / product.ratings.length);
  return ratingSum / product.ratings.length;
}
averageRating("aegfal");
console.log("_____");

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(userId, productId) {
  const product = products.find((element) => element._id === productId);
  const userExist = users.find((element) => element._id === userId);
  const userLiked = product.likes.find((element) => element === userId);
  if (!userExist) {
    console.log("ERROR - USER DOES NOT EXIST");
    alert("ERROR - USER DOES NOT EXIST");
  } else if (userExist && !userLiked) {
    product.likes.push(userExist._id);
  } else {
    product.likes.splice(
      product.likes.findIndex((element) => element === userLiked),
      1
    );
  }
  return products;
}

likeProduct("ghderc", "aegfal");

console.log(products);
