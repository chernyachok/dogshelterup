import React, {Component} from 'react';
import Img from './Img'
import withSpinner from './withSpinner'
import Apiclient from '../services/ApiClient'
import ContactForm from './ContactForm'
import MyImagesWithoutForm from './MyImagesWithoutForm'
class My_images extends Component{

/*
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


  handleFetch = (param) => {
    //console.log('---',param);
    this.setState({
      downloading: true
    })
    let currentBreeds = this.state.breeds;
    Apiclient.get(`https://dog.ceo/api/breeds/image/random/${param}`)
      .then((data) => {

        currentBreeds = currentBreeds.concat(data.message);

        //console.log('CURENTBREDS', currentBreeds);
        this.setState({breeds: currentBreeds, downloading: false})
      });
  }

*/


  render(){
    return (
      <div className="formAndImages">
        <MyImagesWithoutForm/>
        <ContactForm/>
      </div>
    )
  }
}
export default withSpinner(My_images);
