/Users/wolfy/tmp/exercise2.js:4
console.log(greeting);
              ^

/* 
ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
---------------------------------------------------------------
  => The variable "greeting" doesn't exist when we try to write it to the log(At line 6 there is a "ReferenceError: greeting is not defined").
  At line 7 JavaScript detected the error at column 15 of line 4 of the program( in the "hello" function).
  Line 8 tells us that "hello" was called from line 13 of the program in an anonymous function, namely the global-level of the program

*/  