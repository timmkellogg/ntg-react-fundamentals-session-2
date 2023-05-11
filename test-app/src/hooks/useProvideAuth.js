import { useState } from 'react'

function useProvideAuth() {
    const [user, setUser] = useState(null)

    const signin = ({ username, password }, callback) => {
        
        setUser({ username: username })

        callback()
    } 

    const signout = (callback) => {

        setUser(null)

        callback()
    }


    return { user, signin, signout }
}

export default useProvideAuth