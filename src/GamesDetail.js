import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import AppNav from './AppNav';
// import mockJSON

class GamesDetail extends React.Component {

  constructor(props){
    super(props)
    let params = props.match.params
    this.state = {
      id: params.id,
      gameName: null,
      gameDescription: null,
      loading: true
    }
  }

  componentDidMount(){
    console.log('>> component just mounted');
    // go get the data from the id:

    // let data = stubApi.getData(this.state.id)
    // this.setState({gameName: data.name, gameDescription: data.description, loading : false})
    // can put setTimeout on this to make it look fancy

    // just have setTimeout here to simulate loading time
    setTimeout(() => this.setState({loading: false}), 3000);

    
  }

  buildSpinner(){
    return(
      <div>IM LOADING</div>
    )
  }

  buildContent(){
   return( 
    <div align="center"> Games Detail</div>  
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
      <div>
        <AppNav />   
        {content}
      </div>

    );
  }
}

export default withRouter(GamesDetail);
