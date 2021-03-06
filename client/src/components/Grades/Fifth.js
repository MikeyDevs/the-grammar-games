import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import "./grade.css";

class Fifth extends Component {
     
    render() {
  
      return (
          <p>
            <Navbar />
            <p>Now, pick a topic and watch the video!</p>
          {  (window.location.pathname === "/fifth/punctuating" || window.location.pathname === "/fifth/correlativeconjunctions" || window.location.pathname === "/fifth/introverbtense") ? "" :
            <div>
              <Link to="/fifth/punctuating/DBMQOK64VQY"><button className="btn">Punctuating a List</button></Link>
              <Link to="/fifth/correlativeconjunctions/R74Ly00UygU"><button className="btn">Correlative Conjunctions</button></Link>
              <Link to="/fifth/introverbtense/faUvT7zfsyk"><button className="btn">Introduction to Verb Tense</button></Link>
            </div>
          }
          </p>
      );
    }
  };
  
  // Export the module back to the route
  export default Fifth;