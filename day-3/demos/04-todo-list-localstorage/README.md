# To Do List with Local Storage

Let's add localStorage to the To Do List app so that tasks persist after the page is reloaded.

## Instructions

- Update the `Todo` class to save the task array to an item called `savedTodos` in localStorage after it is added to the state.
- Update the task array initilization to use the value of `savedTodos` if it exists.

``` js
...

class ToDoList extends Component {
    state = {
        input: '',
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    }

    ...

    componentDidUpdate = (prevProps, prevState) => {
        if(this.state.tasks !== prevState.tasks) {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        }
    }
}

...
```

## Resources

* [https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)