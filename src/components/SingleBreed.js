import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteBreed} from '../actions';

class SingleBreed extends Component{
  render(){
    let {breed} = this.props;
    breed = breed ? (
      <div>
        <img src={breed.src} width="250" height="250"/>
        <button className="btn btn-grey" onClick={this.deleteBreed}>Delete breed</button>
      </div>
    )
    :
    (
      <div className="center">Loading...</div>
    )
    return (
      <div className="collection-item">{breed}</div>
    )
  }
  deleteBreed = () => {
    this.props.deleteBreed(this.props.breed.id);
    this.props.history.push('/');
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.breed_id;
  return {
    breed: state.breeds.find(item => item.id == id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteBreed: (idOfBreedTobeDeleted) => dispatch(deleteBreed(idOfBreedTobeDeleted))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBreed);
