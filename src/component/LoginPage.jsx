import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from './FormContainer';

const LoginPage = () => {
    return (
        <FormContainer>
            <h1 className='text-center pt-4 pb-4'>Sign In</h1>
            <Form>
                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <div className='text-center'>
                <Button variant="primary" className='mt-4' type="submit">Submit</Button>
                </div>
            </Form>

            <Row className='py-3 text-center'>
                <Col>
                    Doesn't have any account?{' '}
                    <Link to={'/signup'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginPage