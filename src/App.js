import React, { Component } from 'react';
import Img from './components/Img'
import About from './components/About'
import Navbar from './components/Navbar'
import './style.css';
import data from './data'

import My_images from './components/My_images'
import {BrowserRouter, Route } from 'react-router-dom'

class App extends Component{

render(){

    //console.log('state: ', this.state.breeds);

    return (
      <BrowserRouter>
        <div className="routercontainer">
        <Navbar />

          <Route exact={true} path="/" component={My_images} />
          <Route path="/randombreed" component={About} />
        </div>
      </BrowserRouter>


    )
  }
}

export default App;
