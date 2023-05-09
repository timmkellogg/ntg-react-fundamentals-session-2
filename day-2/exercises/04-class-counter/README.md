# Exercise: Build a Counter Class

## Instructions

### Part 1: Creating a Counter Class

- Create a class called `Counter`.

- Add a property called `count` to the state.

- In the `render` function, create elements to display the current value of `this.state.count`, and add increment and decrement buttons.

- Create `incrementCount` and `decrementCount` methods on the class and have them utilize `this.setState` to update the value of `this.state.count` when the corresponding button is clicked. 

### Part 2: Additional Functionality

- Modify the functionality to not allow the counter to go below 0.

- Modify the functionality to not allow the counter to go above 20.

- Modify the functionality to change the color of the counter to red if it goes above 10.
    - [https://reactjs.org/docs/faq-styling.html ](https://reactjs.org/docs/faq-styling.html)
    - Make when it goes back below 10 it changes back to the original color.

- Modify the functionality to allow an initial count to be passed in as a prop.

- If an initial count is not passed in, the count should start at 0.

- Add a button to reset the counter to 0 or whatever the initial count was set to when passed in as a prop.

- Only show this button if the counter has been modified from its original state.

## Part 3: Render Multiple Counters

- Now that we've built a counter component that can accept its starting value as a prop, try rendering multiple counter components at once - notice how each keeps track of its own instance of its state values.