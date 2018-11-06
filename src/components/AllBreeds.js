import React, {Component} from 'react';

import MyImagesWithoutForm from './MyImagesWithoutForm';
import ApiClient from '../services/ApiClient';
import {lorem} from '../RandomData/LoremIpsum'
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
    const [first, ...rest] = this.state.randomImgs;
    return (
      <div>
        <div className="randomOneImg"><img src={this.state.randomImgs[0]} heigth="250" width="250"/><br/>{lorem }</div>
        <MyImagesWithoutForm/>
        <Footer imgs={rest}/>
      </div>
    )
  }

  handleFetch = async () => {
    let currentBreeds = this.state.breeds;
    let data =  await ApiClient.get(`https://dog.ceo/api/breeds/image/random/5`);
    this.setState({randomImgs: data.message});
  }
}

export default AllBreeds;
