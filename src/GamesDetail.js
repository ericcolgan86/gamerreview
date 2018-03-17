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
      loading : false
    }), 3000);
  }

  buildSpinner(){
    return(
      <div className="container-fluid">IM LOADING</div>
    )
  }

  buildContent(){
    console.log('>> gamename' + this.state);
    let image = (
      <div>
        {this.state.gameName}
        </div>
      // <div className="container-fluid">
      //   <img src={this.state.gameImage}/>
      // </div>
      ) ;
   return( 
    <div className="container-fluid" align="center"> {image}</div>  
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
