function multiply(a, b) {
  return a * b;
}

let readlineSync = require("readline-sync");
let first = parseFloat(readlineSync.question("Enter the first number\n "));
let second = parseFloat(readlineSync.question("Enter the second number\n "));

console.log(`${first} * ${second} = ${multiply(first, second)}`);

/* 
or

function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  let readlineSync = require("readline-sync");
  return parseFloat(readlineSync.question(prompt));
}

let first = getNumber("Enter the first number\n");
let second = getNumber("Enter the second number\n");

console.log(`${first} * ${second} = ${multiply(first, second)}`);
*/
