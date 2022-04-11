Web API's
- are a way to interface with system resources
- setTimeout(), DOM API's, fetch, localstorage, console, location
- these are accesible through the window global object

```js
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");
```

- Start is printed, End is printed
- Global execution context is destroyed
- a callback is registered in the Web API's environment
- cb() is placed in callback queue, after 5s is passed
- event loop acts as a mediator and creates an execution context to run the pending cb()


```js
console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
    console.log("Callback");
})

console.log("End");
```

- Start is printed, End is printed
- a callback is registered in the Web API's environment, and an event is attached to it(click)
- Global execution context is destroyed
- cb() is placed in callback queue, when the button in question is clicked
- event loop acts as a mediator and creates an execution context to run the pending cb()

```js
console.log("Start");

setTimeout(function cbFromTimer() {
    console.log("CB setTimeout");
}, 5000);

fetch("https://api.netflix.com")
    .then(function cbFromFetch() {
        console.log("CB Netflix");
    });

console.log("End");
```