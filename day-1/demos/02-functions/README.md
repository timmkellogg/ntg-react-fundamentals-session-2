# Functions in JavaScript

Functions in JavaScript can be defined and used in many diffent ways. We'll cover some of the most common ways to create functions, and unpack some of the key function 'jargon' (and how they relate to each other), such as:

- Traditional Functions
- Arrow Functions
- Function Expressions
- Anonoymous Functions
- Callback Functions
- Asyncronous Functions

> Note: These are not all mutually exclusive!

## Defining a Function

``` js

function funcName(arg1, arg2) (
    // do something!
)

```

## Anonymous Functions

A function without a name. Anonymous functions are commonly used in function expressions or as callbacks. 

``` js 

// Anonymous function as callback
setTimeout(function() {  console.log('Ding! Three seconds passed!')}, 3000)

```

## Function Expression

A function expression is a function assigned to a variable.

``` js


// Function expression with traditional function
const traditionalFunc = function() {
    console.log('does something!')
}


// Function expressions can also use named functions
const traditionalFunc = function doSomething() {
    console.log('does something else!')
}

```

## Callback Functions

A callback is a function passed to another function as an arguement. 

``` js 

// setTimeout function receives an anoynymous traditional function as its first argument
setTimeout(function() => {
    console.log("Ding Three seconds passed!")
}, 3000)

```

``` js

function ding() {
    console.log('Ding! Three seconds passed!')
}

// setTimeout function receives a named traditional function as its first argument
setTimeout(ding, 3000)

```

## Arrow Functions

Arrow functions are a alternative way to define functions using a more simple syntax. They can be function expressions, as well as making great callbacks. 

``` js 
// Arrow function expression
const add = (num1, num2) => {
    return num1 + num2
}

// Even shorter syntax - if expression is one line, can use "implicit return"
const subtract = (num1, num2) => num1 - num2


// Anonymous arrow function as a callback
setTimeout(() => {
    console.log('Ding! Three seconds passed!')
}, 3000)

```
> Note: Arrow functions do not bind `this`, making them unsuitable for some use cases, such as defining object methods.

## Asyncronous Functions

### Promise / Callback Syntax

``` js
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json)
}
```

### async/await Syntax

``` js

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    return json
}
```

## Resources

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

### String / Array Methods (Functions)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array)