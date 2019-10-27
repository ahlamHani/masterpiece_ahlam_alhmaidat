import React, { Component } from "react";
// import Add from './Add';
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { Card,ListGroupItem,ListGroup,Button } from "react-bootstrap";
import Navhead from "../Navhead";
import Logo from './user.png';
import Use from './userlogo.png';
// import Footer from "./footer";

import "./user.css";

export default class User extends Component {
  // state={
  //   id:""
  // }

  render() {
    const { user, userReq } = this.props;
    var id = "";

    return (
      <div>
           {Object.keys(user).map((elem, i) => {
            if ( elem ==="_id"){
                id = user[elem]
              console.log("id",id);
              // this.setState({ id:user[elem]})
              console.log(window.location.pathname);         
            }
          })}
        <Navhead username={user.userName} />
        
        <Card style={{ width: "30%" }}>
          <Card.Img style={{height:"350px"}} src={Use} />
          <hr></hr>
          <Card.Body>
            <Card.Title>Name: {user.userName}</Card.Title>
            <Card.Text>
            Email: {user.email}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Phone Number: {user.phoneNumber}</ListGroupItem>
            <ListGroupItem>Point: {user.point}</ListGroupItem>
            <ListGroupItem>Location: {user.location}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link><Link to={{ pathname: "/add", state: { id: id } }}><Button variant="primary">Add Material</Button></Link></Card.Link>
            <Card.Link><Link to="/"><Button variant="danger">Log Out</Button></Link></Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

//Object.values(user)
