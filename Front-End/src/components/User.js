import React, { Component } from "react";
import Nav from './Nav';
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";



export default class User extends Component {
  // state={
  //   id:""
  // }

  render() {
   
    const { user, userReq } = this.props;
     var id="";
    
    return (
      <div>
        <Nav username={user.userName}/>
        {/* {console.log("userrrr",user.userName)} */}
        <h1>Users</h1>

        {/* {userReq.filter(x => {
          //  return <h2>{x[password]==="password"}</h2>
          return (
            <div>
              <h2>{x.userName}</h2>
            </div>
          );
        })} */}

        <ul>
          {Object.keys(user).map((elem, i) => {
            if (elem === "userName") {
              return <h1 key={i}>{user[elem]}</h1>;
            } else if (elem === "email" || elem === "phoneNumber") {
              return <li key={i}>{user[elem]}</li>;
            }
            if ( elem ==="_id"){
                id = user[elem]
              console.log("id",id);
              // this.setState({ id:user[elem]})
              console.log(window.location.pathname);         
            }

            // return (

            //     <li>{elem}</li>
            //     // <li>{elem}</li>
            //     // <li>{elem.point}</li>
            //     // <li>{elem.location}</li>
            // )
          })}
        </ul>
        {console.log(this)}
        
        {/* <button onClick={console.log(this)}><Link to={`/add/${id}`}>ADD</Link></button> */}
        {/* <button onClick={console.log(this)}><Link to={{pathname:"/add",state:{id:id} }}>ADD</Link></button> */}
        <button><Link to={{pathname:"/add",state:{id:id} }}>ADD</Link></button>
        {/* <add id={id}/> */}
        {/* <Link to={{pathname:"/PostPage", state:{id: post._id,question:post.question} }}>
          View Post</Link> */}
      </div>
    );
  }
}

//Object.values(user)
