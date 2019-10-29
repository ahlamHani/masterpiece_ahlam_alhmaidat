import React, { Component } from "react";
import "./Circle.css";
import Quantit from "./matpage.png";
import Stackhold from "./buildpage.png";
import Userss from "./userspage.png";

export class Circle extends Component {
  render() {
    return (
      <div>
        <div style={{ clear: " both" }}></div>
        <div
          style={{
            display: "flex",
            margin: "50px",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <div className="column">
            <div className="circle">
              <img className="ourimages" src={Quantit} />
            </div>
            <div className="cards1">
              <i class="fas fa-seedling "></i>9288
            </div>
          </div>
          <div className="column">
            <div className="circle">
              <img className="ourimages" src={Stackhold} />
            </div>
            <div className="cards2">
              <i class="far fa-building "></i>68
            </div>
          </div>
          <div className="column">
            <div className="circle">
              <img className="ourimages" src={Userss} />
            </div>
            <div className="cards3">
              <i class="fas fa-address-card "></i>725
            </div>
          </div>
        </div>
        <div style={{ clear: " both" }}></div>
      </div>
    );
  }
}

export default Circle;
