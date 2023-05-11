import { useEffect, useRef, useState } from 'react'

function UseRefExample() {
    const [counter, setCounter] = useState(0)

    const isInitialMount = useRef(true)
    console.log(isInitialMount)

    const inputRef = useRef(0)

    useEffect(() => {
        if(isInitialMount.current) {
            // this is our componentDidMount
            isInitialMount.current = false
        } else {
            // this is our componentDidUpdate
            console.log('runs on update')
            console.log(inputRef.current)
        }
    })

    return (
        <div>
            <h1>useRef Counter</h1>
            <h2>{counter}</h2>
            <input ref={inputRef} type='number' />
            <button onClick={() => setCounter(counter + Number(inputRef.current.value))}>Add</button>
        </div>
    )
}

export default UseRefExample