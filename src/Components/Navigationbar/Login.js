import { useEffect, useState } from "react";
import { deleteTokenFromClient, isUserAuthorized } from "../../utils";

export const Login = () => {

    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        const checkUserAuth = async () => {
            const isAuth = await isUserAuthorized()
            setIsAuthorized(isAuth)

            // If the user is already logged in - log them out
            if (isAuth) {
                deleteTokenFromClient()
                window.location.href="/"
            // Else we log them in
            } else {
                window.location.href="https://auth.dtu.dk/dtu/?service=" + process.env.REACT_APP_BACKEND_URL + "login"
            }
        }

        checkUserAuth()
    }, [])

    return (
        isAuthorized
        ? <p>Logger dig af...</p>
        : <p>Logger dig ind på Diplomportal 2.0</p>
    )
}
