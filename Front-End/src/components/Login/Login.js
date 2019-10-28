import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  state = {
    email: "nada.ead@hotmail.com",
    password: "123456"
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  moveItem = () => {
    this.props.checkUser(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
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
