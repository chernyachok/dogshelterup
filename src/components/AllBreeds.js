import React, {Component} from 'react';

import MyImagesWithoutForm from './MyImagesWithoutForm';
import ApiClient from '../services/ApiClient';
import {lorem} from './LoremIpsum'
import Footer from './Footer'
import PropTypes from 'prop-types';

//console.log(lorem);
class AllBreeds extends Component{
  constructor(props){
    super(props);
    this.state = {
      randomImgs : []
    }
  }
  static propTypes = {
   randomImgs: PropTypes.string
 }

  componentDidMount(){
    this.handleFetch();
  }
  render(){
    return (
      <div>
        <div className="randomOneImg"><img src={this.state.randomImgs[0]} heigth="250" width="250"/><br/>{lorem }</div>
        <MyImagesWithoutForm/>
        <Footer imgs={this.state.randomImgs.slice(1)}/>
      </div>
    )
  }

  handleFetch = ()=>{
    ApiClient.get(`https://dog.ceo/api/breeds/image/random/5`)
      .then((data) => {
      //  console.log('DATA ONE', data);
        this.setState({
          randomImgs: data.message
        })
      });
  }
}

export default AllBreeds
