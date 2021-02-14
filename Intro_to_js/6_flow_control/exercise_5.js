return foo() ? "bar" : qux();

/* Refactor the above statement to use an if statement instead.

if (foo())  {
  return 'bar';
} else {
  return qux();
}

*/
