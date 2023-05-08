# Exercise: Working with Events

## Instructions

## Part 1: Handling a Form Submit - Sign Up

- Open the `index.html` file in VS Code. 

- Within the script tags, create an empty array called `users`.

- Create a function called `handleSignUp()` that logs the value of the four inputs on the page when called. You will need to:
    - Give each input field a unique `id` attribute
    - Retrieve the `value` property from each input

- Attach the `handleSignUp` function to the form's `onchange` event.

- Once you've verified your `handleLogin` function is called by submitting the form, update the function to push a new object to the `users` array containing the input values from the form.

- Log the value of `users` after submitting the form to confirm. 

## Part 2: Log In

- Create a function called `handleLogin()` that compares the values submitted in the form to the users in the `user` variable. If `email` and `password` match, log that the login was successful to the console, otherwise log that it was a failure. 
