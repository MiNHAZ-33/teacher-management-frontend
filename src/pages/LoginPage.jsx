import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FormContainer from '../component/FormContainer';
import './LoginPage.css';
import axios from 'axios';

const LoginPage = () => {

    let email;
    let password;

    const history = useNavigate();

    const emailHandler = (e) => {
        email = e.target.value;
    }

    const passwordHandler = (e) => {
        password = e.target.value;

    }

    const handleSignIn = async () => {

        const getMail = localStorage.getItem('email', JSON.stringify(email));
        const getPass = localStorage.getItem('password', JSON.stringify(password));

        if (getMail === email && getPass === password) {
            console.log('success');
            history('/profile');
        } else {
            alert('Invalid Email or Password');
        }

        // const requestOptions = {
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password })
        // };
        // axios.post('https://localhost:7299/api/Auth/login', requestOptions).then((res) => {
        //     console.log(res);
        // });
    }

    return (
        <div className='bg-dark d-flex flex-column min-vh-100'>
            <FormContainer>
                <h1 className='text-center pt-4 pb-4 text-white'>Sign In</h1>
                <Form className='text-white border border-secondary p-3 rounded'>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => emailHandler(e)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => passwordHandler(e)} type="password" placeholder="Enter password" />
                    </Form.Group>
                    <div className='text-center'>
                        <Button onClick={handleSignIn} variant="primary" className='mt-4' type="submit">Submit</Button>
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