import React from 'react';
import _ from 'lodash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom';
import AppNav from './AppNav';
import stubGames from './stubAPI/stubGamesAPI';
import GamesList from './GamesList'
import SelectionBox from'./SelectionBox'


class GamesMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sort: 'name'
    };
  }

  handleChange = (type, value) => {
    if (type === 'search') {
      this.setState({ search: value });
    } else {
      this.setState({ sort: value });
    }
  };

  getGames(){
    return  stubGames.getAll().filter((g) => {
      let gameName = g.name.toLowerCase(),
        searchName = this.state.search.toLowerCase()
      return gameName.search(searchName) !== -1
    });
  }

  render() {
    let list = this.getGames()

    let filteredList = _.sortBy(list, this.state.sort);
    return (
      <div>
        <AppNav />
        <div className="container-fluid">
          <div className="row">
            <SelectionBox onUserInput={this.handleChange}
              filterText={this.state.search}
              sort={this.state.sort} />
              <br />
            <GamesList games={filteredList} />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(GamesMain);
