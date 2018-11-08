import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllBreeds } from '../../selectors';
import AllBreeds from './AllBreeds';

const mapStateToProps = (state, ownProps) => {
  return {
    breeds: getAllBreeds(state)
  }
}

export default connect(mapStateToProps)(AllBreeds);
