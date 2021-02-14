let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];

function findInteger(things) {
  return things.filter(function (value) {
    return Number.isInteger(value);
  });
}

findInteger(things);
