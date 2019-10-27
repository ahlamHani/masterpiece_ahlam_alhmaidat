// import React, {
//   Component
// } from 'react'
// export default class Add extends Component {
//   state = {
//     type: "blastic",
//     quantity: "AAA",

//   };

//   addNew = () => {
//     // let newRepos={title:this.state.title, status:this.state.status,language:this.state.language};
//     this.props.add(this.state)
//     this.setState({
//       quantity: "",
//       type: ""
//     })

//   }

//   handleChange = (event) => {
//     this.setState({
//       quantity: event.target.value
//     })
//     console.log(this.state.quantity);
//   }
//   changeState = (event) => {
//     this.setState({
//       type: event.target.value

//     })

//     console.log(this.state.type);

//   }
//   render() {
//     return ( < div >
//       <
//       input type = "text"
//       value = {
//         this.state.quantity
//       }
//       onChange = {
//         this.handleChange
//       }
//       placeholder = "quantity" /
//       >

//       <
//       select name = "type"
//       value = {
//         this.state.type
//       }
//       onChange = {
//         this.changeState
//       } >
//       <
//       option value = "blastic" > blastic < /option> <
//       option value = "M3aden" > M3aden < /option>

//       <
//       /select> <
//       button type = "submit"
//       onClick = {
//         this.addNew
//       } > Add < /button> < /
//       div >
//     )
//   }
// }

import React, { Component } from "react";
// import Nav from "./Nav";
// import Footer from "./footer";

import "./Add.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navhead from "../Navhead";

export default class Add extends Component {
  state = {
    type: "",
    quantity: "",
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
    const { user } = this.props;
    return (
      <div>
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
            placeholder="quantity"
          />
          <select
            className="form-control form-text text-muted "
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          >
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
          {/* {console.log("id from location:",id)} */}
          {/* {console.log(useParams())} */}
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}
