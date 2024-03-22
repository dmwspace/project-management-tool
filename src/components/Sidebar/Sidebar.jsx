import React from 'react';
import { 
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarContent
} from 'cdbreact';

 

export default function Sidebar({ projects }) {

    const projectList = projects.map(project => {
        return (
            <p>{project.title}</p>
        )
    })

    return (
        <div style={{ display: 'flex', height: '100vh'}}>
            <CDBSidebar className='bg-dark d-flex text-center'>
                <CDBSidebarHeader>Your Projects</CDBSidebarHeader>
                <CDBSidebarContent>{projectList}</CDBSidebarContent>
            </CDBSidebar>
        </div>
    )
}