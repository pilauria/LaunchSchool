let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i += 1) {
  for (let y = 0; y < myArray[i].length; y += 1) {
    let value = myArray[i][y];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}

/* 
or:

myArray.forEach(function (nArray) {
  nArray.forEach(function (value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});

*/
