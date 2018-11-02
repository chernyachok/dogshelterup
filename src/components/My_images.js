import React, {Component} from 'react';
import Img from './Img'
import withSpinner from './withSpinner'
import Apiclient from '../services/ApiClient'
import ContactForm from './ContactForm'
import MyImagesWithoutForm from './MyImagesWithoutForm'
class My_images extends Component{

  render(){
    return (
      <div className="formAndImages">
        <MyImagesWithoutForm/>
        <ContactForm/>
      </div>
    )
  }
}
export default withSpinner(My_images);
