import React from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';

const ProfilePage = () => {

  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('phone');
  const departmentName = localStorage.getItem('departmentName');
  const position = localStorage.getItem('position');

  return (
    <div className='bg-dark d-flex flex-column min-vh-100'>
      <Container className="mt-5" style={{ marginTop: '80px' }}>
        <Card bg='dark' text='white' border='light'>
          <Card.Header as="h5">Teacher's profile</Card.Header>
          <Card.Body>
            <ListGroup variant="flash">
              <ListGroup.Item variant='dark'>Name: {name}</ListGroup.Item>
              <ListGroup.Item variant='dark'>Contact No: {phone}</ListGroup.Item>
              <ListGroup.Item variant='dark'>Email: {email}</ListGroup.Item>
              <ListGroup.Item variant='dark'>Position: {position}</ListGroup.Item>
              <ListGroup.Item variant='dark'>Department: {departmentName}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <div className="mt-5 text-center">
          <Button variant="secondary" className="mt-5 text-center">Edit Profile</Button>
        </div>
      </Container>
      <footer className='bg-dark text-white text-center p-4 mt-auto'>
        <p>© 2023 - Teacher Management System</p>
      </footer>
    </div>
  );
};

export default ProfilePage;
