const munstersDescription = 'the Munsters are CREEPY and Spooky.';
const phrase = munstersDescription.charAt(0).toUpperCase() + munstersDescription.slice(1).toLowerCase();

/*
or
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
*/

console.log(phrase);

// => The munsters are creepy and spooky.
