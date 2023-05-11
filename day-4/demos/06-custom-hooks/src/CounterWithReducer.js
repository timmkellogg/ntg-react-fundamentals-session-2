import { useState, useReducer } from 'react';

function CounterWithReducer() {
    const [input, setInput] = useState(0)
                            //first arg, reducer function
    const [count, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'increment':
                return state + (action.payload || 1)
            case 'decrement':
                return state - (action.payload || 1)
            default:
                return state
        }
        //second arg, initial value
    }, 0)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: 'increment', payload: Number(input) })}>Increment</button>
            <input type='number' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => dispatch({ type: 'decrement', payload: Number(input) })}>Decrement</button>
        </div>
    )
}

export default CounterWithReducer