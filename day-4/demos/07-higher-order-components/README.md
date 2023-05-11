# Higher Order Components

Higher Order Components (HOCs) are functions that return new components, allowing the sharing of functionality.

## Defining a HOC

``` js 
import { useState } from 'react'

const withCounter = WrappedComponent => {
    function WithCounter(props) {
        const [count, setCount] = useState(0)

        const incrementCount = () => setCount(count + 1)

        const decrementCount = () => setCount(count - 1)

        return (
            <WrappedComponent 
                count={count} 
                incrementCount={incrementCount} 
                decrementCount={decrementCount}
                {...props}
            />
        )
    }

    return WithCounter
}

export default withCounter
```

## Using a HOC

``` js
import withCounter from './withCounter'

function SomeCountingComponent(props) {
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.incrementCount}>Increment</button>
            <button onClick={props.decrementCount}>Decrement</button>
        </div>
    )
}

export default withCount(SomeCountingComponents)

```

## Resources

* [https://reactjs.org/docs/higher-order-components.html](https://reactjs.org/docs/higher-order-components.html)