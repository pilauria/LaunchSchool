let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let capKeys = objKeys.map((key) => key.toUpperCase());
console.log(capKeys);
console.log(obj);

/*
or with .forEach method:

let capKeys = [];
let objKeys = Object.keys(obj);
objKeys.forEach(function (key) {
  capKeys.push(key.toUpperCase());
});

console.log(capKeys);

*/
