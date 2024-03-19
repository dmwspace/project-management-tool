import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header({ user, handleLogout }) {
    console.log('user: ', user)
    return (
        <Navbar className='bg-secondary bs-secondary-text'>
            <Container>
                <Navbar.Brand>Hello {user.username}</Navbar.Brand>
                <Navbar.Brand><Link to="/login" onClick={handleLogout}>Logout</Link></Navbar.Brand>
            </Container>
        </Navbar>
    )
}