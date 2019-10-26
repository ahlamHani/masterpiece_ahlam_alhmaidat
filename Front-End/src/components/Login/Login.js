import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "./Login.css";
// import Admin from "./Admin";
// import Users from "./Users";

class Login extends Component {
  state = {
    email: "mohammad.h.alhety@gmail.com",
    password: "123321"
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
        <form className="margin">
          <div className="form-group" id="realContent">
            <h2>Sign in</h2>
            <div className="inputE">
              <input
                value={this.state.email}
                name="email"
                onChange={this.change}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div>
              <input
                value={this.state.password}
                name="password"
                onChange={this.change}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <Link to="/user">
              <button onClick={this.moveItem} className=" btn btn-primary">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
