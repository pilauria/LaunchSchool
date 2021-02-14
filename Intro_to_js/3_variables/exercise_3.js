{
  let foo = "bar";
}

console.log(foo);

/* I get 'ReferenceError: foo is not defined'. 'foo' is out of scope. This is because the variable has local scope (It is declared inside a block, whereas the call is outside the block (in a global scope).*/
