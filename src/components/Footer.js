import React, {Component} from 'react';

const Footer = (props) => {

    return (
      <div className="footer">
        <h2>Look at our dogs</h2><br/>
        <form onSubmit={handleSubmit}>
          <input type="text" /><br/>
          <input type="submit" value='Find more'/>
        </form>
        {
          props.imgs.map((item,i)=>
          <img src={item.src} heigth="250" width="250"/>
          )
        }
      </div>
    )
}

const handleSubmit = (e) => {
  e.preventDefault();
}

export default Footer;
