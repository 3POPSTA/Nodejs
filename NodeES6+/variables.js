// Using let (can be changed)
let score = 10;
score = 20;
// Using const (cannot be reassigned)
const MAX_USERS = 100;

// Block scope with let
if (true) {
  let message = 'Hello';
  console.log(message); // Works here
}