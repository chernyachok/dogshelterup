import React, {Component} from 'react';

class Footer extends Component{
  constructor(props){
    super(props)

  }
  render(){
    return (
      <div className="footer">
        <h2>Look at our dogs</h2><br/>
        <form>
          <input type="text" /><br/>
          <button>Find more</button>
        </form>
        {
          this.props.imgs.map((item,i)=>
          <img src={item} heigth="250" width="250"/>
          )
        }
      </div>
    )
  }
}

export default Footer
