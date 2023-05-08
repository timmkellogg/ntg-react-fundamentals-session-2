# Classes in JavaScript

ES6 (ECMAScript 2015) introduced classes to JavaScript, providing a familiar syntax to object-oriented programmers for instantiating JavaScript objects.

## Creating a Class

``` js

class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

```

### Class Methods

``` js

class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    greetings() {
        return `Hello! My name is ${this.firstName} ${this.lastName}`
    }
}

```

## Extending a Class

``` js

class Programmer extends Person {
    constructor(firstName, lastName, age, languages) {
        super(firstName, lastName, age)
        this.languages = languages
    }
}

```

## Initializing an Object

``` js

const tim = new Person('tim', 'kellogg', 28)

const timToo = new Programmer('tim', 'kellogg', 28, ['javascript', 'php'])

```

## Resources

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)