# Demo: Variables & Template Literals

## Variables

There are three  keywords for declaring variables in JavaScript:

* `var`
* `let`
* `const`

### `var`

May be reassigned or redeclared. 

``` js 

var value = 'some string'

value = 'some other string'

var value = ' some other other string'

```

### `let`

May be reassigned, but cannot be redeclared. 

``` js

let value = 'some string'

value = 'some other string'

let value = ' some other other string' // ERROR

```

### `const`

Cannot be reassigned or redeclared. 

``` js

const value = 'some string'

value = 'some other string' // ERROR

const value = 'some other other string' // ERROR

```

## Types 

* Strings
* Numbers
* Booleans
* Undefined
* Null

* Arrays
* Objects

## Type Conversion

JavaScript is a "dynamically typed" languaged, meaning not only can you define a variable without assigning it a type, but you can reassign the same variable to another type later!

``` js

//All A-OKAY by JavaScript!

let value

value = 'some string'

value = 4

value = false

```

> *Note: Just because you can, doesn't mean you should.*

Let's *explicitly* convert between data types! JS provides several type conversion functions, including:

Use `Boolean()` to test whether a value is [*truthy* or *falsy*](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). It provides a boolean representation of a value. For example, here are ***all*** of JavaScript's falsy values:
```js
Boolean(false) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(0) // false
Boolean(0n) // false
Boolean('') // false
```

Literally *everything else* is a truthy value:
```js
Boolean('hello') // true
Boolean(' ') // true
Boolean(3) // true
Boolean(-3) // true
Boolean(-Infinity) // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
```

Convert a string into a number:
```js
Number('2027') // 2027
Number('42.4 carrots') // NaN
parseInt('42.4 carrots') // 42
parseFloat('42.4 carrots') // 42.4
```

Convert a number or object into a string:
```js
String(42) // '42'
String(new Date()) // 'Wed Oct 12 2022 16:20:13 GMT-0400 (Eastern Daylight Time)'
String([1, 2, 3]) // '1,2,3'
```

Convert a string into an array of characters:
```js
const vowels1 = Array.from("aeiou") // ["a", "e", "i", "o", "u"]
const vowels2 = [..."aeiou"] // ["a", "e", "i", "o", "u"]
```

Convert an object into an array of key-value pairs... and back again:
```js
Object.entries({ name: "Sasha", id: 32532 }) // [["name", "Sasha"], ["id", 32532]]
Object.fromEntries([["name", "Sasha"], ["id", 32532]]) // { name: "Sasha", id: 32532 }
```

## Template Literals

Template literals allow us to embed expressions inside of strings, allowing efficient string interpolation in place of text concatenation. 

You can create a template literal by using backticks (`` ` ``) in place of single or double quotes. Inside of a template literal, you can embed an expression using a dollar sign and curly braces `` ${expression} ``.

In place of concatenation: 

``` js

const firstName = 'tim'
const lastName = 'kellogg'

// with concatenation:
console.log('My full name is ' + firstName + ' ' + lastName + '!')

// with string interpolation:
console.log(`My full name is ${firstName} ${lastName}!`)
```

A simple embeded epxression:

``` js

console.log(`2 + 2 = ${2 + 2}`)

```