import React, {Component} from 'react';

class SingleBreed extends Component{
  render(){
    const {breed} = this.props;
    const breedToBeRendered = breed ? (
      <div>
        <img src={breed.src} width="250" height="250"/>
        <button className="btn btn-grey" onClick={this.deleteBreed}>Delete breed</button>
      </div>
    )
    : (
      <div className="center">Loading...</div>
    )
    return (
      <div className="collection-item">{breedToBeRendered}</div>
    )
  }
  deleteBreed = () => {
    this.props.deleteBreed(this.props.breed.id);
    this.props.history.push('/');
  }
}

export default SingleBreed;
