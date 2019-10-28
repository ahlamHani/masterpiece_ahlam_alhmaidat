import React, { Component } from "react";
import User from "./components/User/User";
import axios from "axios";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Registration from "./components/Registration/Registration";
// import Add from "./components/Add";
import Add from "./components/Add/Add";
import Offers from "./components/Offers/offers";
import Login from "./components/Login/Login";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Landingpage from "./components/Landingpage/Landingpage";

class App extends Component {
  state = {
    users: [],
    user: "",
    postID: null,
    offer: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("http://localhost:9000/getdata")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          users: data
        });
      })
      .catch(error => {
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
    const { state, checkUser, addRegistration, add } = this;
    const { user, users, offer } = state;
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Login checkUser={checkUser} />
            </Route>
            <Route path="/home">
              <Landingpage user={user} />
            </Route>
            <Route exact path="/offers">
              <Offers user={user} offer={offer} />
            </Route>
            <Route path="/user">
              <User user={user} getpostID={this.getPostId} />
            </Route>
            <Route path="/registration">
              <Header />
              <Registration addRegistrationA={addRegistration} />
            </Route>
            <Route
              path="/add"
              component={postID => <Add user={user} add={add} {...postID} />}
            ></Route>
            <Route path="/admin">
              <Admin users={users} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
