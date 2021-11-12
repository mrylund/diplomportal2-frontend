import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #E5E9FF;
  height: 100px;
  display: flex;
  padding: 0;
  z-index: 10;
  /* Third Nav */
`;

export const NavLink = styled(Link)`
  color: #064FBD;
  display: flex;
  text-decoration: none;
  padding: 0;
  margin: 50px;
  cursor: pointer;
 &:hover {
   text-decoration: underline;
  }
`;

export const NavLinkTitle = styled(Link)`
  color: #064FBD;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  text-align: left;
  color: #064FBD;
  font-size: 27px;
  font-family: QuicksandBold, serif;
  white-space: nowrap;
  height: 100%;
  cursor: pointer;
  
  @media screen and (max-width: 480px) {
  display: none;
  }
`;

export const NavLogo = styled(Link)`
  color: #064FBD;
  display: flex;
  align-items: center;
  color: #064FBD;
  cursor: pointer;
  
  @media screen and (max-width: 920px) {
    align-items: center;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 920px) {
    display: block;
    position: absolute;
    top: 40px;
    right: 55px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 50px;
  justify-content: flex-end;
  width: 100vw; 
  
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  line-height: 2.5;
  height: 65px;
  width: 150px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;