let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* 
This code log "1" to the console.
Executing the foo function doesn't affect the output, becasuse this function is another variable declaration (the function create an inner scope).
The "bar" variable create on line 3 in another variable( not the same as the one on line 1).
*/
