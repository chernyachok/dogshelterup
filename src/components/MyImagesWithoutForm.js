import React, {Component} from 'react';
import Img from './Img'
import withSpinner from './withSpinner'
import ApiClient from '../services/ApiClient'
import ContactForm from './ContactForm'


class MyImagesWithoutForm extends Component{


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


   handleFetch = async (param) => {
    this.setState({
      downloading: true
    })
    let currentBreeds = this.state.breeds;
    let data =  await ApiClient.get(`https://dog.ceo/api/breeds/image/random/${param}`);
    currentBreeds = currentBreeds.concat(data.message);
    this.setState({breeds: currentBreeds, downloading: false});
  }




  render(){
    return (
      <div id="container">
        <div className="imgsAndButton">
          <div id="my_images">
          {
              this.state.breeds.map((item,index) => {
                return <Img key= {index} className="class1" imgSrc={item} url={item} title={`title ${index}`}/>;
              })
          }
          </div>
          <div id="my_button" >
            <button className="seeMore" onClick={() => this.handleFetch(3)}>See more</button>
          </div>
        </div>
      </div>
    )
  }
}
export default MyImagesWithoutForm
