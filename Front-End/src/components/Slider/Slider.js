import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Image9 from './images/2.jpg';
import Image8 from './images/7.png';
import Image10 from './images/4.jpg';

<<<<<<< HEAD
// import Image1 from "./images/3.png";
// import Image2 from "./images/slide.png";
// import Image3 from "./images/slide2.png";
// import Image4 from "./images/slide3.jpg";
// import Image5 from "./images/slide4.jpg";
// import S from './images/s.jpg';
// import SS from './images/ss.jpeg';
// import SSS from './images/sss.jpg';
// import ooo from './images/op.png';
import './Slider.css'
=======
>>>>>>> tpload naada 28-10 3:46


export class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item className="sliderr sliderr1">
            {/* <img
              className="d-block w-100"
<<<<<<< HEAD
              src={ooo}
              alt="First slide"
              style={{ height: "550px" }}
            /> */}
            <div className="blacklest"></div>
            <Carousel.Caption></Carousel.Caption>
=======
              src={Image8}
              alt="First slide"
              style={{height:'550px'}}
            />
            <Carousel.Caption>
            </Carousel.Caption>
>>>>>>> tpload naada 28-10 3:46
          </Carousel.Item>
          <Carousel.Item  className="sliderr sliderr2">
            {/* <img
              className="d-block w-100"
<<<<<<< HEAD
              src={ooo}
              alt="Third slide"
              style={{ height: "550px" }}
            /> */}
            <div className="blacklest"></div>

            <Carousel.Caption></Carousel.Caption>
=======
              src={Image9}
              alt="Third slide"
              style={{height:'550px'}}
            />

            <Carousel.Caption>
            </Carousel.Caption>
>>>>>>> tpload naada 28-10 3:46
          </Carousel.Item>
          <Carousel.Item className="sliderr sliderr3">
            {/* <img
              className="d-block w-100"
<<<<<<< HEAD
              src={ooo}
              alt="Third slide"
              style={{ height: "550px" }}
            /> */}
            <div className="blacklest"></div>

            <Carousel.Caption></Carousel.Caption>
=======
              src={Image10}
              alt="Third slide"
              style={{height:'550px'}}
            />

            <Carousel.Caption>
            </Carousel.Caption>
>>>>>>> tpload naada 28-10 3:46
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
