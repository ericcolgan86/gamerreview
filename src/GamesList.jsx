import React from 'react';
import _ from 'lodash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom';
import AppNav from './AppNav';
import stubGames from './stubAPI/stubGamesAPI';
import GameItem from './GameItem'

export default class GamesList extends React.Component {
  render() {
    let displayedGames = this.props.games.map((g) =>
        <GameItem key={g.id} game={g} />
    );
    
    return (
      <div className="Game-list">
        <ul>
          {displayedGames}
        </ul>
      </div>
    );
  }
}

