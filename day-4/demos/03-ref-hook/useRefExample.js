import { useEffect, useRef, useState } from 'react'

function UseRefExample() {
    const [counter, setCounter] = useState(0)

    const isInitialMount = useRef()
    console.log(isInitialMount)

    const inputRef = useRef()

    useEffect(() => {
        if(isInitialMount.current) {
            isInitialMount.current = false
        } else {
            console.log('runs on update')
        }
    })

    return (
        <div>
            To Do Hooks
            <h1>{counter}</h1>
            <input ref={inputRef} type='number' />
            <button onClick={() => setCounter(counter + Number(inputRef.current.value))}>Add</button>
        </div>
    )
}

export default UseRefExample