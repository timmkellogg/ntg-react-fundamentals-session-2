import React from 'react'
import ToDo from './ToDo'

class ToDoList extends React.Component {

    state = {
        input: '',
        tasks: []
        // tasks: JSON.parse(localStorage.getItem('tasks')) || []
    }

    componentDidMount = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        
        //tasks && this.setState({ tasks: tasks })
        if(tasks) {
            this.setState({ tasks: tasks })
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.state.tasks !== prevState.tasks) {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        }
    }

    handleAdd = (event) => {
        event.preventDefault()

        if (!this.state.input.trim()) return

        //const tasks = this.state.tasks.slice()
        //tasks.push({ name: this.state.input, completed: false })

        const tasks = [...this.state.tasks, { name: this.state.input, completed: false }]
        
        this.setState({ tasks: tasks, input: '' })
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    handleRemove = (index) => {
        // makes a copy of tasks state with slice (same as below)
        const tasks = this.state.tasks.slice()

        tasks.splice(index, 1)

        this.setState({ tasks: tasks })
    }

    handleToggle = (index) => {
        //makes a copy of tasks state with spread operator (same as above)
        const tasks = [...this.state.tasks]

        tasks[index].completed = !tasks[index].completed

        this.setState({ tasks })
    }

    componentWillUnmount = () => {
        //stop fetch request to DB if unmounted
    }


    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <form onSubmit={this.handleAdd}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button disabled={!this.state.input.trim()}>add todo</button>
                </form>

                {this.state.tasks.length === 0

                    // if no tasks
                    ? <h2>No tasks to do. Lucky you!</h2>
                    
                    // if tasks
                    : <ul>
                        {this.state.tasks.map((task, index) => {
                            return (
                                <ToDo
                                    key={index}
                                    index={index}
                                    task={task}
                                    handleToggle={this.handleToggle}
                                    handleRemove={this.handleRemove}
                                />
                            )
                        })}
                    </ul>
                }
            </div>
        )
    }
}

export default ToDoList

/*

render / return
state / props
methods


array
function to check that items are complete
function to add new todos


*/