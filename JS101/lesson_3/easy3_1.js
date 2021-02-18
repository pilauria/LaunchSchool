const numbers = [1, 2, 3, 4];

// 1
numbers.length = 0;

// 2
numbers.splice(0, numbers.length);

// 3
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);
