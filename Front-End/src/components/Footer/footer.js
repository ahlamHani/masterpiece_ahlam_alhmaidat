import React, { Component } from "react";
// import Img from '../components/img1.jpg'
import "./footer.css";


export default class Footer extends Component {
  render() {
    return (
     

      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p>Recyclingis important in today’s world if we want to leave this planet for our future generations. It is good for the environment, since we are making new products from the old products which are of no use to us. Recycling begins at home. So We Should To Start Recycling. Welcome in Recycle Website</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Content</h6>
            <ul className="footer-links">
              <li><a href="http://localhost:3000/home">Home</a></li>
              <li><a href="http://localhost:3000/offers">Offers</a></li>
              <li><a href="http://localhost:3000/">Log In </a></li>
              <li><a href="http://localhost:3000/registration">Registration</a></li>
              
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              {/* <li><a href="http://localhost:9000/futher">Future Feature</a></li> */}
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2019 All Rights Reserved by 
         <a href="#">Recycle</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    );
  }
}
