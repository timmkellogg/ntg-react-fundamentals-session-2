import { Component } from 'react'

class Counter extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: props.initialCount
    //     }

    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    state = {
        count: this.props.initialCount || 0
    }

    handleIncrement = () => {
        if(this.state.count >= 20) return
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrement = () => {
        if(this.state.count <= 0) return
        this.setState({ count: this.state.count -1 })
    }

    handleReset = () => {
        this.setState({ count: this.props.initialCount })
    }
    
    render() {
        return (
            <div>
                <h2 style={{backgroundColor: this.state.count > 10 && 'red'}}>Count: {this.state.count}</h2>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

export default Counter