import {
  ADD_BREED,
  DELETE_BREED,
  DELETE_ALL_BREEDS,
  RECEIVE_INITIAL_BREEDS
} from '../actions/types';

const initState ={
  isLoading: false,
  breeds: []
}


const breedsReducer = (state = initState,action) => {
  //console.log(action.payload);
  if(action.type === `${ADD_BREED}_PENDING`){
    const breeds = state.breeds.concat(action.payload)
    return {//all initState object
      ...state,
      isLoading: true
    }
  }
  if(action.type === `${ADD_BREED}_FULFILLED`){
    const { payload } = action
    let breeds =[];
    payload.message.forEach((dog, index) => {
      const id = Math.floor(Math.random()*1000);
      breeds.push({id, src: payload.message[index]})
    });
    breeds = state.breeds.concat(breeds)
    return {//append
      ...state,
      isLoading: false,
      breeds
    }
  }
  if(action.type === `${ADD_BREED}_REJECTED`){
    console.log('rejected');
  }
  if(action.type === DELETE_BREED){
    const breeds = state.breeds.filter(item => item.id != action.payload);
    return {
      ...state,
      breeds
    }
  }
  if(action.type === DELETE_ALL_BREEDS){
    const breeds = [];
    return {
      ...state,
      breeds
    }
  }
  if(action.type === `${RECEIVE_INITIAL_BREEDS}_PENDING`){
    return {
      ...state,
      isLoading: true
    }
  }
  if(action.type === `${RECEIVE_INITIAL_BREEDS}_FULFILLED`){
    const breeds = [];
    action.payload.message.forEach((item, index) => breeds.push({id: Math.floor(Math.random()*1000), src: action.payload.message[index]}))
    return {
      ...state,
      isLoading: false,
      breeds
    }
  }
  if(action.type === `${RECEIVE_INITIAL_BREEDS}_REJECTED`){
    console.log('rejected...');
  }
  return state;
}

export default breedsReducer;
