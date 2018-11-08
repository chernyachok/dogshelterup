import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Navbar from './components/Navbar';
import './style.css';
import AllBreeds from './containers/AllBreeds/index.js'
import MyImages from './components/MyImages';
import SingleBreed from './containers/SingleBreed/index.js';

class App extends Component{

render(){
    return (
      <BrowserRouter>
        <div className="routerContainer">
        <Navbar />
          <Switch>
            <Route exact path="/" component={MyImages} />
            <Route path="/allbreeds" component={AllBreeds} />
            <Route path="/:breed_id" component={SingleBreed} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
