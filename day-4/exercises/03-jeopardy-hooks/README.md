# Exercise: Jeopardy Lite (with Hooks!)

## Instructions

### Setting Up

- Copy the `Jeopardy.js` file into your `src` folder.

- In your `src/App.js` file, import `Jeopardy.js` and add the component to App.js's return.

- Verify that the component renders and that you can add, remove, and toggle tasks.

### Refactor to a Functional Component

- Convert `Jeopardy.js` to a functional component using hooks. 

- You will need:

    - `useState()` hook

    - `useEffect()` hook

### Bonus

- Add the `score` state value to the user's localStorage so it is remembered between sessions.

- Create a function called `resetScore()` that updates the `score` state back to 0. 

- Create a new `<button>` element and bind it to the `resetScore` function.