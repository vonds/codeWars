/*
Create a function isDivisible (n, x, y) that checks if a number 'n' is divisible
by two numbers x AND y. All inputs are positive, non-zero digits.
*/

function isDivisible(n, x, y){
  // I used the and operator to account for both x and y being divisible by
  // Next I used the ternary operator to return a boolean
  return (n % x === 0 && n % y === 0) ? true: false
}
