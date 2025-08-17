import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';

class Services extends Component {
  render() {
    const { service1, service2, service3 } = this.props.serviceData;

    return (
      <Container className="my-4">
        <h2 className="text-center">Services</h2>
        <img 
          src="Website-Services.jpg"
          alt="Services"
          className="small-img d-block mx-auto my-3"
        />
        <Card className="p-3 text-center">
          <Card.Body>
            <Card.Title>Our Services</Card.Title>
            <Card.Text>{service1}</Card.Text>
            <Card.Text>{service2}</Card.Text>
            <Card.Text>{service3}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Services;
