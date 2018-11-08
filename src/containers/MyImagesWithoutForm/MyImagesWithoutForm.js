import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import Img from '../../components/Img';
import withSpinner from '../../components/withSpinner';
import ApiClient from '../../services/ApiClient'
import ContactForm from '../../components/ContactForm';


class MyImagesWithoutForm extends Component{

  componentDidMount(){
    this.props.receiveBreeds()
  }

  render(){
    const {breeds} = this.props;
    const currentBreeds = breeds.length
          ? (breeds.map((item,index) => {
            return <Link to={"/"+item.id}><Img key= {index} className="class1" src={item.src} title={`Dog  ${index}`}/></Link>
          }))
          : (
            <div className="center">No breeds in collection.</div>
          )
    return (
      <div id="container">
        <div className="imgsAndButton">
          <div id="my_images">
          {
            currentBreeds
          }
          </div>
          <div id="my_button" >
            <button className="seeMore" onClick={() => this.handleFetch(3)}>See more</button>
              <button className="seeMore" onClick={() => this.props.deleteAllBreeds()}>Remove all breeds</button>
          </div>
        </div>
      </div>
    )
  };

  handleFetch = (param) => {
   this.props.addBreed(`https://dog.ceo/api/breeds/image/random/3`);
 }
}

export default MyImagesWithoutForm;
