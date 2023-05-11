import { useState, useEffect } from 'react'

function Jeopardy(props) {
    const [question, setQuestion] = useState({})
    const [input, setInput] = useState('')
    const [score, setScore] = useState(0)

    const fetchQuestion = () => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://jservice.io/api/random', { signal })
        .then((data) => data.json())
        .then((json) => {
            console.log(json)
            setQuestion(json[0])
            console.log(question)
        })

       //only runs when unmounting 
       return () => {
        console.log('unmounting')
        controller.abort()
       }
    }
    useEffect(fetchQuestion, [score])

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(question.answer.toUpperCase() === input.toUpperCase()) {
            alert('CORRECT!')
            setScore(score + 10)
        } else {
            alert(`WRONG! Correct Answer: ${question.answer}`)
            setScore(score - 5)
        }

        setInput('')
    }

    return (
        <div>
            <h1>Jeopardy!</h1>
            <div>
                <div>{question.question}</div>
                <hr />
                <h2>Score: {score}</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={input} />
                    <button>answer</button>
                </form>
            </div>
        </div>
    )
}

export default Jeopardy





// class Jeopardy extends React.Component {
    // state = {
    //   question: {}
    // }
  
//     getNewQuestion() {
//       axios.get('http://jservice.io/api/random’)
//       .then(result => {
//           this.setState({ question: result.data[0] })
//       })
//     }
  
//     // calls this.getNewQuestion() after component mounts  
//  componentDidMount() {
//       this.getNewQuestion()
//     }
//   render() {
    //   return (
    //     <div>
    //       {JSON.stringify(this.state.question)}
    //     </div>
//       )
//     }
//   }
  