import { useState } from 'react'

function useProvideAuth() {
    const [user, setUser] = useState()

    const signin = ({ username, password }, callback) => {
        
        setUser({ username: username, password: password })

        callback()
    }

    const signout = (callback) => {
        setUser(null)

        callback()
    }

    return { user, signin, signout }

}

export default useProvideAuth