import React from 'react';
import { useState } from 'react';
import { CDBContainer, CDBCard, CDBInput, CDBBtn, CDBCardBody} from 'cdbreact'

export default function CreateProject() {
    const [projectTitle, setProjectTitle] = useState("")
    return (
        <CDBContainer style={{ width: '30rem' }}>
            <CDBCard className="m-3">
                <CDBCardBody className="mx-4">
                    <div className="text-center m-3" >
                        <p className="h4">Enter project title</p>
                    </div>
                    <CDBInput
                        type="text"
                        color="primary"
                    ></CDBInput>
                    <div>
                        <CDBBtn className='d-flex mx-auto m-3'>Create Project</CDBBtn>
                    </div>   
                </CDBCardBody>
            </CDBCard>
        </CDBContainer>
    )
}
