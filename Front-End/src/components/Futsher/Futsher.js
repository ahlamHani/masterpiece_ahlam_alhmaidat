import React, { Component } from 'react'
import photo1 from './1.jpg';

export default class Futsher extends Component {
    render() {
        return (
            <div>
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
            fontSize: "20px",
            marginTop:"0px"
          }}
        >
         

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
     <div>
<img style={{ float: "right", margin: "25px 0 150px", width: "228px" }} src={photo1} />
</div>
<h1>Future  work</h1>
<p>
About our future work We would like to build commitment  society, by more characteristics. 
Some of the material We can ues it to make another product like bag and can sell it. 
Can cooperation with The Ministry of Environment to role can control the work. And build some shop to that. 
Buy Some machinery can do recycling to some product.</p>

<div>
Plastic Bottle Recycling Machine Main function:
Automatic scanning bar code, identifying plastic bottles, cans.
Feedback mode : Print coupons,Mobile phone two dimensional code wechat integral.Recognition system: according to the bar code , information such as bottle type , size , integration and the like is recognized , and each packaging classification is stored in the machine without sorting and manpower . The weighing detection prevents a large amount of liquid residue , the overweight refusal is received , the machine is exited , and the unsafe factor is eliminated.
Flattening: compressible plastic bottle cans and iron cans, saving recovery, transportation, follow-up processing costs.
</div>
<div style={{clear:"both"}}></div> 
      

          </div>



        </div>

        </div>
            </div>
        )
    }
}

