import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';

class Contact extends Component {
  state = {
    phone: "123-456-7890",
    address: "Pune, Maharashtra"
  };

  render() {
    return (
      <Container className="my-4">
        <h2 className="text-center">Contact</h2>
        <img 
          src="Contact.jpg"
          alt="Contact"
          className="small-img d-block mx-auto my-3"
        />
        <Card className="p-3 text-center">
          <Card.Body>
            <Card.Title>Phone: {this.state.phone}</Card.Title>
            <Card.Text>Address: {this.state.address}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Contact;
