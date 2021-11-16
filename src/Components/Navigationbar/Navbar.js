import React from 'react';
import {
    Nav,
    NavLogo,
    Bars,
    NavLink,
    NavLinkTitle,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import d_logo from '@images/d_logo.png'
import { CourseDropdown } from './CourseDropdown'
import '../../styles/Navbar.css';
import { Login } from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import { getCurrentUser } from '../../libs/requests';

export const NavBar = () => {

    //const isCurrentUserAdmin = getCurrentUser(window.localStorage[])

    return (
        <>
            <Nav>
                <NavLogo to='/'>
                    <img
                        alt=""
                        src={d_logo}
                        height="75"
                        className="align-top"
                    />
                </NavLogo>
                <NavLinkTitle to='/'>
                    Diplomportal 2.0
                </NavLinkTitle>
                <Bars/>
                <NavMenu>
                    <NavLink to='/about'>
                        Om
                    </NavLink>
                    <NavLink to='/profile'>
                        Profil
                    </NavLink>
                    <CourseDropdown/>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Log ind</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};