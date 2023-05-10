# Exercise: useState

In this exercise, students will refactor a simple class component to a functional component using the `useState` hook. 

## Instructions

### Setting Up

- Copy the `Counter.js` file into your `src` folder.

- In your `src/App.js` file, import `Counter.js` and add the component to App.js's return.

- Verify that the component renders the current count and increment/decrement buttons.

### Refactoring to a Functional Component

- Replace `class Count extends Component` with `function Count()`.

- Replace the  ` { Component } ` import with ` { useState } `.

- Remove the `render()` method, moving the `return` directly into the Counter function body.

- Remove all references to `this`.

- Update methods to be contained in variables.

- Replace `this.state = { count: 0 }` with `const [count, setCount] = useState(0)`.

- Replace references to `this.setState()` with calls to `setCount()`.