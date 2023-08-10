// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let re = /[.,]/igm
lettersOnly = text.replace(re, "").split(" ");
console.log(lettersOnly.length)
console.log(lettersOnly)

/* In the following shopping cart add, remove, edit items
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let allergy = true
console.log(shoppingCart)
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}
if (allergy) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
}
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea' 
console.log(shoppingCart)

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
