function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}

let z = x();
z(); // still prints 7 because z remembers it's lexical scope, one of the quirks of js

function blah() {
  for (var index = 0; index < array.length; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
  console.log("Yo JS!");
}
blah();
// print 6 5 times

function blah2() {
  for (let index = 0; index < array.length; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
  console.log("Yo JS!");
}
blah2();
// let is block scoped and a new variable is created everytime for setTimout

function blah3() {
  for (var index = 0; index < array.length; index++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(index);
  }
  console.log("Yo JS!");
}
blah3();
// a solution to print 1 2 3 4 5, but with var

// both print 0
function a() {
  var x = 0;
  return function b() {
    console.log(x++);
  };
}

var y = a()();
var meh = a()();
