//* Object Destructuring
//Basic Object destructuring

// const user = {
//     name: "Alice",
//     age: 30,
//     location: "Accra"
// };

// const { name,age,location } = user;
// console.log(name);
// console.log(age);
// console.log(location);


//* Array Destructuring
// Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first, second, third);

// Skipping elements
const [primary, , tertiary] = colors;
console.log(primary, tertiary);