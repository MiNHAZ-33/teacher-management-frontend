import React from 'react';
import { Row, Col, Form, Button, Dropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from './FormContainer';

const SignUpPage = () => {
    return (
        <div className='bg-dark'>
            <FormContainer>
                <h1 className='text-center pt-4 pb-4 text-white'>Sign Up</h1>

                <Form className='text-white border border-secondary p-3 rounded' >
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter contact number" />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name of the department" />
                    </Form.Group>
                    <Row className='mt-4'>
                        <Col>
                            <Form.Label>What is your position?</Form.Label>
                        </Col>
                        <Col className='d-flex justify-content-end'>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Choose an option
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Lecturer</Dropdown.Item>
                                    <Dropdown.Item>Assistant Proffessor</Dropdown.Item>
                                    <Dropdown.Item>Assosiate Proffessor</Dropdown.Item>
                                    <Dropdown.Item>Proffessor</Dropdown.Item>
                                    <Dropdown.Item>Chairman</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                    <Form.Group className='mt-2'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Retype your password again" />
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="primary" className='mt-4' type="submit">Submit</Button>
                    </div>
                </Form>

                <Row className='py-3 text-center '>
                    <Col className='text-white'>
                        Already have any account?{' '}
                        <Link to={'/login'}>
                            Login
                        </Link>
                    </Col>
                </Row>

            </FormContainer>
        </div>
    )
}

export default SignUpPage;