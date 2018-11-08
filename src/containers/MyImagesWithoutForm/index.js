import {connect} from 'react-redux';
import MyImagesWithoutForm from './MyImagesWithoutForm';
import { getAllBreeds } from '../../selectors';
import {addBreed, receiveInitialBreeds, deleteAllBreeds} from '../../actions';

const mapStateToProps = (state,ownProps) => {
  return {
    breeds: getAllBreeds(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addBreed: (url) => dispatch(addBreed(url)),
    deleteAllBreeds: () => dispatch(deleteAllBreeds()),
    receiveBreeds: () => dispatch(receiveInitialBreeds())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(MyImagesWithoutForm);
