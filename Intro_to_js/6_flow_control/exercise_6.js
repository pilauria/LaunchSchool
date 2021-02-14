function isArrayEmpty(arr) {
  if (arr) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

isArrayEmpty([]);

/* 

The output is "Not Empty". While the array is empty indeed (no elements and '.lenght' property is '0'), the output it isn't falsy, so the function executes the first branch of the 'if 'statement

*/
