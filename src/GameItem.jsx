import React from 'react';
import _ from 'lodash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class GameItem extends React.Component {
  render() {
    let g = this.props.game;
    console.log(g.imageurlsmall);
    return (
      <li>
        <Link to={'/games/' + g.id}>
          <img src={g.imageurlsmall} alt={g.name} />
        </Link>
        <Link to={'/games/' + g.id}>{g.name}</Link>
        <p>Rating: {g.rating}</p>
      </li>
    );
  }
}
