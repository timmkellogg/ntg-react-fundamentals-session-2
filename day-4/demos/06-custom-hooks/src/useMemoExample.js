import { useState, useMemo } from 'react'

function useMemoExample() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    // const isCountOneEven = () => {
    //     let i = 0
    //     //arbitrarily slowing down function
    //     while (i < 2000000000) i++
    //     return countOne % 2 === 0
    // }

    const isCountOneEven = useMemo(() => {
        let i = 0
        //arbitrarily slowing down function
        while (i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne])

    return (
        <div>
            <div>
                <button onClick={() => setCountOne(countOne + 1)}>Count One - {countOne}</button>
                <span>{isCountOneEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={() => setCountTwo(countTwo + 1)}>Count Two - {countTwo}</button>
            </div>
        </div>
    )
}

export default useMemoExample