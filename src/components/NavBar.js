import React from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button
                    onClick={() => loginWithRedirect()}
                >Log In
                </button>
            )}

            {isAuthenticated && (
                <span>
                    <button onClick={() => logout()}>Log Out</button>
                    <Link to='/'>Home</Link>
                    <Link to='/profile'>Profile</Link>
                </span>
            )}
        </div>
    )
}

export default NavBar