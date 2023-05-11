import { Navigate, Outlet } from 'react-router-dom'

import { useUser } from "./contexts/userContext"

function RequireAuth() {
    const auth = useUser()

    if(!auth.user) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}

export default RequireAuth