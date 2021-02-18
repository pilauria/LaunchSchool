const statement1 = 'The Flintstones Rock!';
const statement2 = 'Easy come, easy go.';

console.log(statement1.split('').filter((char) => char === 't').length);
console.log(statement2.split('').filter((char) => char === 't').length);

/*
or:
console.log(statement1.replace(/[^t]/g, '').length);
console.log(statement2.replace(/[^t]/g, '').length);
*/
