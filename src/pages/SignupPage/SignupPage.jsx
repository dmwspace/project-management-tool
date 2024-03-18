import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function SignupPage() {
    return(
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form className="mt-5">
                        <h3 className="text-center">Sign Up Here</h3>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password"></Form.Control>
                        </Form.Group>
                        <Button className="d-flex mx-auto m-3" type="submit">Submit</Button>
                        <p className='text-center'>Have an account? <Link to="/login">Login here</Link></p>
                        
                        
                    </Form>
                    
                </Col>
                <Col></Col>
            </Row>

        </Container>
    )

}