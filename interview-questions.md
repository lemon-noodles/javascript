#### React

- 2 hooks used
    - useEffect, useState, useReducer, useContext, useRef
    - useMemo, useCallback
- how would you pass data from component A to B, A is parent
    - props
- Why would someone use the useEffect hook?
    - alternative component lifecycle methods - componentDidMount, componentDidUpdate, componentWillUnmount
    - to execute some piece of logic when component mounts(componentDidMount)
    - to execute some piece of logic certain variable/state(componentDidUpdate) changes value
    - to execute some piece of logic before component unMounts, mostly used to unregister event listeners
- if you need to setup fully client-side rendered SPA with React, what toolchain would you use?
    - create-react-app, next js, gatsby
- why would someone use React?
    - fast, modular, eco-system, virtual dom
- redirection
    - Link or navigator from react-router-dom
- commonly used array methods
    - array.map, array.forEach, array.find, array.pop, array.push, array.filter
- what comes to your mind if you're using map to render within js?
    - unique keys to elements that helps virtual dom to update the dom
- what is virtual dom
    - React keeps a copy of the DOM in memory, and updates it as necessary
- what is state
    - we make a variable or data state when we expect it's change in value to trigger a re-render
    - in vanilla js we would directly manipulate the html using some document method when a value changes
- State Management
    - Redux, Context API
- Hooks Rules
    - Do not call inside a function or loop or if construct
    - Call inside functional component only
- Design Patterns
    - MVC
- Why hooks over Class based components
    - no more this keyword
    - better readability aka cleaner code, minifies well
    - reusability - decoupling of logic from UI, sharing stateful logic between components
- Higher Order Components -
    - higher-order component is a function that takes a component and returns a new component
    - a component transforms props into UI, a higher-order component transforms a component into another component

---
#### JS
- JS does memory allocation before executing the code, all variables are given undefined, however functions are declared
- Hoisting
    - this is a feature of JS where you can access a function or variable without error even before initializing or defining it.
    - if we use a variable, an arrow function, or an anonymously named function it will be undefined before init
    - if we use a function it works just fine before init


---
#### JS Code Snippets

```js

function abc() {
    console.log(a, b, c);

    var a = 10;
    let b = 20;
    const c = 30;
}

abc();

```
a will return undefined, however b and c will throw error
all variables are hoisted though


```js

var obj = {
    name: "Naveen",
    display: function() {
        console.log(this.name)
    },
    display_global: () => {
        console.log(this.name)
    }
}

var obj1 = { 
    name: "Someone"
}

obj.display()
obj.display.call(obj1);
```
implicit and explicit binding

```js

function myMemoize(fn, ctx) {
    const res = {}
    return function(...args) {
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]) {
            res[argsCache] = fn.call(ctx||this, ...args);
        }
        return res[argsCache]
    }
}

const clumsyProduct = (n1, n2) => {
    for (let index = 0; index < 10000000; index++) {
    }
    return n1 * n2;
}

const memoizedClumzyProduct = myMemoize(clumsyProduct)

```

---
#### Resources
- https://www.youtube.com/watch?v=vxggZffOqek
- https://www.youtube.com/watch?v=Fnlnw8uY6jo