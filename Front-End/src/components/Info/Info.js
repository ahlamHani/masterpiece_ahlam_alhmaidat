import React, { Component } from "react";
import './Info.css';
import photo1 from './palstic1.png';

export class Info extends Component {
  render() {
    return (
      <div>
        <div style={{ clear: "both" }}></div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "200px",
            margin: " 100px",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontSize: "20px"
          }}
        >
          <div>
            <img
              style={{ float: "right", margin: "25px 0 150px", width: "228px" }}
              src={photo1}
            />
          </div>

          <div
            style={{
              float: "left",
              margin: "50px",
              justifyContent: "center",
              fontFamily: "Lato",
              fontSize: "20px",
              fontStyle: "normal",
              width: "866px"
            }}
          >
            Recycling can be defined as the process of converting waste
            materials into new materials, as opposed to the process of waste
            disposal. The Recycling Industry is central to the modern concern
            for minimizing waste and maximizing natural resources, and it
            concerns most of the material products we use each day, including
            glass, plastic, cardboard, metal, textiles, electronics, and even
            cars.
          </div>
        </div>

        </div>
    );
  }
}

export default Info;
