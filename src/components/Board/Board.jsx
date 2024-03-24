import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import tokenService from '../../utils/tokenService'

export default function Board() {
    const { projectId } = useParams()
    console.log('projectId: ', projectId)

    useEffect(() => {
        getUserProject()
    }, [projectId])

    async function getUserProject() {
        try {
            const response  = await fetch(`/api/projects/${projectId}`, {
                method: "GET",
                headers: {
                Authorization: "Bearer " + tokenService.getToken(),  
                },
            });
                if (!response.ok) {
                    throw new Error("Can't find that Project")
                }   
                const data = await response.json();
                const userProject = JSON.stringify(data)
                console.log(`userProject: ${userProject}`)
            
        } catch(error) {
            console.log(error)
        }

    } 

    return (
        <div>
            <h1>{projectId}</h1>
        </div>
        
    )
}