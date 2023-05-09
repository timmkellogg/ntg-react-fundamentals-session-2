# React Classes

We've figured out how to pass data between our components, but so far that data has just been static, unchanging values. Taking advantage of React Component State will allow us to build dynamic "reactive" components that re-render when our data is updated.

## Defining Class Components

Class components provide you with some additional features you don't get when components with simple functions. One of the benefits is you get to use the  [ES6 class syntax ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). This is nice especially for developers coming from languages that provide a similar structure to creating objects. You can create Class components  [without ES6 ](https://reactjs.org/docs/react-without-es6.html)  but I would only do that if you have a really specific use case.

Other benefits of Class components

-   **State**  - This is why functional components are called stateless. Class components can maintain their own state. State is similar to props, but it is private and fully controlled by the component. State allows React components to change their output over time in response to user actions, network responses, and anything else, without having to modify props.
-   **Lifecycle Hooks**  - Lifecycle hooks are methods provided to you through extending the React.Component class. They allow you to run code at various points in the lifecycle of the application.  [componentDidMount() ](https://reactjs.org/docs/react-component.html#componentdidmount)  and  [componentWillUnmount() ](https://reactjs.org/docs/react-component.html#componentwillunmount)  are some commonly used lifecycle hooks. Please follow the links to learn more about those and the other Lifecycle Hooks.

Both examples below are considered the same in React. The Class component allows you to leverage state and lifecycle hooks.

``` js

//FUNCTIONAL COMPONENT
function Potato(props) {
    return <h1>My favorite type of potato is, {props.type}</h1>;
}

//CLASS COMPONENT
class Potato extends React.Component {
    render() {
        return <h1>My favorite type of potato is, {this.props.type}</h1>;
    }
}
```

What changed?

1.  We declared a Class called Potato instead of creating a function called Potato making sure to extend React.Component so we inherit what we need to work with State and Lifecycle Hooks.
2.  We implemented the  `render()`  method and moved the body of the functional component into the  `render`  method of the stateful component

## Working with State

Like props, state is just a JavaScript object but state is created and managed within a component and not passed in as attributes when rendered through JSX. You should think of State as private to a component. Perhaps the most special thing about State is that a change/update to state will cause the application to re-render.

[Further Reading ](https://reactjs.org/docs/faq-state.html)

Setting the initial state of a component is usually needed when portions of your UI rely on values in state. This is done in the  `constructor()`  method of a stateful component.

The start of a simple counter:

``` js
class Counter extends React.Component {

    // adding a constructor so we can set our initial state
    constructor(props){
        // let the parent class do its thing with props
        super(props);

        // setup the initial value for count in state
        this.state = {
            count: 0
        }

        // methods must be bound to `this`
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState({ count: this.state.count + 1 })
    }

    // simple render method just displaying the count
    render(){
        return (
            <div>
                {this.state.count}
            </div>
        )
    }

}
```

Thanks to another modern syntax called "class fields", this can be simplified to:

``` js
class Counter extends React.Component {

    // state does not need to be initalized in constructor
    state = {
        count: 0
    }

    // arrow function syntax allows `this` to be automatically bound to methods
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render(){
        return (
            <div>
                {this.state.count}
            </div>
        )
    }

}
```

## Resources

* [https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)