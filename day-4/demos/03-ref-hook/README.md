# useRef Hook

The `useRef()` hook returns a mutable object whose values persist through a component rerender.

## `useRef()` - Uncontrolled Component

``` js
import { useRef } from 'react'

function UncontrolledForm() {
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(inputRef)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="" ref={inputRef} />
                <button>submit</button>
            </form>
        </div>
    )
}
...
```

## `useRef()` - With useEffect

`useRef` can also be used with `useEffect()` to recreate a class's `componentDidUpdate` lifecycle method. 

``` js
import { useEffect, useRef } from 'react'

function Example() {
    
    const isInitialMount = useRef(true) // set initalMount value to true

    useEffect(() => {
        if(isInitialMount.current) {
            //runs after first render (like componentDidMount)

            isInitialMount.current = false; // update value of initialMount.current so else case runs on next render
        } else {
            //runs after subsequent renders (like componentDidUpdate)
        }
    }, []) // values watched to trigger rerender
}
...
```

## Resources

* [https://react.dev/reference/react/useRef](https://react.dev/reference/react/useRef)
* [https://www.w3schools.com/react/react_useref.asp](https://www.w3schools.com/react/react_useref.asp)