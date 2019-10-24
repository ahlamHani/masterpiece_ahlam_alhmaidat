import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
// import Admin from "./Admin";
// import Users from "./Users";

class Login extends Component {
  state = {
    email: "ahmed@gmail.com",
    password: "123456"
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(e.target.value);
  };

  moveItem = () => {
    this.props.checkUser(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    // const { checkUser } = this.props;
    return (
      <div>
        <input
          type="text"
          value={this.state.email}
          name="email"
          onChange={this.change}
          placeholder="Enter Email"
        />

        <input
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.change}
          placeholder="Enter Password"
        />
              <button onClick={this.moveItem}>
                <Link to="/user">Login</Link>
              </button>
              {/* <Link to="/user">User</Link> */}
      </div>
    );
  }
}

export default Login;
