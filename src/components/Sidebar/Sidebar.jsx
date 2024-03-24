import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
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
    //console.log('projects: ', projects)
    const navigate = useNavigate()

    async function handleDeleteProject(e) {
        try { 
            const projectId = e.target.value
            const response = await fetch(`/api/projects/${projectId}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                  }
            })
            const data = await response.json()
            console.log('data from handleDeleteProject: ', data)
            setProjects(ProjectModel)
        } catch(error) {
            console.log(error)
        }
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
          console.log('data from getProjectTitles: ', data)
          setProjects(data.projectModel)
        } catch(error) {
          console.log(error)
        }
    
      }
    
    
      useEffect(() => {
        getProjectTitles()
        console.log('projects in useEffect: ', projects)
      }, [location.pathname])

    const projectList = projects.map((project, index) => {
        //console.log('projects in projectList.map: ', projects)
        return (
            <tbody>
                <td><Link to={project._id}><h4 key={index}>{project.title}</h4></Link> </td>
                <td>
                    <CDBBtn 
                        type="submit"
                        onClick={handleDeleteProject}
                        title="delete"
                        value={project._id}
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