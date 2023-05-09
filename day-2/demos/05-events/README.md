# Handling Events

Events can be lots of things. User interaction can trigger all types of events from mouse clicks to button clicks. We handle these events with Event Handlers. Event Handlers are typically methods on your Class (Stateful) Component.

Take a look at what an  **Event Handler**  would look like on our Counter Component to increment our  **count**  in state.

``` js
class Counter extends React.Component {

    ...

    //new increment handler to update state 
    //setting count to be 1 greater than it's previous value
    incrementHandler = (event) => {
        this.setState((state, props)=>({
            count: state.count + 1
        }))
    }

    //simple render method just displaying the count
    render(){
        return (
            <div>
                {this.state.count}
            </div>
        )
    }

}
```

Now that we have a handler for an event let's create an onClick event. We want the user to click a button and  `onClick`  call the  `incrementHandler()`.

``` js
class Counter extends React.Component {

    ...

    render(){
        return (
            <div>
                {this.state.count}
                {/* button with onClick that calls the incrementHandler method on this class */}
                <button onClick={this.incrementHandler}>increment (+)</button>
            </div>
        )
    }

}
```

-   When the  **increment (+)**  button is clicked it will call the  `incrementHandler()`  method.
-   The  `incrementHandler()`  is updating state using  `this.setState()`  updating the value of  **count**  in state by adding 1 to its current value.
-   Because state is updated the application will re-render and display the new value of  `this.state.count`  to the user.
-   This process is repeated with every press of the  **increment (+)**  button.

What if we wanted our counter to go down when we press a  **decrement (-)**  button?

``` js
class Counter extends React.Component {

    ...

    //new decrement handler to update state 
    //setting count to be 1 less than it's previous value
    decrementHandler = (event) => {
        this.setState((state, props)=>({
            count: state.count - 1
        }))
    }

    render(){
        return (
            <div>
                {/* button with onClick that calls the decrementHandler method on this class */}
                <button onClick={this.decrementHandler}>decrement (+)</button>
                {this.state.count}
                ...
            </div>
        )
    }

}
```

## Resources

* [https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)