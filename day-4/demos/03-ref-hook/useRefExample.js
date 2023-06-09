import { useEffect, useRef, useState } from 'react'

function UseRefExample() {
    const [counter, setCounter] = useState(0)

    const isInitialMount = useRef(true)

    const inputRef = useRef()

    useEffect(() => {
        if(isInitialMount.current) {
            isInitialMount.current = false
        } else {
            console.log('runs on update')
            console.log(inputRef.current.value)
        }
    })

    return (
        <div>
            <h1>useRef Example</h1>
            <h2>{counter}</h2>
            <input ref={inputRef} type='number' />
            <button onClick={() => setCounter(counter + Number(inputRef.current.value))}>Add</button>
        </div>
    )
}

export default UseRefExample