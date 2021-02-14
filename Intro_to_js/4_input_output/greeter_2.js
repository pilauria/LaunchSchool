let rlSync = require("readline-sync");
let firstName = rlSync.question("What's your name?");
let lastName = rlSync.question("What's your last name?");
console.log(`Hello, ${firstName}! ${lastName}`);
