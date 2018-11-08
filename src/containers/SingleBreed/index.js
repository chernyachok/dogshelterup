import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteBreed} from '../../actions';
import SingleBreed from './SingleBreed';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.breed_id;
  return {
    breed: state.breedsReducer.breeds.find(item => item.id == id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteBreed: (idOfBreedTobeDeleted) => dispatch(deleteBreed(idOfBreedTobeDeleted))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBreed);
