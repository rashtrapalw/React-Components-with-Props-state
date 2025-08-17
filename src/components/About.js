import React from 'react';
import { Card, Container } from 'react-bootstrap';

function About({ userData }) {
  return (
    <Container className="my-4">
      <h2 className="text-center">About</h2>
      <img 
        src="About.webp"
        alt="About"
        className="small-img d-block mx-auto my-3"
      />
      <Card className="p-3 text-center">
        <Card.Body>
          <Card.Title>{userData.name}</Card.Title>
          <Card.Text>Email: {userData.email}</Card.Text>
          <Card.Text>Role: {userData.role}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
