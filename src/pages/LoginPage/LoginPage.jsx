import React from 'react';
import userService from "../../utils/userService"
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function LoginPage(){
   const [state, setState] = useState({
    
   })
    return (
      <Container>

        <Row>
          <Col></Col>
          <Col>
            <Form className="mt-5">
              <h3 className='text-center'>Login Here</h3>
              <Form.Group className='mb-3' controlId="loginForm.email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email"></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3' controlId='loginForm.password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"></Form.Control>
              </Form.Group>
              <Button className='d-flex mx-auto mb-3' variant="primary" type="submit">
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

