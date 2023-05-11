import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useUser } from './contexts/userContext'

function Login() {
    const user = useUser()
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()

        user.signin({ username, password }, () => {
            navigate('/jeopardy')
        })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input 
                    name='username' 
                    placeholder='username' 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input 
                    name='password'
                    placeholder='password' 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button>login</button>
            </form>
        </div>
    )
}

export default Login