import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

//import Img from './components/Img';
import About from './components/About';
import Navbar from './components/Navbar';
import './style.css';
import AllBreeds from './components/AllBreeds'
import MyImages from './components/MyImages';

class App extends Component{

render(){

    //console.log('state: ', this.state.breeds);

    return (
      <BrowserRouter>
        <div className="routercontainer">
        <Navbar />
          <Switch>
            <Route exact path="/" component={MyImages} />
            <Route path="/randombreed" component={About} />
            <Route path="/allbreeds" component={AllBreeds} />
          </Switch>

        </div>
      </BrowserRouter>


    );
  }
}

export default App;
