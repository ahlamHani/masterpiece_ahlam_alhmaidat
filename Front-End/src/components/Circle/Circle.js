import React, { Component } from 'react'
import './Circle.css';

export class Circle extends Component {
  render() {
    return (
      <div>
      
          <div style={{clear:" both"}}></div>
          <div style={{display: "flex" ,margin:"50px", justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
          <div className="column"><div className="circle">900</div><div className="cards">Quantity</div></div>
          <div className="column"><div className="circle">900</div><div className="cards">Stakeholders</div></div>
          <div className="column"><div className="circle">900</div><div className="cards">Users</div></div>
          </div>
          <div style={{clear:" both"}}></div>

      </div>
    )
  }
}

export default Circle