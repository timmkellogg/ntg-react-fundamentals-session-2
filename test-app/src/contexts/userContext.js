import { createContext, useContext } from 'react'

import useProvideAuth from '../hooks/useProvideAuth'

const userContext = createContext(null)

function UserProvider({ children }) {
    const user = useProvideAuth()

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

function useUser() {
    return useContext(userContext)
}

export { UserProvider, useUser }