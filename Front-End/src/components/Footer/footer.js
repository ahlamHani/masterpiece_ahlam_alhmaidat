import React, { Component } from "react";
// import Img from '../components/img1.jpg'
import "./footer.css";
import Insta from "./insta.webp";
import Orange from "./orange.jpg";
import Cinema from "./cinema.jpg";

import Face from "./face.png";
import Mac from "./mac.jfif";

export default class Footer extends Component {
  render() {
    return (
      <div className="footback  ">
        <div className="card bg-dark text-dark ">
          <div className=" bg-dark text-white foot">
            <h5 className="card-title"> Save enviroment </h5>
            <h5 className="card-text"> Contact Us </h5>
            <div className="img ">
              <img src={Orange} className="card-img im1" alt="no img" />
              <img src={Insta} className="card-img" alt="no img" />

              <img src={Face} className="card-img" alt="no img" />

              <img src={Mac} className="card-img" alt="no img" />

              <img src={Cinema} className="card-img" alt="no img" />
            </div>
            <ul>
              <li> 0777777146 </li> <li> recycle @gmail.com </li>
            </ul>{" "}
          </div>{" "}
        </div>
      </div>
    );
  }
}
