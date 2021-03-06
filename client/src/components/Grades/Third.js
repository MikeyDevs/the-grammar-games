import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import "./grade.css";

class Third extends Component {
     
    render() {
      
      return (
          <p>
          <Navbar />
          <p>Now, pick a topic and watch the video!</p>
          {  (window.location.pathname === "/third/sentence" || window.location.pathname === "/third/nouns" || window.location.pathname === "/third/pronouns") ? "" :
            <div>
              <Link to={"/third/sentence/B9bJaoIHRp4"} ><button className="btn">Three Ways to End a Sentence</button></Link>
              <Link to="/third/nouns/bGz1acC3Wew"><button className="btn">Common and Proper Nouns </button></Link>
              <Link to="/third/pronouns/Gf7UgGyvDCA"><button className="btn">Personal Pronouns </button></Link>
            </div>
          }
         </p>
      );
    }
  };
  
  // Export the module back to the route
  export default Third;