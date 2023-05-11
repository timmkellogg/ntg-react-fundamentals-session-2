import { useState } from 'react'

function useProvideAuth() {
    const [user, setUser] = useState();

    const signin = ({ username, password }, cb) => {
       setUser({ username, password })
       cb()
    }

    const signout = (cb) => {
        setUser(null)
        cb()
    }

    return {
        user,
        signin,
        signout
    }
}

export default useProvideAuth