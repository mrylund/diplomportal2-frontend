import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import d_logo from '@images/d_logo.png'
import { CourseDropdown } from './CourseDropdown'
import { Navbar, Container, NavbarBrand, Nav } from 'react-bootstrap';
import '../../styles/Navbar.css';
import { Login } from './Login';

export const MyNavbar = () => {
    return (
        <div>
            <Navbar className="navbar-bg" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img
                            alt=""
                            src={d_logo}
                            height="150"

                            className="align-top"
                        />
                    </NavbarBrand>
                    <div className="navbar-title"> <a href="/"> Diplomportal 2.0 </a> </div>

                    <Container>
                        <Navbar id="basic-navbar-nav">
                            <Nav className="me-auto navbar-content">
                                <Nav.Link  href="/">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <CourseDropdown />
                                <Login />
                            </Nav>
                        </Navbar>
                    </Container>

                </Container>

            </Navbar>
        </div>
    )
}
