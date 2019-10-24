import React, { Component } from "react";
import User from "./components/User";
import axios from "axios";
import Registration from "./components/Registration";
import Add from "./components/Add";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import Login from "./components/Login";
import Admin from "./components/Admin";

class App extends Component {
  state = {
    users: [
      // {
      //   id: 1,
      //   title: "Array",
      //   status: "Private",
      //   language: "HTML"
      // },
      // {
      //   id: 2,
      //   title: "Object",
      //   status: "Public",
      //   language: "JavaScript"
      // }
    ],
    user: "",
    postID: null
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("http://localhost:9000/getdata")
      .then(({ data }) => {
        // handle success
        console.log(data);
        this.setState({
          users: data
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  addRegistration = user => {
    axios
      .post("http://localhost:9000/registration", user)
      .then(({ data }) => {
        console.log("REGISTAR:", data);
        this.setState({ user: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  checkUser = object => {
    console.log("OBJECT :", object);
    axios
      .post("http://localhost:9000/checkuser", object)
      .then(({ data }) => {
        console.log("DATA aaaa", data);
        this.setState({
          user: data
        });
        console.log("DATA :", data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  add = addedItem => {
    axios
      .put(`http://localhost:9000/add`, addedItem)
      .then(({ data }) => {
        console.log("DATA FROM ADD: ", data);
        this.setState({ user: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getPostId = id => {
    this.setState({ postID: id });
  };

  render() {
    const { state, getData, checkUser, addRegistration, add } = this;
    const { user, userReq, users } = state;
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login checkUser={checkUser} />
            </Route>
            <Route path="/user">
              <User user={user} getpostID={this.getPostId} />
            </Route>
            <Route path="/registration">
              <Registration addRegistrationA={addRegistration} />
            </Route>
            <Route path="/add"
            component={postID => <Add add={add} {...postID} />}
            
            >
              {/* <Add add={add} postID={this.state.postID} /> */}
              {/* <Add add={add} /> */}
              
            </Route>
            <Route path="/admin">
              <Admin users={users}/>
            </Route>
       
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
