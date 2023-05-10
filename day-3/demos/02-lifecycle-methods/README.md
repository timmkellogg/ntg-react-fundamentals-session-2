# Component Lifecycle Methods

We've already been introduced to the `constructor()` and `render()` lifecycle methods. Next, we'll look at `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`.

## componentDidMount

``` js
...

state = {
    ...
}

componentDidMount() {
    //runs after render() method
    console.log('component mounted')
}

render() {
    ...
}

...
```

## componentDidUpdate

``` js
...

state = {
    ...
}

componentDidUpdate() {
    //runs on re-renders
    console.log('component updated')
}

render() {
    ...
}

...
```

## componentDidUnmount

``` js
...

state = {

}

componentWillUnmount() {
    //runs before component is removed
    console.log('component is about to be removed')
}

render() {
   ...
}

...
```

## Resources

* [https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)
* [https://www.w3schools.com/react/react_lifecycle.asp](https://www.w3schools.com/react/react_lifecycle.asp)