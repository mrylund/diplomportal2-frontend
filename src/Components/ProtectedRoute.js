import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { isUserAdmin, isUserAuthorized } from '../utils'
import { NotAdminPage, NotLoggedInPage } from './AuthException'

/**
 * Shows the component if the user is logged in otherwise errorpage
 * @returns The component if the user is logged in
 */
export const ProtectedRoute = ({component: Component, ...rest}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            const loggedIn = await isUserAuthorized()
            setIsLoggedIn(loggedIn)
            setLoading(false)
        }
        checkAuth()
    }, [])

    return (
        <Route 
            {...rest}
            render={(props) => {
                if (isLoggedIn) {
                    return <Component {...props}/>
                } else if (isLoading) {
                        return <div>  </div>
                } else {
                    return <NotLoggedInPage />
                }
            }}
        />
    )
}


/**
 * Shows the component if user is admin otherwise errorpage
 * @returns The component if the user is admin in the DB
 */
export const AdminRoute = ({component: Component, ...rest}) => {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const checkAdmin = async () => {
            const admin = await isUserAdmin()
            setIsAdmin(admin)
        }
        checkAdmin()
    }, [])

    return (
        <Route 
            {...rest}
            render={(props) => {
                if (isAdmin) {
                    return <Component {...rest} {...props}/>
                } else {
                    return <NotAdminPage />
                }
            }}
        />
    )
}