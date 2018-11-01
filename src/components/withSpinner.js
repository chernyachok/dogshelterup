import React, { Component } from 'react';

const withSpinner = (WrappedComponent) => {
  return class WithSpinner extends Component {

    render() {
      const { isLoading } = this.props;

      return isLoading ?
        <div>Loading...</div>
        :
        <WrappedComponent {...this.props}/>
    }
  }
}


export default withSpinner;
