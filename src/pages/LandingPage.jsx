import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-dark d-flex flex-column min-vh-100">
             <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center">
       
                <h1 className="mt-3">Pabna University of Science and Technology</h1>
                <h3 className="mt-3">Teacher Management System</h3>
                <div style={{height: '90px'}}></div>

                <Row className="mt-4">
                    <Col md={4}>
                        <Card bg='dark' text='white' border='light'>
                            <Card.Body>
                                <Card.Title className='text-white'>Bill Management</Card.Title>
                                <Card.Text>
                                    This application is designed to manage the bills of the teachers of Pabna University of Science and Technology. It's time consuming for the teacher's to manually calculate the amount of bill they are due, so this application is designed to make it easier.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg='dark' text='white' border='light'>
                            <Card.Body>
                                <Card.Title>Print</Card.Title>
                                <Card.Text>
                                    To save the time of the teachers, this application is designed to print the bill of the teachers. The teachers can print the bill of the month they want to print. They can also print the bill of the whole year. The bill will be printed in a PDF format.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg='dark' text='white' border='light'>
                            <Card.Body>
                                <Card.Title>Track Utilities</Card.Title>
                                <Card.Text>
                                    This application is designed to track the utilities of the teachers. The teachers can track the amount of paper, attendance, assignment they have used in a month. Calculating this manually is time consuming, so this application is designed to make it easier.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Link to={'/login'}>
                    <Button variant="secondary" className="mt-5">Get Started</Button>
                </Link>

            </Container>
        </div>
    );
};

export default LandingPage;
