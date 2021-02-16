const numbers = [1, 2, 3, 4, 5];

function findGreatest(array) {
  let savedNumber = array[0];
  if (array === undefined) {
    return;
  }
  array.forEach((num) => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}
console.log(findGreatest());
