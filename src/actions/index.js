import ApiClient from '../services/ApiClient';
import {
  ADD_BREED,
  DELETE_BREED,
  DELETE_ALL_BREEDS,
  RECEIVE_INITIAL_BREEDS
} from './types';

export const addBreed = (url) => {
  return {
    type: ADD_BREED,
    payload: ApiClient.get(url)
  }
}

export const deleteBreed = (id) => {
  return {
    type: DELETE_BREED,
    payload: id
  }
}

export const deleteAllBreeds = () => {
  return {
    type: DELETE_ALL_BREEDS,
    payload: null
  }
}

export const receiveInitialBreeds = () => {
    // fetch('https://dog.ceo/api/breeds/image/random/3')
    //   .then(res => res.json())
    //     .then(data => {
    //       const breeds = [];
    //       data.message.forEach((item, index) => breeds.push({id: Math.floor(Math.random()*1000), src: data.message[index]}))
    //       dispatch(addBreed(breeds));
    //     })
    return {
      type: RECEIVE_INITIAL_BREEDS,
      payload: ApiClient.get('https://dog.ceo/api/breeds/image/random/3')
    }
}
