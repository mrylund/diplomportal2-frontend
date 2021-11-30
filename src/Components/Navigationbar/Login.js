import { logIn } from "../../libs/requests"
import { Nav } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { deleteTokenFromClient, getTokenFromClient } from "../../utils";

export const Login = () => {

    const [loaded, setLoaded] = useState(false)
    const [loggedin, setLoggedin] = useState(false)

    useEffect(() => {
        const isLoggedIn = !!getTokenFromClient()
        setLoggedin(isLoggedIn)
        if (!isLoggedIn) {
            window.location.href="https://auth.dtu.dk/dtu/?service=" + process.env.REACT_APP_BACKEND_URL + "login"
        } else {
            deleteTokenFromClient()
            window.location.href="https://auth.dtu.dk/dtu/logout"
        }
        setLoaded(true)
    },[])

    const handleClick = async () => {
        const response = await logIn()
    }


    return (
        loggedin
        ? <p>Log ind på Diplomportal 2.0</p>
        : <p>Log af Diplomportal 2.0</p>
    )
}
