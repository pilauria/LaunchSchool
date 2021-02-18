const numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4]; // => undefined(slot is empty)

numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
console.log(numbers.map(() => 10)); // => // => [ 10, 10, 10, <2 empty items>, 10, 10 ]
