import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import usersAPI from  './stubAPI/stubUserAPI';
import {Router, withRouter} from 'react-router-dom';
import GamesMain from './GamesMain';
import session from './sessionCache';
import Recaptcha from 'react-recaptcha'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      captcha: false,
      error:""
    };
  }

  componentWillMount() {
    console.log(">> componentDidMount Login.js");
    session.resetSession();
  }


  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
    //return this.state.username.length > 0 && this.state.password.length > 0 && this.state.captcha;
  }

  handleLogin(event){
    let result = usersAPI.login(this.state.username, this.state.password);
    if(result){
      this.props.history.push('/games');
    }
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
 
  verifyCallback(value) {
    console.log("verify:", value);
      this.setState({captcha: true});
  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>UserName</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            {/* <Recaptcha
              sitekey="6LeGP00UAAAAAHhY-prpaSVOMYEoOWExqYIF6eXs"
              render="explicit"
              verifyCallback={this.verifyCallback.bind(this)}
            />         */}
          {/* <div className="g-recaptcha" data-sitekey="6LeGP00UAAAAAHhY-prpaSVOMYEoOWExqYIF6eXs"></div> */}
            
          </FormGroup>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.handleLogin.bind(this)}
          >
            Login
          </Button>
        </form>
        
      </div>
    );
  }
}

  
export default withRouter(Login);
