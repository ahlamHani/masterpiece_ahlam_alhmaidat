import React, { Component } from "react";
import "./Offers.css";
import { Alert } from "react-bootstrap";

import ShowOffer from "./ShowOffer";
import ShowOffer2 from "./ShowOffer2";
import ShowOffer3 from "./ShowOffer3";
import ShowOffer4 from "./ShowOffer4";
import ShowOffer5 from "./ShowOffer5";
import ShowOffer6 from "./ShowOffer6";
import ShowOffer7 from "./ShowOffer7";
import ShowOffer8 from "./ShowOffer8";
import ShowOffer9 from "./ShowOffer9";
import ShowOffer10 from "./ShowOffer10";
import ShowOffer11 from "./ShowOffer11";
import ShowOffer12 from "./ShowOffer12";

import p1 from "./1.jpg";
import p2 from "./2.jpg";
import p3 from "./3.jpg";
import p4 from "./4.jpg";
import p5 from "./5.jpg";
import p6 from "./6.jpg";
import p7 from "./11.jpg";
import p8 from "./12.jpeg";
import p9 from "./13.jpg";
import p10 from "./9.jpg";
import p11 from "./10.jpeg";
import p12 from "./14.jpeg";
import Navhead from "../Navhead";

export default class offers extends Component {
  state = { point: this.props.user.point, message: null };
  changeValues = event => {
    if (this.state.point == event.target.value) {
      this.setState({ message: <label>Are You Sure</label> });
    } else {
      this.setState({ message:  <Alert className="alert alert-danger" role="alert">You Don't Have Enough Point</Alert>});
     
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      ShowOfferAdd: false,
      ShowOfferAdd2: false,
      ShowOfferAdd3: false,
      ShowOfferAdd4: false,
      ShowOfferAdd5: false,
      ShowOfferAdd6: false,
      ShowOfferAdd7: false,
      ShowOfferAdd8: false,
      ShowOfferAdd9: false,
      ShowOfferAdd10: false,
      ShowOfferAdd11: false,
      ShowOfferAdd12: false
    };
  }

  seeOffer = () => {
    this.setState({ ShowOfferAdd: true });
  };
  seeOffer2 = () => {
    this.setState({ ShowOfferAdd2: true });
  };
  seeOffer3 = () => {
    this.setState({ ShowOfferAdd3: true });
  };
  seeOffer4 = () => {
    this.setState({ ShowOfferAdd4: true });
  };
  seeOffer5 = () => {
    this.setState({ ShowOfferAdd5: true });
  };
  seeOffer6 = () => {
    this.setState({ ShowOfferAdd6: true });
  };
  seeOffer7 = () => {
    this.setState({ ShowOfferAdd7: true });
  };
  seeOffer8 = () => {
    this.setState({ ShowOfferAdd8: true });
  };
  seeOffer9 = () => {
    this.setState({ ShowOfferAdd9: true });
  };
  seeOffer10 = () => {
    this.setState({ ShowOfferAdd10: true });
  };
  seeOffer11 = () => {
    this.setState({ ShowOfferAdd11: true });
  };
  seeOffer12 = () => {
    this.setState({ ShowOfferAdd12: true });
  };

  render() {
    let ShowOfferClose = () => this.setState({ ShowOfferAdd: false });
    let ShowOfferClose2 = () => this.setState({ ShowOfferAdd2: false });
    let ShowOfferClose3 = () => this.setState({ ShowOfferAdd3: false });
    let ShowOfferClose4 = () => this.setState({ ShowOfferAdd4: false });
    let ShowOfferClose5 = () => this.setState({ ShowOfferAdd5: false });
    let ShowOfferClose6 = () => this.setState({ ShowOfferAdd6: false });
    let ShowOfferClose7 = () => this.setState({ ShowOfferAdd7: false });
    let ShowOfferClose8 = () => this.setState({ ShowOfferAdd8: false });
    let ShowOfferClose9 = () => this.setState({ ShowOfferAdd9: false });
    let ShowOfferClose10 = () => this.setState({ ShowOfferAdd10: false });
    let ShowOfferClose11 = () => this.setState({ ShowOfferAdd11: false });
    let ShowOfferClose12 = () => this.setState({ ShowOfferAdd12: false });

    const { user, offer } = this.props;
    return (
      <React.Fragment>
        <Navhead username={user.userName} />
        <div className="card-container">
          <div  style={{borderRadius:"10%"}}  className="card">
            <img style={{borderRadius:"1%"}} src={p4}className="card-img-top img-circle" alt="Offer1" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="150"
              >
                Point 150
              </button>
              <button
                onClick={this.seeOffer}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer
                show={this.state.ShowOfferAdd}
                onHide={ShowOfferClose}
              />
              {this.state.message}
            </div>
          </div>

          <div  style={{borderRadius:"10%"}} className="card">
            <img style={{borderRadius:"10%"}} src={p7} className="card-img-top" alt="Offer2" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 1000
              </button>
              <button
                onClick={this.seeOffer2}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer2
                show={this.state.ShowOfferAdd2}
                onHide={ShowOfferClose2}
              />
            </div>
          </div>
          <div  style={{borderRadius:"10%"}}  className="card">
            <img  style={{borderRadius:"10%"}}src={p12} className="card-img-top" alt="Offer3" />
            <div className="card-body">
            <button 
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 500
              </button>
              <button
                onClick={this.seeOffer7}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer7
                show={this.state.ShowOfferAdd7}
                onHide={ShowOfferClose7}
              />
            </div>
          </div>
          <div  style={{borderRadius:"10%"}}  className="card">
            <img  style={{borderRadius:"10%"}}src={p8} className="card-img-top" alt="Offer4" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 100
              </button>
              <button
                onClick={this.seeOffer6}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer6
                show={this.state.ShowOfferAdd6}
                onHide={ShowOfferClose6}
              />
            </div>
          </div>

          <div  style={{borderRadius:"10%"}}  className="card">
            <img  style={{borderRadius:"10%"}} src={p5} className="card-img-top" alt="Offer5" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 150
              </button>
              <button
                onClick={this.seeOffer3}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer3
                show={this.state.ShowOfferAdd3}
                onHide={ShowOfferClose3}
              />
            </div>
          </div>

          <div style={{borderRadius:"10%"}} className="card">
            <img  style={{borderRadius:"10%"}} src={p10} className="card-img-top" alt="Offer6" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 500
              </button>
              <button
                onClick={this.seeOffer4}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer4
                show={this.state.ShowOfferAdd4}
                onHide={ShowOfferClose4}
              />
            </div>
          </div>
          <div  style={{borderRadius:"10%"}} className="card">
            <img  style={{borderRadius:"10%"}}src={p1} className="card-img-top" alt="Offer7" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 1000
              </button>
              <button
                onClick={this.seeOffer5}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer5
                show={this.state.ShowOfferAdd5}
                onHide={ShowOfferClose5}
              />
            </div>
          </div>

          <div  style={{borderRadius:"10%"}} className="card">
            <img  style={{borderRadius:"10%"}} src={p3} className="card-img-top" alt="Offer8" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 150
              </button>
              <button
                onClick={this.seeOffer8}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer8
                show={this.state.ShowOfferAdd8}
                onHide={ShowOfferClose8}
              />
            </div>
          </div>
          <div  style={{borderRadius:"10%"}} className="card">
            <img  style={{borderRadius:"10%"}} src={p2} className="card-img-top" alt="Offer9" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 100
              </button>
              <button
                onClick={this.seeOffer9}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer9
                show={this.state.ShowOfferAdd9}
                onHide={ShowOfferClose9}
              />
            </div>
          </div>

          <div  style={{borderRadius:"10%"}} className="card">
            <img  style={{borderRadius:"10%"}} src={p9} className="card-img-top" alt="Offer10" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 500
              </button>
              <button
                onClick={this.seeOffer10}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer10
                show={this.state.ShowOfferAdd10}
                onHide={ShowOfferClose10}
              />
            </div>
          </div>
          <div  style={{borderRadius:"10%"}} className="card">
            <img  style={{borderRadius:"10%"}} src={p6} className="card-img-top" alt="Offer11" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 150
              </button>
              <button
                onClick={this.seeOffer11}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer11
                show={this.state.ShowOfferAdd11}
                onHide={ShowOfferClose11}
              />
            </div>
          </div>

          <div  style={{borderRadius:"10%"}} className="card">
            <img  style={{borderRadius:"10%"}} src={p11} className="card-img-top" alt="Offer12" />
            <div className="card-body">
              <button
                className="btn btn-success"
                onClick={this.changeValues}
                value="1000"
              >
                Point 250
              </button>
              <button
                onClick={this.seeOffer12}
                type="button"
                className="btn btn-secondary"
              >
                Show offer
              </button>
              <ShowOffer12
                show={this.state.ShowOfferAdd12}
                onHide={ShowOfferClose12}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
