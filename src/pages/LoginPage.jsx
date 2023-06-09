import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../component/FormContainer';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className='bg-dark d-flex flex-column min-vh-100'>
            <FormContainer>
                <h1 className='text-center pt-4 pb-4 text-white'>Sign In</h1>
                <Form className='text-white border border-secondary p-3 rounded'>
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

                <Row className='py-3 text-center text-white'>
                    <Col>
                        Doesn't have any account?{' '}
                        <Link to={'/signup'}>
                            Register
                        </Link>
                    </Col>
                </Row>
            </FormContainer>
            <footer className='bg-dark text-white text-center p-4 mt-auto'>
                <p>© 2023 - Teacher Management System</p>
            </footer>
        </div>
    )
}

export default LoginPage;