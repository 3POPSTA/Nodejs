//* Basic Event
// const events = require("events");

// const myEmitter = new events();

// myEmitter.on("greet",()=>{
//     console.log("Hello World");
// });

// myEmitter.emit("greet");


//* EventEmitter Class
// const events = require("events");
// const eventsEmitter = new events.EventEmitter();

// let myEventHandler = () => {
//     console.log('I hear a scream!');
// }

// eventsEmitter.on("scream", myEventHandler);
// eventsEmitter.emit("scream");


//* Passing Arguments to Event Handlers
// const events = require("events");
// const  emitter = new events.EventEmitter();

// emitter.on("userJoined", (username,userId)=> {
//     console.log(`${username} (${userId}) has joined the chat`);
// });

// emitter.emit("userJoined", "John Doe", 43);


//* Handling Events Only Once
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // This listener will be called only once
// emitter.once('connection', () => {
//   console.log('First connection established');
// });

// emitter.emit('connection'); // This will trigger the listener
// emitter.emit('connection'); // This won't trigger the listener again


//* Error Handling
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Always handle 'error' events
emitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

// This will trigger the error handler
emitter.emit('error', new Error('Something went wrong'));