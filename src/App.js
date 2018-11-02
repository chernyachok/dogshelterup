import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

//import Img from './components/Img';
import About from './components/About';
import Navbar from './components/Navbar';
import './style.css';
import AllBreeds from './components/AllBreeds'
import My_images from './components/My_images';

class App extends Component{

render(){

    //console.log('state: ', this.state.breeds);

    return (
      <BrowserRouter>
        <div className="routercontainer">
        <Navbar />

          <Route exact={true} path="/" component={My_images} />
          <Route path="/randombreed" component={About} />
          <Route path="/allbreeds" component={AllBreeds} />
        </div>
      </BrowserRouter>


    );
  }
}

export default App;
