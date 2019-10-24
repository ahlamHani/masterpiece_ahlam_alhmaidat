import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default class Add extends Component {
  state = {
    type: "blastic",
    quantity: "AAA",
     id:this.props.location.state.id
  };

 

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.quantity);
  };

  addNew = () => {
    // let newRepos={title:this.state.title, status:this.state.status,language:this.state.language};
    this.props.add(this.state);
    this.setState({
      quantity: "",
      type: ""
    });
  };

  
  // changeState = event => {
  //   this.setState({
  //     type: event.target.value
  //   });

    // console.log(this.state.type);
  // };
  render() {
    return (
      <div>
        {console.log(this.props.location.state)}
        <input
          type="number"
          name="quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
          placeholder="quantity"
        />
        <select name="type" value={this.state.type} onChange={this.handleChange}>
          <option value="blastic"> blastic </option>
          <option value="M3aden"> M3aden </option>
        </select>
        <button type="submit" onClick={this.addNew}>
          Add
        </button>
        {/* {console.log("id from location:",id)} */}
        {/* {console.log(useParams())} */}

      </div>
    );
  }
}
