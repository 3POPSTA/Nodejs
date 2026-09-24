const name = "Alice";
const age = 30;

const person = { name, age };
console.log(person);


const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
console.log(calculator.add(5, 3));