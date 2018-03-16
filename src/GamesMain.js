import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import AppNav from './AppNav';

class GamesMain extends React.Component {
  render() {
    return (
      <div>
        <AppNav />
        <div>  
          <p>Games Main</p>
        </div>  
      </div>
    );
  }
}
export default withRouter(GamesMain);
