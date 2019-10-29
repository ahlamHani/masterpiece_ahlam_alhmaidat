import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Navbar, Nav, Image } from "react-bootstrap";
import Logo from "./images/Recycling.png";
import "./Login/Login.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#000"}}>
          <div className="container">
            <Navbar.Brand>
              <Link to="/admin">
                <Image src={Logo} height={50} width={60} rounded />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Link
                    to="/registration"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Registar
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
