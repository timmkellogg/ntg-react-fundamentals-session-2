import { useState, useEffect } from 'react'

import { useUser } from './contexts/userContext';

function Jeopardy(props) { //props.user
    const [input, setInput] = useState('')
    const [question, setQuestion] = useState({})
    const [score, setScore] = useState(0)

    const auth = useUser()

    useEffect(() => {
        //componentDidMount
        console.log('component mounted')

        const controller = new AbortController()
        const signal = controller.signal
        
        fetch('https://jservice.io/api/random', { signal:signal })
        .then((data) => data.json())
        .then((json) => {
            console.log(json[0])
            setQuestion(json[0])
        })

        //componentWillUnmount
        return () => {
            console.log('unmounting')
            controller.abort()
        }

       // Parameters to watch to run componentDidUpdate
    }, [score])

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(question.answer.toUpperCase() === input.toUpperCase()) {
            alert('CORRECT')
            setScore(score + 100)
        } else {
            alert(`WRONG - Correct Answer: ${question.answer}`)
            setScore(score - 100)
        }

        setInput('')
    }

    return (
        <div>
            <h1>Jeopardy!</h1>
            <h3>Good luck, {auth.user.username}</h3>

            <div>{question.question}</div>

            <hr />
            <h2>Score: {score}</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Jeopardy