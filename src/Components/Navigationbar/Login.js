import { logIn } from "../../libs/requests"
import { Nav } from 'react-bootstrap';

export const Login = () => {

    const handleClick = async () => {
        const response = await logIn()
    }


    return (
        <div>
            <p>Log ind på Diplomportal 2.0</p>
            {/* <Nav.Link onClick={handleClick}>Log In</Nav.Link> */}
            <Nav.Link href={"https://auth.dtu.dk/dtu/?service=" + process.env.REACT_APP_BACKEND_URL + "login"}>
                Log In
            </Nav.Link>
        </div>
    )
}
