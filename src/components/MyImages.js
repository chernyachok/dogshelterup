import React, {Component} from 'react';
import withSpinner from './withSpinner';
import ContactForm from './ContactForm';
import MyImagesWithoutForm from '../containers/MyImagesWithoutForm';
class MyImages extends Component{

  render(){
    return (
      <div className="formAndImages">
        <MyImagesWithoutForm/>
        <ContactForm/>
      </div>
    );
  }
}
export default withSpinner(MyImages);
