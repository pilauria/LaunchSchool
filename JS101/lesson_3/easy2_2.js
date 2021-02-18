const numbers = [1, 2, 3, 4, 5];

// 1) const newArr = numbers.slice().reverse();

// 2) const newArr = numbers.slice().sort((num1, num2) => num2 - num1);

// 3) const newArr = [...numbers].sort((num1, num2) => num2 - num1);

/*
using forEach
const newArr = [];
numbers.forEach((number) => {
  newArr.unshift(number);
});

console.log(newArr);
console.log(numbers);

Note that, if multiple elements are passed as parameters, they're inserted in chunk at the beginning of the object, in the exact same order they were passed as parameters. Hence, calling unshift with n arguments once, or calling it n times with 1 argument (with a loop, for example), don't yield the same results:

- example -
let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)
// [3, 2, 1, 4, 5, 6]

*/
