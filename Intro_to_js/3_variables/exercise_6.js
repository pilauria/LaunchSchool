const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

/* 
The program logs 'bar'.
The variable 'const FOO = 'bar' is initialized in global scope. The two const variables are declared in different scopes (are separate entities) ans so no error occurs.
*/
