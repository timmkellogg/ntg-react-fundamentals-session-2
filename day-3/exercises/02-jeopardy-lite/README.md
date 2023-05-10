# Exercise: Jeopardy Lite

In this exercise, students will build a simple Jeopardy game by consuming the  [jService](http://jservice.io/)  API. 

## Instructions

### Setting Up

- Copy the `Jeopardy.js` file into your `src` folder.

- In your `src/App.js` file, import `Jeopardy.js` and add the component to App.js's return.

- Install the `axios` package by running `npm i axios` from the terminal.

- Verify that you can see the strigified JSON of a question when the browser is loaded.

### Part 1

-   Display the question, category, and point value returned from the API.

-   Create a way to keep track of the user's score.

-   Provide a way for the user to submit an answer to the question.

-   If the answer is correct then add the point value of the question to the user's score.

-   If the answer is wrong, subtract the point value from the user's score.

-   After the user answers a question display another random question from the API.

### Part 2

-   Create a stateless display component for the Jeopardy game that handles the display of the game.

-   Update the Jeopardy component to only render the new display component.

-   Pass the needed props from the Jeopardy component to the display component so it has all the data it needs to display the game data and submit the user's answer.

-   The other should all the display of the data through passed in props.
    