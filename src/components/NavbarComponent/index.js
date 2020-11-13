import React, { useEffect } from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown, Button } from 'react-bootstrap'
import './index.scss'

function MyNavbar() {

  useEffect(() => {
    // var loader = document.getElementsByClassName("loader"),

    //   show = function () {
    //     loader.style.display = "flex";
    //     setTimeout(hide, 5000); // 5 seconds
    //   },

    //   hide = function () {
    //     loader.style.display = "none";
    //   };

    // show();
  }, []);

  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img src="./asset/img/logo.png" alt="econnect logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Book Trip</Nav.Link>
          <Nav.Link href="#link">Check In</Nav.Link>
          <Nav.Link href="#link">Print Boarding Pass</Nav.Link>
          <Nav.Link href="#link">Explore</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary">Guest User</Button>
          <Nav.Link href="#deets">Sign In / Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar