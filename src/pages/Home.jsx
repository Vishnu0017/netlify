import React from 'react'
import { Container, Button } from 'react-bootstrap'
import "../styles/Home.css"

const Home = () => {
  return (
    <Container>
        <h1>Welcome to Our Website</h1>
        <p>We are Here to Serve You..!</p>
        <Button variant="primary" type="submit">Get Started</Button>
    </Container>
  )
}

export default Home