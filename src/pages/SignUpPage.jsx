import React, { useState } from 'react';
import { Row, Col, Form, Button, Dropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../component/FormContainer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {

    const [position, setposition] = useState('Choose an option');
    const [loading, setLoading] = useState(false);
    let name;
    let email;
    let phone;
    let departmentName;
    let password;
    let confirmPassword;

    const history = useNavigate();

    const positionHandler = (e) => {
        setposition(e);
    }

    const nameHandler = (e) => {
        name = e.target.value;
    }

    const emailHandler = (e) => {
        email = e.target.value;
    }

    const phoneHandler = (e) => {
        phone = e.target.value;
    }

    const departmentNameHandler = (e) => {
        departmentName = e.target.value;
    }

    const passwordHandler = (e) => {
        password = e.target.value;
    }

    const confirmPasswordHandler = (e) => {
        confirmPassword = e.target.value;
    }

    const saveToLocal = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const handleSignUp = async () => {

        if (password === confirmPassword) {
            setLoading(true);
            saveToLocal('name', name);
            saveToLocal('email', email);
            saveToLocal('phone', phone);
            saveToLocal('position', position);
            saveToLocal('password', password);
            saveToLocal('departmentName', departmentName);
            // setTimeout(() => {
            //     history('/profile');
            // }, 100);
            history('/profile');
            setLoading(false);
        } else {
            alert('Password does not match');
            setLoading(false);
        }
    }


    return (
        <div className='bg-dark'>
            <FormContainer>
                <h1 className='text-center pt-4 pb-4 text-white'>Sign Up</h1>

                <Form className='text-white border border-secondary p-3 rounded' >
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control onChange={(e) => nameHandler(e)} type="text" placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control onChange={(e) => phoneHandler(e)} type="number" placeholder="Enter contact number" />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control onChange={(e) => departmentNameHandler(e)} type="text" placeholder="Enter name of the department" />
                    </Form.Group>
                    <Row className='mt-4'>
                        <Col>
                            <Form.Label>What is your position?</Form.Label>
                        </Col>
                        <Col className='d-flex justify-content-end'>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {position}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => positionHandler("Professor Emeritus")}>Professor Emeritus</Dropdown.Item>
                                    <Dropdown.Item onClick={() => positionHandler("Proffessor")}>Proffessor</Dropdown.Item>
                                    <Dropdown.Item onClick={() => positionHandler("Assosiate Proffessor")}>Assosiate Proffessor</Dropdown.Item>
                                    <Dropdown.Item onClick={() => positionHandler("Assistant Proffessor")}>Assistant Proffessor</Dropdown.Item>
                                    <Dropdown.Item onClick={() => positionHandler("Lecturer")}>Lecturer</Dropdown.Item>
                                    {/* <Dropdown.Item>Chairman</Dropdown.Item> */}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                    <Form.Group className='mt-2'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => emailHandler(e)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => passwordHandler(e)} type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control onChange={(e) => confirmPasswordHandler(e)} type="password" placeholder="Retype your password again" />
                    </Form.Group>

                    <div className='text-center'>
                        <Button onClick={handleSignUp} variant="primary" className='mt-4' type="submit">{loading ? 'Loading' : 'Submit'}</Button>
                        {
                            loading ? <Container className='text-center mt-3'>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </Container> : null
                        }
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