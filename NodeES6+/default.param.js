// Basic default parameter
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet('Kai'));