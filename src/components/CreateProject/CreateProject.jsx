import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useOutletContext } from 'react-router-dom';
import { CDBContainer, CDBCard, CDBInput, CDBBtn, CDBCardBody} from 'cdbreact'
import tokenService from '../../utils/tokenService';

export default function CreateProject({ projects, setProjects}) {
    const navigate = useNavigate()
    const [projectTitle, setProjectTitle] = useState("");
    const [error, setError] = useState("");

    function handleChange(e) {
        setProjectTitle(e.target.value)
        
    }

    async function handleAddProject() {
        try {
            const formData = {title: projectTitle}
            const response = await fetch("/api/projects", {
                method: "POST",
                body: JSON.stringify({title: projectTitle}),
                headers: {
                    Authorization: "Bearer " + tokenService.getToken(),
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            navigate(`/${data._id}`)
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }
    
    return (
        <CDBContainer style={{width: '30%'}}>
            <CDBCard className="m-3">
                <CDBCardBody className="mx-4">
                    <div className="text-center m-3" >
                        <p className="h4" >Enter project title</p>
                    </div>
                    <CDBInput
                        type="text"
                        name="projectTitle"
                        color="primary"
                        onChange={handleChange}
                    ></CDBInput>
                    <div>
                        <CDBBtn 
                            className='d-flex mx-auto m-3'
                            type='submit'
                            onClick={handleAddProject}
                        >Create Project</CDBBtn>
                    </div>   
                </CDBCardBody>
            </CDBCard>
        </CDBContainer>
    )
}
