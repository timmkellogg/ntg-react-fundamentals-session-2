# Custom Hooks

## Custom `useProvideAuth()` Hook

Example of a custom hook to manage user authentication. 

``` js
function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = ({ username, password }, cb) => {
       setUser({ username, password }) // set user info passed into state
       cb() // execute callback function passed 
    }

    const signout = (cb) => {
        setUser(null) // remove user from state
        cb() // execute callback function passed 
    }


    // custom hook returns user and functions signin/signout
    return { user, signin, signout }
}
```

In a production application, `signin()` would communicate with an authentication server to verify credentials. For this example, the function will instead accept any passed objected as valid and set it into state.

## Auth Provider and useAuth() Hook

To make the best use of this hook, it needs to be wrapped in a context so that it can be initialized and used as one instance throughout the component tree.

`src/contexts/authContext.js`:
```js
import { createContext, useContext } from 'react'

// Import useProvideAuth() hook that returns { user, signin, signout }
import useProvideAuth from '../hooks/useProvideAuth'

const authContext = createContext(null)

function AuthProvider({ children }) {
    // auth = { user, signin, signout }
    const auth = useProvideAuth()

    // Pass auth as value of authContext.Provider
    // value = { user, signin, signout }
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

// Create useAuth() hook to access useProvideAuth() hook from context
function useAuth() {
    return useContext(authContext)
}

//Export AuthProvider (to be used as as wrapped in src/App.js) and useAuth() hook 
export { AuthProvider, useAuth }
```

`src/App.js`:
``` js
import { AuthProvider } from './contexts/authContext'

function App() {

    return (
        <AuthProvider>
            <LoginPage />
        </AuthProvider>
    )
}
```

## Using the `useAuth()` Hook

`src/pages/LoginPage.js`
``` js
import { useState } from 'react'
import { useAuth } from '../contexts/authContext'
import { useNavigate, useLocation } from 'react-router-dom'

function LoginPage() {
    const auth = useAuth() // returns { user, signin(), signout }
    const navigate = useNavigate()
    const location = useLocation() 
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let { from } = location.state || { from: { pathname: '/' }}

    const login = (e) => {
        e.preventDefault()
        
        // pass user object and callback
        auth.signin({ username, password }, () => {
            navigate(from) // navigate to original destination
        })
    }

    return (
        <div>
            <form onSubmit={login}>
                <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>login</button>
            </form>
        </div>
    )
}

export default LoginPage
```

## Resources

* [https://reactjs.org/docs/hooks-custom.html](https://reactjs.org/docs/hooks-custom.html)
* [https://www.w3schools.com/react/react_customhooks.asp](https://www.w3schools.com/react/react_customhooks.asp)