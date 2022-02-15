
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import logo from '../../../images/logo/watch.png';


const Header = () => {
    const { user, logOut, } = useAuth();
    return (
        <>
            <Navbar className="nv-bg" collapseOnSelect expand="lg" sticky="top" variant="dark">
                <Container>
                    <img className="logo1" src={logo} alt="" />
                    <Link className="logo-name" to="/home">Time Keeper</Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link className="nav-link" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="nav-link" as={HashLink} to="/home#watches">Watches</Nav.Link>
                        <Link className="nav-link2" to="/addservice">Custom Watch</Link>
                        <Link className="nav-link3" to="/manageservice">Manage Service</Link>
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="dark">Logout</Button> :
                            <Nav.Link className="nav-link" as={Link} to="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            <img className="profile" src={user.photoURL} alt="" />
                            <a href="#login">{user?.displayName}</a>


                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;