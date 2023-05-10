# Conditional Rendering

## Ternary Operator

Simplified conditional operator.

``` js
function greeting(person) {
    let name

    if (person) {
        name = person.name
    } else {
        name = 'Stranger'
    }

    return `Howdy, ${name}`
}
```

is equivalent to:

``` js
function greeting(person) {
    const name = person ? person.name : 'Stranger'

    return `Howdy, ${name}`
}
```

Ternary operators can be used to conditionally render components.

``` js
function Navbar(props) {
   return (
        ...
            <Nav>
                <Nav.Link as={Link} to="/search">About</Nav.Link>
                <Nav.Link as={Link} to="/saved">Blog</Nav.Link>
                {
                    // Render different link in navbar based on status of auth.user
                    auth.user 
                        ? <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>
                        : <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                }
            </Nav>
        ...
}
```

## Logical AND (&&)

Evaluates the first opperand and executes the second if the value of the first is `truthy`.

``` js
function MyComponent(props) {
    state = {
        error: {
            code: 4815
            text: 'Danger Will Robinson!'
        }
    }

    return (
        <div>
            <h1>Home page</h1>
            {error && <h2>Error {error.code} detected!</h2>}
        </div>
    )
}
```

## Resources

* [https://reactjs.org/docs/conditional-rendering.html](https://reactjs.org/docs/conditional-rendering.html)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)