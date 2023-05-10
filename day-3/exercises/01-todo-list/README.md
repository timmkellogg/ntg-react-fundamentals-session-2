# Exercise: To Do List - React Class

## Instructions

### Part 1: Adding and Rendering Tasks

- Create a new class called `ToDoList` that contains the following state properties:
    - tasks: array
    - input: string
- In the class's `render()` method, return JSX containing an `<input>` element, a `<button>` element, and an empty `<ul>` element. 
- Bind the value of the `<input>` element to the input property in the class's state.
- Create an event handler method called `handleChange()` to update the value of `input` when a user types a character.
- Create an event handler method called `handleSubmit()` to capture the value of the `input` when the `<button>` element is clicked and add it to the `tasks` array in state.
- Inside the `<ul>` element, write an expression to loop over the contents of `tasks` and return a `<li>` element for each task. The contents of the `<li>` element should be the value of the task.
- Test that you are able to type a value into the `<input>` element, click the `<button>` to add that value to the tasks state property, and that the a `<li>` element is rendered in the `<ul>` for each task.

## Part 2: Toggling and Deleting Tasks

Next, let's add the functionality to 'cross-off' tasks on our To Do List. 

- Update the `handleSubmit()` method to add objects to the task array instead of strings. The object should contain the following properties:
    - taskName: string
    - completed: boolean

- Update the expression inside the `<ul>` element to correctly render the taskName string.

- Create an event handler method called `handleToggle()` to update the completion property on a task when a `li` element is clicked.

- Apply the "text-decoration: line-through" CSS property to `<li>` elements where their completed property is `true`.

Finally, let's add the ability to delete the task entirely.

- Create an event handler method called `handleDelete()` that receives index and deletes the associated task object from the tasks property in state.

- Create a `button` element inside the `<li>` element and connect it to the `handleDelete()` method.
