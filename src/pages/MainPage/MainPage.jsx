import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import CreateProject from '../../components/CreateProject/CreateProject';


export default function MainPage({ user, handleLogout }) {

    const [showCreateProject, setShowCreateProject] = useState(false)

    return (
            <Header 
                user={user} 
                showCreateProject={showCreateProject} 
                setShowCreateProject={setShowCreateProject}
                handleLogout={handleLogout}
            />   
    )
    
}