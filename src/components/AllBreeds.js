import React, {Component} from 'react';

import MyImagesWithoutForm from './MyImagesWithoutForm';
import ApiClient from '../services/ApiClient';
import {lorem} from './LoremIpsum'
import Footer from './Footer'

console.log(lorem);
class AllBreeds extends Component{
  constructor(props){
    super(props);
    this.state = {
      randomOneImg : ''
    }
  }

  componentDidMount(){
    this.handleFetch();
  }
  render(){
    return (
      <div>
        <div className="randomOneImg"><img src={this.state.randomOneImg} heigth="250" width="250"/><br/>{lorem }</div>
        <MyImagesWithoutForm/>
        <Footer/>
      </div>
    )
  }

  handleFetch = ()=>{
    ApiClient.get(`https://dog.ceo/api/breeds/image/random`)
      .then((data) => {
      //  console.log('DATA ONE', data);
        this.setState({
          randomOneImg: data.message
        })
      });
  }
}

export default AllBreeds
