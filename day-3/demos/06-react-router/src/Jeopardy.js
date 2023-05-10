import { useState, useEffect } from 'react'

function Jeopardy() {
    const [input, setInput] = useState('')
    const [question, setQuestion] = useState({})

    useEffect(() => {
        //componenetDidMount
        console.log('component mounted')

        fetch('https://jservice.io/api/random')
        .then((data) => data.json())
        .then((json) => {
            console.log(json[0])
           setQuestion(json[0])
        })

    }, [])


    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(question.answer.toUpperCase() === input.toUpperCase()) {
            alert('CORRECT')
        } else {
            alert(`WRONG - Correct Answer: ${question.answer}`)
        }
    }

    return (
        <div>
            <h1>Jeopardy!</h1>

            <div>{question.question}</div>

            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Jeopardy