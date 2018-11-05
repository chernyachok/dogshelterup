import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Img from './Img'
import withSpinner from './withSpinner'
import Apiclient from '../services/ApiClient'
import ContactForm from './ContactForm'
import MyImagesWithoutForm from './MyImagesWithoutForm'
class MyImages extends Component{

  render(){
    return (
      <div className="formAndImages">
        <MyImagesWithoutForm/>
        <ContactForm/>
      </div>
    )
  }
}
export default withSpinner(MyImages);
