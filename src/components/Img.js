import React from 'react';

const Img = props=>{
  return(
    <div>
      <a href={props.url} ><img className={props.className} src={props.imgSrc} heigth="250" width="250"/></a>
      <h3>{props.title}</h3>
    </div>
  )
}

export default Img
