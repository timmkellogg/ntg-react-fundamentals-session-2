import { Component } from 'react'

class ControlledForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        likesPineapple: true,
        formSubmitted: false
    }

    handleChange = (event) => {
        const { name, value, checked } = event.target // event.target === input
        
        if (name === 'likesPineapple') {
            this.setState({ [name]: checked })
        } else {
            this.setState({ [name]: value })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({ formSubmitted: true })
    }

    handleReset = () => {
        this.setState({ formSubmitted: false, firstName: '', lastName: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Controlled Form</h2>

                    <input name='firstName' placeholder='first name' value={this.state.firstName} onChange={this.handleChange} />

                    <input name='lastName' placeholder='last name' value={this.state.lastName} onChange={this.handleChange} />

                    <button>submit</button>

                    <label>Likes pineapple</label>

                    <input name='likesPineapple' type='checkbox' checked={this.state.likesPineapple} onChange={this.handleChange}></input>
                    
                </form>
                <button onClick={this.handleReset}>reset form</button>
                <div>
                    <h3>First Name input: {this.state.formSubmitted && this.state.firstName }</h3>
                    <h3>Last Name input: {this.state.formSubmitted && this.state.lastName }</h3>
                </div>
            </div>
        )
    }
}

export default ControlledForm