let flintstones = ['Fred', 'Wilma'];
flintstones.push(['Barney', 'Betty']);
flintstones.push(['Bambam', 'Pebbles']);

flintstones = [].concat(...flintstones);
console.log(flintstones);

/*
or:
 console.log(flintstones.flat(2));
*/
