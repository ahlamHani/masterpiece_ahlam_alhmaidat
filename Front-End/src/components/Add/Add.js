import React, { Component } from "react";
import "./Add.css";
import Navhead from "../Navhead";

export default class Add extends Component {
  state = {
    type: "",
    quantity: "",
    id: this.props.location.state.id
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.quantity);
  };

  addNew = () => {
    this.props.add(this.state);
    this.setState({
      quantity: "",
      type: ""
    });
  };

  render() {
    const { user } = this.props;
    return (
      <div className="marg">
        <Navhead username={user.userName} />
        <div className=" form-group1 backAdd">
          <h4>Add your type and quantity</h4>

          {console.log(this.props.location.state)}

          <input
            className="form-control form-text text-muted"
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
            placeholder="Quantity"
          />
          <select
            defaultValue={"DEFAULT"}
            className="form-control form-text text-muted"
            // value={this.state.type}
            name="type"
            onChange={this.handleChange}
          >
            <option value="DEFAULT" disabled>
              Select Your Material
            </option>
            <option value="blastic"> blastic </option>
            <option value="M3aden"> M3aden </option>
          </select>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.addNew}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
