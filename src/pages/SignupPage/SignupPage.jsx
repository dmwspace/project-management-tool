import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../../utils/userService';

export default function SignupPage({ handleSignUpOrLogin }) {

    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        passwordConf: ""
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setState({
            ...state, [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await userService.signup(state)
            handleSignUpOrLogin();
            navigate("/")
            console.log('state from handleSubmit: ', state)
        } catch(err) {
            console.log(err.message, ' <-this comes from the throw in utils/signup')
        }

    }

    return(
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form className="mt-5" autoComplete="off" onSubmit={handleSubmit}>
                        <h3 className="text-center">Sign Up Here</h3>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text"
                                name="username"
                                value={state.username}
                                onChange={handleChange}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password"
                                value={state.password}
                                onChange={handleChange}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password"
                                name="passwordConf"
                                value={state.passwordConf}
                                onChange={handleChange}
                                required
                            ></Form.Control>
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