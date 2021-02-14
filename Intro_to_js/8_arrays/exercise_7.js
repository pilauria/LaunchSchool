/*> let arr = [2, 3, 5, 7]
> arr.reduce((accumulator, element) => accumulator + element, 0)
= 17

> arr.reduce((accumulator, element) => accumulator * element, 1)
= 210
*/
/*
> let strings = ['a', 'b', 'c', 'd']
> strings.reduce((accumulator, element) => {
...   return accumulator + element.toUpperCase()
... },);
=let array = [3, 5, 7];
//console.log(sumOfSquares(array)); // => 83
*/

let array = [3, 5, 7];
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}
console.log(sumOfSquares(array)); // => 83;

/* 
If we don't provide an initial value of 0 for the accumulator, the function would return 77, (3 + 5*5 + 7*7) = 77;
because 
- on the first call of the iteration the return value woluld be 3;
- on the second iteration would be 3 + 5*5;
- on the third iteration would be  3 + 5*5 +7*7 = 77;


function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  });
}

console.log(sumOfSquares(array)); // => 77

*/
