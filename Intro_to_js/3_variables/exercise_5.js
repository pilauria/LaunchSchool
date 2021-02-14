let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);

/* 
The two variables 'foo' have different scope: the first has a global scope and the second a local scope (inside the block).
The program log 'bar' because we log the variable outside the block, that is in the global scope.
*/
