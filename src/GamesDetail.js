import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import AppNav from './AppNav';

class GamesDetail extends React.Component {
  render() {
    return (
      <div>
        <AppNav />   
        <div align="center">  Games Detail</div>  
      </div>
    );
  }
}
export default withRouter(GamesDetail);
