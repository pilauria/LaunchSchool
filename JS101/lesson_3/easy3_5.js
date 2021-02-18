function isColorValid(color) {
  return color === 'blue' || color === 'green';
}

console.log(isColorValid('yellow'));


/* 
or
const isColorValid = color => color === "blue" || color === "green";

or

const isColorValid = color => ["blue", "green"].includes(color);