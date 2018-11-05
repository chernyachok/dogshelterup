import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Navbar from './components/Navbar';
import './style.css';
import AllBreeds from './components/AllBreeds'
import MyImages from './components/MyImages';

class App extends Component{

render(){
    return (
      <BrowserRouter>
        <div className="routercontainer">
        <Navbar />
          <Switch>
            <Route exact path="/" component={MyImages} />
            <Route path="/allbreeds" component={AllBreeds} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
