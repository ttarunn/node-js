const readline = require('readline');
const msg = readline.createInterface(process.stdin, process.stdout);

// let name;

msg.question("Please enter your name:", (input)=> {
    console.log(`Hello ${input}`);
    // name = input
    msg.close();
});

// setTimeout(()=> {
//     console.log(name)
// }, 5000)
