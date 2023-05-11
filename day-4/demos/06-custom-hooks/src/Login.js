import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './contexts/authContext'

function Login() {
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if(auth.user) {
            navigate('/')
        }
    }, [])

    const { from } = location.state || { from: { pathname: '/' }}

    const handleLogin = (event) => {
        event.preventDefault()

        auth.signin({ username: username, password: password }, (error) => {
            //callback function

            navigate(from)
    
        })

        console.log(auth)
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button>login</button>
            </form>
        </div>
    )
}

export default Login