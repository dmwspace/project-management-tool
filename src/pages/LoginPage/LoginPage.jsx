import React from 'react';
import { useState } from 'react';
import userService from "../../utils/userService"
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function LoginPage({ handleSignUpOrLogin }){

   const [state, setState] = useState({
    email: "",
    password: ""
   })

   const [error, setError] = useState("")

   const navigate = useNavigate();

   function handleChange(e) {
    setState({...state, [e.target.name]: e.target.value})
   }

   async function handleSubmit(e) {
    e.preventDefault()
    try {
      await userService.login(state)
      navigate("/");
      handleSignUpOrLogin()
    } catch(err) {
      console.log(err);
      setError("check terminal and console")
    }
   }

    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form className="mt-5" onSubmit={handleSubmit}>
              <h3 className='text-center'>Login Here</h3>
              <Form.Group className='mb-3' controlId="loginForm.email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3' controlId='loginForm.password'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                ></Form.Control>
              </Form.Group>
              <Button 
                className='d-flex mx-auto mb-3' 
                variant="primary" 
                type="submit"
              >
                Submit
              </Button>
              <p className='text-center'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </Form>
            {error ? <ErrorMessage error={error} /> : null}
          </Col>
          <Col></Col>
        </Row>
      </Container>

      );
}

