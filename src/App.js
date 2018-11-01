import React, { Component } from 'react';
import Img from './components/Img'
import './style.css';
import data from './data'
import Apiclient from './services/ApiClient'


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      downloading: false
    };
  }

  componentDidMount() {
    this.handleFetch(3);
  }
/*fetch('https://dog.ceo/api/breeds/image/random/3',{
  method: 'post',
  body: {},
  headers:{
    'Content-Type': 'application/json'
  }
})*/


handleFetch = (param) => {
  console.log('---',param);
  this.setState({
    downloading: true
  })

  Apiclient.get(`https://dog.ceo/api/breeds/image/random/${param}`)
    .then((data) => {
      this.setState({breeds: data.message, downloading: false})
    });
}

render(){

    console.log('state: ', this.state.breeds);

    return (
      <div id="container">
        <div className="imgsAndButton">
          <div id="my_images">
          {
            this.state.downloading ?
              <div className="my_images">Is downloading...</div>
              :
              this.state.breeds.map((item,index) => {
                return <Img key= {index} className="class1" imgSrc={item} url={item} title={`title ${index}`}/>
              })
          }
          </div>
          <div id="my_button" >
            <button className="seeMore" onClick={() => this.handleFetch(3)} >See more</button>
          </div>
        </div>
        <div className="myForm">
        <h2>Leave your rewiew</h2><br/><br/>
          <form>
            <input type="text" placeholder="Fullname" id="fullname"/><br/>
            <textarea value="Description" id="desc"></textarea><br/>
            <input type="submit" value="Submit" id="do_submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
