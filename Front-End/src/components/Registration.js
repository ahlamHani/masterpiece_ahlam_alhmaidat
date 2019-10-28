import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import './Login/Login.css'
//import { Collection } from 'mongoose'
import Footer from "./Footer/footer";
export default class Registration extends Component {
  state = {
    userName: "",
    email: "",
    phoneNumber: "",
    location: "",
    password: "",
    registrationErrors: ""
  };

  handelChange = event => {
    console.log("form submit in change", {
      [event.target.name]: event.target.value
    });
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
  };

  addNewUser = () => {
    console.log("this addNewUser :");
    this.props.addRegistrationA(this.state);
    this.setState({
      userName: "",
      email: "",
      phoneNumber: "",
      location: "",
      password: ""
    });
  };

  render() {
    const { userName, email, phoneNumber, location, password } = this.state;

    return (
      <React.Fragment>
        <Footer />
        <h1>Registration from</h1>
<div className="form-group">
        <label>
          <b>Name</b>
        </label>
        <input className="inputE"
          value={userName}
          onChange={this.handelChange}
          type="text"
          placeholder="Enter Name"
          name="userName"
          required
        />
        

        <label>
          <b>Email</b>
        </label>
        <input
          value={email}
          onChange={this.handelChange}
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        />
        

        <label>
          <b>Phone Number</b>
        </label>
        <input
          value={phoneNumber}
          onChange={this.handelChange}
          type="text"
          placeholder="Enter Phone Number"
          name="phoneNumber"
          required
        />
        

        <label>
          <b>Location</b>
        </label>
        <input
          value={location}
          onChange={this.handelChange}
          type="text"
          placeholder="Enter Location"
          name="location"
          required
        />
        

        <label>
          <b>Password</b>
        </label>
        <input
          value={password}
          onChange={this.handelChange}
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        

        <p>
          By creating an account you agree to our{" "}
          <a href="/">Terms & Privacy</a>.
        </p>

        <button type="submit" onClick={this.addNewUser}>
          <Link to="/user">Register</Link>
        </button>

        
        <div>
          <p>
            Already have an account? <Link to="http://localhost:3000/">Sign in</Link>.
          </p>
          
        </div>
        </div>
       
      </React.Fragment>
    
    );
  }
}
