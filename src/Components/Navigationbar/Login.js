import { logIn } from "../../libs/requests"
import { Nav } from 'react-bootstrap';

export const Login = () => {

    const handleClick = async () => {
        console.log("logger ind")
        const response = await logIn()
        console.log("frontend:", response)
    }


    return (
        //<Nav.Link onClick={handleClick}>Log In</Nav.Link>
        <Nav.Link href={"https://auth.dtu.dk/dtu/?service=" + process.env.REACT_APP_BACKEND_URL + "login"}>
            Log In
        </Nav.Link>
    )
}
