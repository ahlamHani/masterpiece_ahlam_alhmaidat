import React, { Component } from 'react'
import photo1 from './1.jpeg';
import './aboutUs.css'

export default class aboutUs extends Component {
    render() {
        return (
            <div>
           <div className="aboutus">
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
            <div style={{display: "flex",
              textAlign:"center",alignItems:"center",
              justifyContent:"center"}}>
              <img style={{ width: "255px" , height:"255px" }} src={photo1} />
            </div>

            <div
              style={{
                float: "left",
                margin: "10px",
                justifyContent: "center",
                fontFamily: "Lato",
                fontSize: "22px",
                fontStyle: "normal",
                // color:"white",
                width: "866px"
              }}
            >
           <h1><b>About us</b></h1>
              {/* <p className="text-justify"> */}
                <b>Recycling </b> 
                is important in today’s world if we want to leave this planet for our future generations.
                It is good for the environment, since we are making new products from the old products which are of no use to us.
                Recycling begins at home. If you are not throwing away any of your old product and instead utilizing it for something new then you are actually recycling. 
                When you think of recycling you should really think about the whole idea; reduce, reuse and recycle.
                We’ve been careless up to this point with the way we’ve treated the Earth and it’s time to change; 
                not just the way we do things but the way we think.
                <p><b>So We Should To Start Recycling. Welcome in Recycle Website </b></p>
            </div>
          </div>
        </div>
    
            </div>
        )
    }
}


