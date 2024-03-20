import React from 'react';
import { useState } from 'react';
import { Navbar, Container} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import CreateProject from '../CreateProject/CreateProject';

export default function Header({ user, handleLogout, showCreateProject, setShowCreateProject }) {
    console.log('user: ', user)

    function handleSubmit(e) {
        e.preventDefault()
        setShowCreateProject(true)
    }
    console.log('showCreateProject: ', showCreateProject)

    return (
        <>
            <Navbar className='bg-dark-subtle'>
                <Container>
                    <Navbar.Brand className="text-dark">Hello {user.username}</Navbar.Brand>
                    <Navbar.Brand 
                        className="bg-dark-subtle text-dark"                    
                        size="lg"
                        type="submit"
                        onClick={handleSubmit}    
                    ><Link to="/create">Create Project</Link></Navbar.Brand>
                    <Navbar.Brand><Link to="/login" onClick={handleLogout}>Logout</Link></Navbar.Brand>
                </Container>  
            </Navbar>
            {showCreateProject && <Outlet />}
        </>

    )
}