import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import "./navbar.css";
import LoginBackground from './signin.png';
import LogoutBackground from './signout.png';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';


const userStyle = {
  fontSize: 15
}

 const authUrl = document.location.href.includes("localhost")
    ? "//localhost:3001/auth/google"
    : "/auth/google";

const cookies = new Cookies();

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    console.log(document.cookie);
    var cookie = cookies.get('gg-user');
    console.log(cookie);
    if (document.cookie === "") {
      $('.username').append(``);
      $("#logout").hide();
    } else {
    $('.username').append(`<h2>${cookie}</h2>`);
    $("#login").hide();
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut() {
    console.log('logout is working');
    let cookie = cookies.remove('gg-user');
    $('.username').empty()
  }

  render() {
    return (
      <div >
        <Navbar id="toggler" className = "navbar" color="faded" light expand="md">
          <NavbarBrand id="logo" href="/">  The Grammar Games</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <Link style={{ textDecoration: 'none' }} className="tabitem" to="/">Home</Link>
              </NavItem>
              <NavItem >
                <Link style={{ textDecoration: 'none' }} className="tabitem" to="/leaderboard">Leaderboard</Link>
              </NavItem>
              <NavItem id="login">
                <a style={{ textDecoration: 'none' }} className="tabitem" href={authUrl}>Sign In</a>
              </NavItem>
              <NavItem id="logout">
                <a style={{ textDecoration: 'none' }} className="tabitem" href='/' onClick={this.logOut}>Sign Out</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
         <div className="username" style={userStyle} />
        
      </div>
    );
  }
}