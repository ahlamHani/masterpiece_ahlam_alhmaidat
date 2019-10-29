import React, { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import Logo from "./images/Recycling.png";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";


export default class Navhead extends Component {
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
                    to="/home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/offers"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Offers
                  </Link>
                </Nav.Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Nav.Link eventKey={2}>
                  <Link
                    to="/user"
                    style={{ textDecoration: "none", color: "#f5f5f5" }}
                  >
                    <i className="fa fa-user icon-3x"></i> &nbsp;
                    {this.props.username}
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
