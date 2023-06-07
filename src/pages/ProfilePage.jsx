import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const ProfilePage = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h5">Teacher's profile</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Name: John Doe</ListGroup.Item>
            <ListGroup.Item>Contact No: +1234567890</ListGroup.Item>
            <ListGroup.Item>Email: johndoe@example.com</ListGroup.Item>
            <ListGroup.Item>Position: Software Engineer</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;
