import { Component } from 'react'
import axios from 'axios'

class Jeopardy extends Component {

    state = {
        question: {},
        score: 0
    }

    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        axios.get('http://jservice.io/api/random').then(result => {
            this.setState({
                question: result.data[0]
            })
        })
    }

    //when the component mounts, get the first question
    componentDidMount() {
        this.getNewQuestion()
    }

    //display the results on the screen
    render() {
        return (
            <div>
                {JSON.stringify(this.state.question)}
            </div>
        )
    }
}

export default Jeopardy