function GameForm({ question, input, handleChangeInput, handleSubmitAnswer}) {

    return (
        <>
            <Form onSubmit={handleSubmitAnswer}>
              <Row>
                <h4>Question {question.question}</h4>
                <h5>Category: {question.category?.title}</h5>
                <h5>Value: {question.value}</h5>
              </Row>
              <Row>
                    <Form.Control 
                        value={input}
                        name='input'
                        onChange={handleChangeInput}
                    />
                    <Button type='submit'>Submit</Button>
              </Row>
            </Form>
        </>
    )
}

export default GameForm