import React, { Component } from "react";
import "./Landingpage.css";
import Slider from "../Slider/Slider";
import Navhead from "../Navhead";
import Circle from "../Circle/Circle";
import Info from "../Info/Info";
import AboutUs from "../AboutUs/aboutUs";


export class Landingpage extends Component {
  render() {
    const { user } = this.props;
    return (
<<<<<<< HEAD
      <div>
        <Navhead username={user.userName} />
        <Slider />
        <Circle />
        <Info />
      </div>
=======
        <div>
            <Navhead username={user.userName}/>
            <Slider />
            <AboutUs />
            <Circle />
            <Info />
        </div>
>>>>>>> tpload naada 28-10 3:46
    );
  }
}

export default Landingpage;
