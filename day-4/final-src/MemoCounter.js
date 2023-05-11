import { useState, useMemo } from 'react'

function MemoCounter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const isEven = useMemo(() => {
        let i = 0
        //arbitrarily slowing down function
        while (i < 3000000000) i++
        return countOne % 2 === 0
    }, [countOne])

    // const isEven = () => {
    //     let i = 0
    //     //arbitrarily slowing down function
    //     while (i < 3000000000) i++
    //     return countOne % 2 === 0
    // }

    return (
        <div>
            <h1>useMemo Counter</h1>
            <div>
                <button onClick={() => setCountOne(countOne + 1)}>Count One - {countOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={() => setCountTwo(countTwo + 1)}>Count Two - {countTwo}</button>
            </div>
        </div>
    )
}

export default MemoCounter