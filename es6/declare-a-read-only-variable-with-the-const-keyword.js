// Declare a Read-Only Veriable with the const Keyword
/* Change the code so that all veriables are declared using let or const. 
 * Use let when you want the veriable to change, and const when you want the veriable to remain constant. 
 * Also, rename veriables declared with const to conform to common practices, meaning constants should be in all caps. */

function printManyTimes(str) {

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");