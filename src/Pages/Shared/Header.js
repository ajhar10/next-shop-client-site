import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar className="poppins-font fixed-top p-3" bg="dark" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                        <h4>Next Shop</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink as={Link} activeClassName="selected" to="home">Home</NavLink>
                            <NavLink as={Link} activeClassName="selected" to="blogs">Blogs</NavLink>
                            <NavLink as={Link} activeClassName="selected" to="portfolio">Portfolio</NavLink>
                            {
                                user?.email ? <>
                                    <NavLink as={Link} activeClassName="selected" to="/dashboard">Dashboard</NavLink>
                                </> : ''
                            }
                        </Nav>

                        {user?.email ?
                            <button onClick={handleSignOut} className="btn btn-outline-light">log out</button> :
                            <NavLink as={Link} className="btn btn-light" to="login">Login</NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;