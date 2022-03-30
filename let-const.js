// this is valid
var greeter = "hey hi";
var greeter = "say Hello instead";

// also valid
var greeter = "hey hi";
greeter = "say Hello instead";

// problematic
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter)

// solution to problem
let greeting = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined


let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"


console.log(b);
console.log(a);
let a = 10;
var b = 100;