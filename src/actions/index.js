const ADD_BREED = 'ADD_BREED';
const DELETE_BREED = 'DELETE_BREED';
const RECEIVE_INITIAL_BREEDS = 'RECEIVE_INITIAL_BREEDS';

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

export const receiveInitialBreeds = (newBreeds) => {
  return {
    type: RECEIVE_INITIAL_BREEDS,
    payload: newBreeds
  }
}
