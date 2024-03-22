import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header';
import CreateProject from '../../components/CreateProject/CreateProject';
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../../components/Sidebar/Sidebar';

export default function MainPage({ user, handleLogout }) {

    const [showCreateProject, setShowCreateProject] = useState(false)

    return (
        <div style={{width: 'auto'}}>
            <Header 
                user={user} 
                showCreateProject={showCreateProject} 
                setShowCreateProject={setShowCreateProject}
                handleLogout={handleLogout}
            />
            <Container className="grid text-center bg-dark-subtle">
                <div>
                    <Col>
                        <Sidebar />
                    </Col>
                    <Col className="g-col-4">
                    {showCreateProject && <Outlet />}
                    </Col>
                </div>

            </Container>  
        </div>

    )
    
}