## Exercise: Redux

## Instructions

- Create a new file called `src/toDo/toDoSlice.js`

- Using the `counterSlice.js` example, code `toDoSlice` with actions to add and remove todos from a `toDos` array. 

- Import `src/toDo/toDoSlice.js` into `src/App.js` and use it to create a `toDos` variable. 

- Add a small form to input and submit new todo items. 

- Create an `<ul>` element, and inside `map()` over toDos variable and render `<li>` element with toDo text in each one. 

- Add a `<button>` element to the `<li>` element that when clicked passes the index from the `map()` to the dispatched `removeToDo` function.