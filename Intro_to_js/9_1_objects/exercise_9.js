let foo = {
  a: "hello",
  b: "world",
};

let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);
console.log(foo.a); // => 'hi' (objects are mutable);
console.log(qux); // => 'hello' (strings and primitives in general are not mutable);
