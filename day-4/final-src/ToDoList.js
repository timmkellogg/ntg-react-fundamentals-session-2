import { Component } from 'react'

import ToDo from './ToDo'

class ToDoList extends Component {

    state = {
        tasks: [],
        input: ''
    }

    componentDidMount = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))

        if (tasks) {
            this.setState({ tasks: tasks })
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('component updated')

        if (this.state.tasks !== prevState.tasks) {
            console.log('tasks updated')
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        }
    }

    componentWillUnmount = () => {
        console.log('unmounting')
    }

    handleAdd = (event) => {
        event.preventDefault()

        //const tasks = [...this.state.tasks, this.state.value]

        this.setState({ tasks: [...this.state.tasks, { taskName: this.state.input, completed: false }], input: '' })

    }

    handleDelete = (index) => {
        const tasks = [...this.state.tasks]

        tasks.splice(index, 1)

        this.setState({ tasks: tasks })
    }

    handleToggle = (index) => {
        const tasks = [...this.state.tasks]

        tasks[index].completed = !tasks[index].completed

        this.setState({ tasks: tasks })
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <form onSubmit={this.handleAdd}>
                    <input onChange={this.handleChange} value={this.state.input} />
                    <button>add todo</button>
                </form>
                {this.state.tasks.length === 0
                    ? <h2>No tasks to do. Lucky you!</h2>

                    : <ul>
                        {this.state.tasks.map((item, index) => {
                            return (
                                <ToDo
                                    key={index}
                                    index={index}
                                    item={item}
                                    handleToggle={this.handleToggle}
                                    handleDelete={this.handleDelete}
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

list element
checkbox / way to complete item
input box
button

dropdown item?
radio button?

*/

