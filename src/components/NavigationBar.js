import React from 'react';
import {useState,useEffect} from 'react';
import{ Nav , Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Nav.css';

export const NavigationBar = () => (

   
     <Navbar expand="lg">
         <Navbar.Brand className="text-white" href="/">Expery</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="d-flex justify-content-between"> 
                 <Nav.Item  > <Nav.Link href="/Entrepreneur">For Entrepreneur</Nav.Link> </Nav.Item>
                 <Nav.Item > <Nav.Link href="/Expert">For Experts</Nav.Link> </Nav.Item>
                 <Nav.Item > <Nav.Link href="/SignIn">Login</Nav.Link> </Nav.Item>
                 <Nav.Item > <Nav.Link href="/SignUp">Sign Up</Nav.Link> </Nav.Item>
            </Nav>
         </Navbar.Collapse>
     </Navbar>
  
)
export default NavigationBar;