import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Col, Row } from 'react-bootstrap';

export default function Layout({ user, handleLogout}) {

    return (
        <div>
            <Header 
                user={user} 
                handleLogout={handleLogout}
            />
            <div style={{display: 'flex'}}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}
//     return (
//         <>
//         <Header 
//             user={user} 
//             handleLogout={handleLogout}
//         />
//         <Container className="grid text-center bg-dark-subtle">
//             <Row>
//                 <Col>
//                     <Sidebar />
//                 </Col>
//                 <Col className="g-col-4">
//                     <Outlet />
//                 </Col>
//             </Row> 
//         </Container>  
//     </>
//     )
// }