// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function (same as above)
const addArrow = (a, b) => a + b;

// Single parameter (no parentheses needed)

const double = num => num * 2;

// No parameters (parentheses needed)
const sayHello = () => 'Hello!';

// Using with array methods
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);