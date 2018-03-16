import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink  } from 'react-router-dom';
class AppNav extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to={'/'}> Gamer-Review</NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <div className="links-navbar-div">
          <div className="btn-nav">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/games">Games</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          </div>
      </Navbar>
    );
  }
}



export default AppNav;
