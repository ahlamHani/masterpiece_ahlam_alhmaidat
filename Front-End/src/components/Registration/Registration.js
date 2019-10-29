import React, { Component } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
export default class Registration extends Component {
  state = {
    userName: "",
    email: "",
    phoneNumber: "",
    location: "",
    password: "",
    registrationErrors: ""
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

  handelChange = event => {
    console.log("form submit in change", {
      [event.target.name]: event.target.value
    });
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
  };

  render() {
    const { userName, email, phoneNumber, location, password } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div id="realContent">
              <div>
                <div>
                  <h1>Registration</h1>
                  <h3>Welcome</h3>
                  <p>
                    Register with us to Preserve the Environment and To Have
                    Better Life
                  </p>
                </div>
              </div>

              <form id="regForm">
                <div className="form-group1">
                  <div className="inputE">
                    <span className="input-group-addon"></span>
                    <input
                      value={userName}
                      onChange={this.handelChange}
                      name="userName"
                      type="text"
                      className="form-control"
                      aria-describedby="nameHelp"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="inputE">
                    <span className="input-group-addon"></span>
                    <input
                      value={email}
                      onChange={this.handelChange}
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="inputE">
                    <span className="input-group-addon"></span>
                    <input
                      value={phoneNumber}
                      onChange={this.handelChange}
                      name="phoneNumber"
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="inputE">
                    <span className="input-group-addon"></span>
                    <input
                      value={location}
                      onChange={this.handelChange}
                      name="location"
                      type="text"
                      className="form-control"
                      placeholder="Enter Location"
                    />
                  </div>
                  <div className="inputE">
                    <span className="input-group-addon"></span>
                    <input
                      value={password}
                      onChange={this.handelChange}
                      name="password"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <Link to="/User">
                    <button
                      onClick={this.addNewUser}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  </Link>

                  <div>
                    <p>Already have an account? <Link to="/">Sign in</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
