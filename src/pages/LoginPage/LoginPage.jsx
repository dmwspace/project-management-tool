import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function LoginPage(){
   
    return (
      <Container>

        <Row>
          <Col></Col>
          <Col>
            <Form className="mt-5">
              <h3 className='text-center'>Login Here</h3>
              <Form.Group className='mb-3' controlId="loginForm.email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder='Enter email'></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3' type="password" placeholder="Password" controlId='loginForm.password'>
                <Form.Label>Password</Form.Label>
                <Form.Control></Form.Control>
              </Form.Group>
              <Button className='d-flex mx-auto mb-2' variant="primary" type="submit">
                Submit
              </Button>
              <p className='text-center'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </Form>
          </Col>
          <Col></Col>
        </Row>

      </Container>

      );
}

