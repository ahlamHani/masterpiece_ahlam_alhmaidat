import React, { Component } from "react";
import "./Landingpage.css";
import Slider from '../Slider/Slider';
import Navhead from "../Navhead";
import Circle from '../Circle/Circle';
import Info from "../Info/Info";


export class Landingpage extends Component {
  render() {
      const {user}=this.props
    return (
        <div>
            <Navhead username={user.userName}/>
            <Slider />
            <Circle />
            <Info />
        </div>
    );
  }
}

export default Landingpage;
