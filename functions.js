// Function Statement aka Function Declaration
function a() {
  console.log("a called");
}

// Function Expression
var b = function () {
  console.log("b called");
};

// difference between fn statement and fn expression is hoisting

// Anonymous Function
// function () {}

// Named Function Expression
var b = function ooo() {
  console.log("ooo called");
};
// ooo is not created in the outer scope and cannot be accessed

// Difference between params and args
var hah = function (param1, param2) {
  console.log("hah called");
};
hah(1, 2); // 1 & 2 are arguments, param1 & param2 are parameters

// First Class functions aka First Class Citizens
// the ability to pass function as value and return a function is first class fn
// we can pass a function as an argument to a function
// we can return a function from a function

// arrow functions
