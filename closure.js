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
