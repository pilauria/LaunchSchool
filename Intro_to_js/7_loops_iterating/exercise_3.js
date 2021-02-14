let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*
The loop in infinite because the condition "counter = 1" in line 3 never becomes false. Moreover the if statement in line 7 never becomes true because in line 5 'counter' is always 2 (in line 3 it is '1' and in line 5 always becomes '2').
*/
