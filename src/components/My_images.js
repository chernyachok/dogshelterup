import React, {Component} from 'react';
import Img from './Img'
import withSpinner from './withSpinner'
import Apiclient from '../services/ApiClient'
class My_images extends Component{


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
        <div className="myForm">
        <h2>Leave your rewiew</h2><br/><br/>
          <form>
            <input type="text" placeholder="Fullname" id="fullname"/><br/>
            <textarea value="Description" id="desc"></textarea><br/>
            <input type="submit" value="Submit" id="do_submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default withSpinner(My_images);
