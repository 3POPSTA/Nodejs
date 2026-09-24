//* Accessing Process Information
// // Process identification
// console.log(`Process ID (PID): ${process.pid}`);

// //Platform Information
// console.log(`Platform: ${process.platform}`);
// console.log('Node.js version:', process.version);

// // Memory usage (in bytes)
// console.log('Memory usage:', process.memoryUsage());


// // Command line arguments
// console.log('Arguments:', process.argv);

//* Exiting a Process
// // Normal Exit
// process.exit();
// // Or explicitly
// process.exit(0);
// // Exit with error (status code 1)
// process.exit(1);
// // Run cleanup before exiting
// process.on('beforeExit', (code) => {
//   console.log('About to exit with code:', code);
// });

//* Handling Process Events
process.on("SIGINT", ()=> {
    console.log('\nGot SIGINT. Press Control-D to exit.');
})
process.exit(0)