import React, { Component } from "react";
import "./Info.css";
import photo1 from "./palstic1.png";

export class Info extends Component {
  render() {
    return (
      <div className="containerinfo">
        <div style={{ clear: "both" }}></div>
<<<<<<< HEAD
        <div className="childofcontainerinfo">
=======

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "200px",
            margin: " 100px",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontSize: "20px",
            marginTop:"0px"
          }}
        >
          <div>
            <img
              style={{ float: "right", margin: "25px 0 150px", width: "228px" }}
              src={photo1}
            />
          </div>

>>>>>>> tpload naada 28-10 3:46
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontSize: "20px"
            }}
          >
<<<<<<< HEAD
        
=======
          <h1>Know what Recycling ?</h1>
          <p><b>Metal Cans</b>
            Before recycling food and drink cans, 
            remove paper or plastic labels and clean out any residual materials.
            Some metal cans have an insulated coating that might not be recyclable. When in doubt, throw it out!
            Recyclables don’t need to thoroughly washed, but they do need to be dry so they don’t contaminate other items.
          </p>
         
          </div>
        </div>
>>>>>>> tpload naada 28-10 3:46

            <div
              style={{
                // backgroundColor:"pink",
                float: "left",
                margin: "50px",
                justifyContent: "center",
                fontFamily: "Lato",
                fontSize: "30px",
                fontStyle: "normal",
                width: "866px"
              }}
            >
              <h1>Know what Recycling ?</h1>
              <p>
                <b>Metal Cans</b>
                Before recycling food and drink cans, remove paper or plastic
                labels and clean out any residual materials. Some metal cans
                have an insulated coating that might not be recyclable. When in
                doubt, throw it out! Recyclables don’t need to thoroughly
                washed, but they do need to be dry so they don’t contaminate
                other items.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
