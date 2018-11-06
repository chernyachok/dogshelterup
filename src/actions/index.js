const ADD_BREED = 'ADD_BREED';
const DELETE_BREED = 'DELETE_BREED';
const DELETE_ALL_BREEDS = 'DELETE_ALL_BREEDS';
//const RECEIVE_INITIAL_BREEDS = 'RECEIVE_INITIAL_BREEDS';

export const addBreed = (newBreed) => {
  return {
    type: ADD_BREED,
    payload: newBreed
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

export const receiveInitialBreeds = (newBreeds) => {
  return (dispatch, getState) => {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(res => res.json())
        .then(data => {
          const breeds = [];
          data.message.forEach((item, index) => breeds.push({id: Math.floor(Math.random()*1000), src: data.message[index]}))
          dispatch(addBreed(breeds));
        })
  }
}
