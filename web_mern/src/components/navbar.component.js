//const { Component } = require("react");

import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component{

render(){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div>
           <h3><Link to="/home" className="Navbar-brand">Event Planner</Link></h3> 
           </div>
            <div className="collpase navbar-collapse">
                <br/>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Events</Link>
                    </li><br/><br/>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Event Logs</Link>
                    </li><br/><br/>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Create Event</Link>
                    </li>
                
                </ul>

                <li className="navbar-item">
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                    </li><br/><br/>

                    <li className="navbar-item">
                        <Link to="/login" className="nav-link">Sign In</Link>
                    </li><br/><br/>
                
            </div>



        </nav>
    )
}



}