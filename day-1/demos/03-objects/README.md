# Objects in JavaScript

## Creating Objects

``` js 

// Defining an object literal
const tim = {
    firstName: 'Tim',
    lastName: 'Kellogg',
    age: 28,
    likesPineapple: false
}

```

## Accessing Object Properties

Object properties can be accessed using either "Dot" or "Bracket" notation.

``` js

const tim = {
    firstName: 'Tim',
    lastName: 'Kellogg',
    age: 28,
    likesPineapple: false
}

// Dot Notation
console.log(tim.age) // returns 28


// Bracket Notation
console.log(tim['likesPineapple']) //returns false

```

## Destructuring

Object destructuring allows us to create variables based on the existing properties of an object. 

``` js 

const car = {
    make: 'Honda',
    model: 'Civic',
    yearBuilt: 2017
}

// create make and model variables based on property name
// creates a variable from yearBuild, but renames it to year
const { make, model, yearBuilt: year } = car

console.log(make)
console.log(model)
console.log(year)

```

## Functions as Constructors

You can use functions to create new objects.

``` js 

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

}

// Adds method to the prototype instead of initializing on every object instance
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Use `new` keyword and call Person passing arguments to the constructor
const tim = new Person('tim', 'kellogg', 28)

```

## Resources

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)