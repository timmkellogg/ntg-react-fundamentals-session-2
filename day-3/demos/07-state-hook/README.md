# useState Hook

The `useState()` hook allows for the use of stateful values without creating a class component. 

## `useState()` Example

```js
import { useState } from 'react';

function Counter() {
    // useState accepts default value as arguement
    // useState returns state value and setter function
    const [count, setCount] = useState(0)

    // count = 0
    // setCount = function to update `count`

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
    )
}
```

## Resources

* [https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html)
* [https://www.w3schools.com/react/react_usestate.asp](https://www.w3schools.com/react/react_usestate.asp)