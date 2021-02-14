/*let arr = [2, 3, 5, 7];
console.log(arr.reduce((accumulator, element) => accumulator + element, 0));
console.log(arr);
*/
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(string) {
  let eLength = arr.map(word => word.length);
  let oddLengths = eLength.filter(number => number % 2 !== 0);
  return oddLengths;
}
console.log(oddLengths(arr)); // => [1, 5, 3]
console.log(arr);
