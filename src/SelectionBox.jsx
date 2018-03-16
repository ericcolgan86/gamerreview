import React from 'react';
import _ from 'lodash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom';
import AppNav from './AppNav';
import stubGames from './stubAPI/stubGamesAPI';
import GamesList from './GamesList'

export default class SelectBox extends React.Component {
  handleChange = (e, type, value) => {
    e.preventDefault();
    this.props.onUserInput(type, value);
  };

  handleTextChange = (e) => {
    this.handleChange(e, 'search', e.target.value);
  };

  handleSortChange = (e) => {
    this.handleChange(e, 'sort', e.target.value);
  };

  render() {
    return (
      <div className="col-md-10">
        <input type="text" placeholder="Search"
          value={this.props.filterText}
          onChange={this.handleTextChange} />
        <span> Sort by: </span>
        <select id="sort" value={this.props.order}
          onChange={this.handleSortChange} >
          <option value="name">Alphabetical</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    );
  }
}

