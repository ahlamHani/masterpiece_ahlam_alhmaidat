import React, {
    Component
} from 'react'

import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
export default class Nav extends Component {
  





    render() {
        return ( <div >

            <nav className = "navbar navbar-expand-lg navbar-light bg-light" >
            <a className = "navbar-brand"
            href = "#" > Recycle </a>
             
            
            <div className = "collapse navbar-collapse"
            id = "navbarNav" >
            <ul className = "navbar-nav" >
            <Link to="/landingpage">
            <li className = "nav-item active" >
            <a className = "nav-link"
            href = "#" > Home <span class = "sr-only" >  </span></a >
            </li>
            </Link>
            <Link to="/offers">
            <li className = "nav-item active" >
            <a className = "nav-link"
            href = "#" > Offers <span class = "sr-only" >  </span></a >
            </li>
            </Link>
            
             <li className = "nav-item active" >
            <a className = "nav-link"
            href = "#"> {this.props.username} <span className = "sr-only" ></span></a >
            </li>


            </ul>
             </div>
             </nav>

            </div>
        );
    }
}