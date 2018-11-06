import React, {Component} from 'react';
import {connect} from 'react-redux';

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
   randomImgs: PropTypes.array
 }

  componentDidMount(){
    this.handleFetch();
  }
  render(){
    const [first, ...rest] = this.props.breeds;
    const myImages = rest.length ? (
      <div>
        <div className="randomOneImg"><img src={first.src} heigth="250" width="250"/><br/>{lorem }</div>
        <MyImagesWithoutForm/>
        <Footer imgs={rest}/>
      </div>
    )
    :
    this.props.history.push('/')
    return (
      <div>
            {myImages}
      </div>
    )
  }

  handleFetch = async () => {
    let currentBreeds = this.state.breeds;
    let data =  await ApiClient.get(`https://dog.ceo/api/breeds/image/random/5`);
    this.setState({randomImgs: data.message});
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    breeds: state.breeds
  }
}

export default connect(mapStateToProps)(AllBreeds);
