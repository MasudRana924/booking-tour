import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import './Header.css'
import useFirebase from './../Hooks/useFirebase';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <Container fluid className="bg-white text-dark header">
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="white" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="text-primary fs-1">TourInfo.BD</Navbar.Brand>
                    <Navbar.Toggle className="bg-primary" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/contact">Contact US</NavLink>
                            <NavLink to="/booking">Booking</NavLink>


                        </Nav>
                        <Nav>

                            {user.email && <span style={{ color: 'red', fontSize: '10px' }}>Welcome , {user.displayName} </span>}
                            {
                                user.email ? <button onClick={logOut}className="btn btn-danger h-25 ms-1">Logout</button> :
                                    <NavLink to="/login">
                                         <button className="btn btn-secondary  text-center">SignIn</button></NavLink>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;