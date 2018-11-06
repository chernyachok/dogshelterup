import React, {Component} from 'react';
import Img from './Img';
import withSpinner from './withSpinner';
import ApiClient from '../services/ApiClient'
import ContactForm from './ContactForm';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addBreed, receiveInitialBreeds, deleteAllBreeds} from '../actions';

class MyImagesWithoutForm extends Component{

  componentDidMount(){
    this.props.receiveBreeds()
  }

  render(){
    const {breeds} = this.props;
    const currentBreeds = breeds.length
          ?
          (
            breeds.map((item,index) => {
            return <Link to={"/"+item.id}><Img key= {index} className="class1" src={item.src} title={`Dog  ${index}`}/></Link>
          })
          )
          :
          (
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
  }

  handleFetch = async (param) => {
   const {breeds} = this.props;
   const newBreeds = await ApiClient.get(`https://dog.ceo/api/breeds/image/random/${param}`);
   let newBreedsObj =[];
   newBreeds.message.forEach((dog, index) => {
     const id = Math.floor(Math.random()*1000);
     newBreedsObj.push({id, src:newBreeds.message[index]})
   });
   this.props.addBreed(newBreedsObj);
 }
}

const mapStateToProps = (state,ownProps) => {
  return {
    breeds: state.breeds
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addBreed: (newBreed) => dispatch(addBreed(newBreed)),
    deleteAllBreeds: () => dispatch(deleteAllBreeds()),
    receiveBreeds: (newBreeds) => dispatch(receiveInitialBreeds(newBreeds))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(MyImagesWithoutForm);
