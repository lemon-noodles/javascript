Currying
- is transforming how a function is being called.  
```f(a, b, c) => f(a)(b)(c)```

- it doesn't call a function but transforms it.

- resources
    - https://javascript.info/currying-partials
    - https://www.youtube.com/watch?v=THh3EiUbysk

```js

function curry(fn) {
    return function(a) {
        return function(b) {
            return fn(a, b);
        }
    }
}

function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum)

console.log(curriedSum(1)(2)(3))
```