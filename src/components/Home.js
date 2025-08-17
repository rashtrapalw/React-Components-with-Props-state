import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className="text-center my-4">
      <h1>Welcome to MyApp</h1>
      <img 
        src="home.webp"
        alt="Home Banner"
        className="small-img d-block mx-auto my-3"
      />
      <p>This is a simple React app with Bootstrap.</p>
    </Container>
  );
}

export default Home;
