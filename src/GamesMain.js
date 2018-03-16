import React from 'react';
import _ from 'lodash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom';
import AppNav from './AppNav';
import stubGames from  './stubAPI/stubGamesAPI';


class SelectBox extends React.Component {
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



class GameItem extends React.Component {
  render() {
    let g = this.props.game;
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


class GamesList extends React.Component {
  render() {
    let displayedGames = this.props.games.map(
      (g) => <GameItem key={g.id} game={g} />
    );
    return (
      <div className="col-md-10">
        <ul>
          {displayedGames}
        </ul>
      </div>
    );
  }
}

class GamesMain extends React.Component {
  state = { search: '', sort: 'name' };
  handleChange = (type, value) => {
    if (type === 'search') {
      this.setState({ search: value });
    } else {
      this.setState({ sort: value });
    }
  };
  render() {
    let list = stubGames.getAll().filter( 
      (g) =>
          g.name.toLowerCase()
           .search(this.state.search.toLowerCase()) !== -1 
     );
     let filteredList = _.sortBy(list, this.state.sort) ;
    return (
      <div>
        <AppNav />
        <div className="container-fluid">
          <div className="row">
           <SelectBox onUserInput={this.handleChange } 
                        filterText={this.state.search} 
                        sort={this.state.sort} />
           <GamesList games={filteredList} />
          </div>
         </div>
      </div>
    );
  }
}
export default withRouter(GamesMain);
