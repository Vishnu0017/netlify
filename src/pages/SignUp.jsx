import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap";
import '../styles/SignUp.css'
import {Link, useNavigate} from "react-router-dom";

export const SignUp = () => {
const [formData, setFormData]=useState({
    name: "",
    email: "",
    password: ""
})

const handleChange = (e) => {
    const {name,value}=e.target;
       setFormData({ ...formData, [name]:value });
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
};


  return (
    <Container>
        <h1>Registration Form</h1>
        <Form onSubmit={handleSubmit}> 
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} required/>
            </Form.Group>
            <Button variant="primary" type="submit" id="button">Register</Button>
            <p>Already Have an Account? <Link to="/login">Login</Link></p>
        </Form>
    </Container>
  )
}

export default SignUp