// Compare Scopes ver of the and let Keywords
/* Fix the code so that i declared in the if statement is a separate veriable than i declared in the first line of the function.
 * Be certain not to use the keyword anywhere in your code.
 * This exercise is designed to illustrate the difference between how ver and let keywords assign scope to the declared veriable. 
 * When programming a function similar to the one used in this exercise, it is often better to use different veriable names to avoid confusion.
 */

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}