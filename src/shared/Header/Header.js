import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handelSignout =() =>{
      signOut(auth);
    }
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
  <Container>
  <Navbar.Brand as={Link} to="/home">Boi Ghor</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
    </Nav>
    <Nav>
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>

      {
        user && 
        <>
        <Nav.Link as={Link} to="/manage-book">Manage Book</Nav.Link>
        <Nav.Link as={Link} to="/add-book">Add Book</Nav.Link>
        <Nav.Link as={Link} to="/my-book">My Book</Nav.Link>
          </>
        
        }
      {
        user ? <Nav.Link onClick={handelSignout}>Logout</Nav.Link> :<Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;