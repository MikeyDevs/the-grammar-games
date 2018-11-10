import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./main.css"

class Main extends Component {
     
    render() {
  
      return (
      
          <p>
          <Navbar />
            <div>
            <img id="gram-picture" src="../../../images/grammar.png" alt="grammar" height="200" />
              <p>Welcome to The Grammar Games, where learning grammar is fun!</p>
              <p>Now may the games begin!</p>
              <p>First, pick a grade...</p>
               <Link to="/third"><button className="btn">3rd Grade</button></Link>
               <Link to="/fourth"><button className="btn">4th Grade</button></Link>
               <Link to="/fifth"><button className="btn">5th Grade</button></Link>
               <Link to="/sixth"><button className="btn">6th Grade</button></Link>
              </div>
          </p>
       
       
      );
    }
  };

export default Main;