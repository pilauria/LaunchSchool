/* eslint-disable no-console */
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

// we want the invalidNumber function to return true when and only when either the user inputs an empty string (after trimming their input) or inputs a string that, when coerced to a number type, is NaN
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
prompt('Welcome to Calculator!');

// user input 1
prompt('What is the first number?');
let number1 = readline.question();

// validate user input 1
while (invalidNumber(number1)) {
  prompt("Hmm...that doesn't look like a valid number.");
  number1 = readline.question();
}

// user input 2
prompt('What is the second number?');
let number2 = readline.question();

// validate user input 2
while (invalidNumber(number2)) {
  prompt("Hmm...that doesn't look like a valid number.");
  number2 = readline.question();
}

// user input 3
prompt(
  'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide',
);
let operation = readline.question();

// validate user input 3
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choolse 1, 2, 3, or 4');
  operation = readline.question();
}

let output;
// eslint-disable-next-line default-case
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is ${output}.`);
