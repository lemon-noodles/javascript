// what is callback fn
x(function y() {});
function x(y) {
  y();
}

setTimeout(function () {
  console.log("Y");
}, 1000);

// js is synchronous and single threaded language
// since js is a single threaded language, we should not block the main thread with heavy operation. We should use handle time consuming operations wiht asynchronous

// blocking main thread
// power of callback
// deep about event listener
function attachEventListeners() {
  let count = 0;
  document.getElementById("click-me").addEventListener("click", function () {
    console.log("Button Clicked", ++count);
  });
}
attachEventListeners();
// closures demo with event listeners
// scope demo with event listeners
// garbage collection & removeEventListener
// eventListeners are heavy so we remove it
