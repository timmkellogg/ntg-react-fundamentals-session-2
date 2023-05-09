# Controlled Components

## Controlling an Input

``` js
class SomeForm extends React.Component {
    
    state = {
        input: ''
    }

    handleChange = (e) => [
        this.setState({ input: e.target.value })
    ]

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange}>
            </div>
        )
    }
}
```

## Controlling Multiple Fields

``` js
class SomeForm extends React.Component {
    
    state = {
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => [
        // Destruture name and value from event object
        const { name, value } = e;

        // Use name as key
        this.setState({ [name]: value })
    ]

    render() {
        return (
            <div>
                <input name='firstName' value={this.state.firstName} onChange={this.handleChange}>
                <input name='lastName' value={this.state.lastName} onChange={this.handleChange}>
            </div>
        )
    }
}
```

## Submitting Forms

``` js
class SomeForm extends React.Component {
    
    state = {
        username: '',
        password: '',
        rememberMe: false
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log(this.state.username, this.state.password, this.state.rememberMe)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='username' value={this.state.username} onChange={this.handleChange} />
                <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        )
    }
}
```

## Resources

* [https://reactjs.org/docs/forms.html](https://reactjs.org/docs/forms.html)