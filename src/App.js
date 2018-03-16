import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './AppNav';
import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppNav />
        <Login />
      </div>
    );
  }
}

export default withRouter(App);
