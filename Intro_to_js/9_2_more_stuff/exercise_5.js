function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

/*

The split() method divides a String into an array of words.
The reverse() method reverses that array
The map() method creates a new array with the results of calling a function on every element in that array( in this case the .length method).

 */
