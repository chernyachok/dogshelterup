import React, {Component} from 'react';
import {connect} from 'react-redux';

import MyImagesWithoutForm from './MyImagesWithoutForm';
import ApiClient from '../services/ApiClient';
import {lorem} from '../RandomData/LoremIpsum'
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import { getAllBreeds } from '../selectors';

//console.log(lorem);
class AllBreeds extends Component{

  static propTypes = {
   randomImgs: PropTypes.array
  };

  render(){
    const [first, ...rest] = this.props.breeds;
    if(!rest.length)
      return this.props.history.push('/');
    const myImages =(
      <div>
        <div className="randomOneImg"><img src={first.src} heigth="250" width="250"/><br/>{lorem }</div>
        <MyImagesWithoutForm/>
        <Footer imgs={rest}/>
      </div>
    )
    
    return (
      <div>
            {myImages}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    breeds: getAllBreeds(state)
  }
}

export default connect(mapStateToProps)(AllBreeds);
