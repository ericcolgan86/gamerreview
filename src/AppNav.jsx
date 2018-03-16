import React from 'react';
import { Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink  } from 'react-router-dom';
import session from './sessionCache';

class AppNav extends React.Component {

  displayUserInfo(){
    let info
    if(session.getSession()){
      info = (
        <div>
          {session.getUser()}
        </div>
      )
    }
    return info
  }

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
          {this.displayUserInfo()}
      </Navbar>
    );
  }
}



export default withRouter(AppNav);
