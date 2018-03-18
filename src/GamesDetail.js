import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import AppNav from './AppNav';
import StubGamesApi from './stubAPI/stubGamesAPI';

class GamesDetail extends React.Component {
  constructor(props){
    super(props)
    let params = props.match.params
    this.state = {
      id: params.id,
      gameName: null,
      gameDescription: null,
      gameImage: null,
      gameRating: null,
      gameReview: null,
      loading: true
    }
  }

  componentDidMount(){
    console.log('>> component just mounted GAMES DETAIL');
    let data = StubGamesApi.getByID(this.state.id);
    console.log('>> gamename' + data.name);
    console.log('>> Image' + data.imageurlbig);
    
    // just have setTimeout here to simulate loading time
    setTimeout(() => this.setState({
      gameName: data.name, 
      gameDescription: data.description,
      gameImage: data.imageurlbig,
      gameRating: data.rating,
      gameReview: data.reviewurl,
      loading : false
    }), 3000);
  }

  buildSpinner(){
    return(
      <img align="center" className="card-img-top" src="/Images/loading.gif" alt="Loading"/>
    )
  }

  buildContent(){
    console.log('>> gamename' + this.state);
    let item = (
      <div className="card">
          <img className="card-img-top" src={this.state.gameImage} alt={this.state.gameName}/>
          <div className="card-body">
            <h5 className="card-title">{this.state.gameName}</h5>
            <p className="card-text">{this.state.gameDescription}</p>
            <p className="card-text"><small className="text-muted">Rating:{this.state.gameRating}</small></p>
          </div>
          <iframe title={this.state.gameName} align="center" width="854" height="480" src={this.state.gameReview} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      ) ;
   return( 
    <div className="container-fluid" align="center"> {item}</div>  
   )
  }

  render() {
    console.log('>> in render');
    let content

    if (this.state.loading) {
      content = this.buildSpinner()
    } else {
      content = this.buildContent()
    }

    return (   
      <div className="container-fluid">
        <AppNav />   
        {content}
      </div>

    );
  }
}

export default withRouter(GamesDetail);
