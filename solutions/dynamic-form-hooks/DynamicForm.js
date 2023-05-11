import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function DynamicForm() {
  const [teams, setTeams] = useState([{ name: '', motto: '', wins: 0, losses: 0 }])

  const handleAddTeam = () => {
    const values = [...teams]
    values.push({
      name: '',
      motto: '',
      wins: 0,
      losses: 0,
    })
    setTeams(values)
  }

  const handleRemoveTeam = (index) => {
    const values = [...teams]
    values.splice(index, 1)
    setTeams(values)
  }

  const handleInputChange = (index, event) => {
    const values = [...teams]
    const updatedValue = event.target.name
    values[index][updatedValue] = event.target.value

    setTeams(values)
  }

  const handleSubmitTeams = (e) => {
    e.preventDefault()

    console.log(teams)
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="6" className="text-center">
          <h3>Team Registration (Dynamic Form)</h3>
          <Button variant="primary" onClick={handleAddTeam}>
            Add Team
          </Button>
          <Button variant="primary" onClick={handleSubmitTeams}>
            Submit Form
          </Button>
        </Col>
        <Col xs="12">
          <Form>
            <Row className="justify-content-center">
              {teams.length > 0 && (
                <>
                  {teams.map((field, index) => (
                    <Col xs="4" key={index}>
                      <div>
                        <h4>Team {index + 1}</h4>

                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          value={field.name}
                          onChange={(event) => handleInputChange(index, event)}
                        />

                        <Form.Control
                          type="text"
                          name="motto"
                          placeholder="Enter Team Motto"
                          value={field.description}
                          onChange={(event) => handleInputChange(index, event)}
                        />

                        <Form.Control
                          type="number"
                          name="wins"
                          placeholder="Enter Wins"
                          value={field.wins}
                          onChange={(event) => handleInputChange(index, event)}
                        />

                        <Form.Control
                          type="number"
                          name="losses"
                          placeholder="Enter Losses"
                          value={field.losses}
                          onChange={(event) => handleInputChange(index, event)}
                        />

                        <Button
                          variant="secondary"
                          onClick={() => handleRemoveTeam(index)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </Col>
                  ))}
                </>
              )}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default DynamicForm
