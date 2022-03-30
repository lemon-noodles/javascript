function a() {
  var var1 = 10;
  b();
  function b() {
    console.log(var1);
  }
}

a();
