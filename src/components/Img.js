import React from 'react';

const Img = props => {
  return(
    <div className="collection-item">
      <img className={props.className} src={props.src} heigth="250" width="250"/>
      <h3>{props.title}</h3>
    </div>
  )
}

export default Img;
