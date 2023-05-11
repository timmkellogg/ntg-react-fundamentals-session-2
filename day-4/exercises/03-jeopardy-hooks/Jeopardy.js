import { Component } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Jeopardy extends Component {
  state = {
    question: {},
    score: 0,
    input: '',
  }

  getNewQuestion = () => {
    axios.get('http://jservice.io/api/random').then((result) => {
        console.log(result.data[0])
      this.setState({
        question: result.data[0],
      })
    })
  }

  componentDidMount() {
    this.getNewQuestion()
  }

  handleChangeInput = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault()

    if (!this.state.input) return

    if (this.state.question.answer.includes(this.state.input)) {
        this.setState({ score: this.state.score + this.state.question.value, input: '' })
    } else {
        alert(`Correct answer: ${this.state.question.answer}`)
        this.setState({ score: this.state.score - this.state.question.value, input: '' })
    }

    this.getNewQuestion()
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs="6" className="text-center">
            <h3>Jeopardy</h3>
            <h3>Score: {this.state.score}</h3>
            <Button variant="primary" onClick={this.getNewQuestion}>
              Skip
            </Button>
          </Col>
          <Col xs="12">
            <Form onSubmit={this.handleSubmitAnswer}>
              <Row>
                <h4>Question {this.state.question.question}</h4>
                <h5>Category: {this.state.question.category?.title}</h5>
                <h5>Value: {this.state.question.value}</h5>
              </Row>
              <Row>
                    <Form.Control 
                        value={this.state.input}
                        name='input'
                        onChange={this.handleChangeInput}
                    />
                    <Button type='submit'>Submit</Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Jeopardy
