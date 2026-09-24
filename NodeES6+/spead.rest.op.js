//* Spread Operator
// Array spread - combining arrays
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const combined = [...numbers, ...moreNumbers];
console.log(combined);

// Array spread - converting string to array of characters
const chars = [...'hello'];
console.log(chars);


//* Rest Operator
// Rest parameter in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
