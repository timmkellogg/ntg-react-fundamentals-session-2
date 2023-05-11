import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function ReduxCounter() {
    const [input, setInput] = useState()
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Redux Counter</h1>
            <h2>Count: {count}</h2>
            <input type='number' value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: Number(input)})}>add</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: Number(input)})}>remove</button>
        </div>
    )
}

export default ReduxCounter