function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product1");
    case "113":
      console.log("Product2");
    case "142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

barCodeScanner("113");

/* 
=> Product2
   Product3
  Product not found!

  The anwer is 'Product2', but the code doesn't have break statements after each case, so it runs every case till the end ( fall-through )
*/
