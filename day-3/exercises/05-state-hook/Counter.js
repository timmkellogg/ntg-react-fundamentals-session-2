import { Component } from 'react'

class Counter extends Component {

    state = {
        count: 0
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter