import { logIn } from "../../libs/requests"
import { Nav } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { deleteTokenFromClient, getTokenFromClient, isUserAuthorized } from "../../utils";

export const Login = () => {

    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        const checkUserAuth = async () => {
            const isAuth = await isUserAuthorized()
            setIsAuthorized(isAuth)

            if (isAuth) {
                deleteTokenFromClient()
                window.location.href="/"
            } else {
                window.location.href="https://auth.dtu.dk/dtu/?service=" + process.env.REACT_APP_BACKEND_URL + "login"
            }
        }

        checkUserAuth()
    }, [])


    // const [loaded, setLoaded] = useState(false)
    // const [loggedin, setLoggedin] = useState(false)

    // useEffect(() => {
    //     const isLoggedIn = !!getTokenFromClient()
    //     setLoggedin(isLoggedIn)
    //     if (!isLoggedIn) {
    //         window.location.href="https://auth.dtu.dk/dtu/?service=" + process.env.REACT_APP_BACKEND_URL + "login"
    //     } else {
            
    //     }
    //     setLoaded(true)
    // },[])

    const handleClick = async () => {
        const response = await logIn()
    }


    return (
        isAuthorized
        ? <p>Logger dig af...</p>
        : <p>Logger dig ind på Diplomportal 2.0</p>
    )
}
