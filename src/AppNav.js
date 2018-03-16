import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class AppNav extends React.Component {
  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Gamer-Review</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
    </NavItem>
          <NavItem eventKey={2} href="#">
            Link
    </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
    


export default AppNav;
