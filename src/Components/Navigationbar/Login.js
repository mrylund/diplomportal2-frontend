import { logIn } from "../../libs/requests"
import { Nav } from 'react-bootstrap';



export const Login = () => {

    const handleClick = async () => {
        console.log("logger ind")
        const response = await logIn()
        console.log("har ventet log ind")
        window.location.replace("http://localhost:3000/")
        console.log("login:", response.data.token)
    }

    return (
        //<Nav.Link onClick={handleClick}>Log In</Nav.Link>
        <Nav.Link href="https://auth.dtu.dk/dtu/?service=http://localhost:443/login">
            Log In
        </Nav.Link>
    )
}