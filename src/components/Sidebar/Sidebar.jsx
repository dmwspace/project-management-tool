import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import tokenService from '../../utils/tokenService';
import { 
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarContent,
    CDBBtn
} from 'cdbreact';

 

export default function Sidebar() {

    const [projects, setProjects] = useState([])
    const location = useLocation()
    console.log('projects: ', projects)
    const navigate = useNavigate()

    function handleDeleteProject() {

    }

    async function getProjectTitles() {
        try {
          const response = await fetch("/api/projects", {
            method: "GET",
            headers: {
              Authorization: "Bearer " + tokenService.getToken(),
              // "Content-Type": "application/json"
            }
          })
    
          const data = await response.json()
          console.log('data: ', data)
          setProjects(data.projectModel)
        } catch(error) {
          console.log(error)
        }
    
      }
    
    
      useEffect(() => {
        getProjectTitles()
      }, [location.pathname])

    const projectList = projects.map((project, index) => {
        return (
            <tbody>
                <td><h4 key={index}>{project.title}</h4> </td>
                <td>
                    <CDBBtn 
                        type="submit"
                        onClick={handleDeleteProject}
                    >X</CDBBtn>
                </td>
            </tbody>

        )
        
        
    })

    return (
        <div style={{ height: '100vh'}}>
            <CDBSidebar className='bg-dark'>
                <CDBSidebarHeader>Your Projects</CDBSidebarHeader>
                <CDBSidebarContent>{projectList}</CDBSidebarContent>
            </CDBSidebar>
        </div>
    )
}