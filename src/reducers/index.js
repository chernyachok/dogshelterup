const initState ={
  breeds: [
    // {id: 1,src:"https://images.dog.ceo/breeds/rottweiler/n02106550_5752.jpg"},
    // {id: 2,src:"https://images.dog.ceo/breeds/mastiff-bull/n02108422_1096.jpg"},
    // {id: 3,src:"https://images.dog.ceo/breeds/eskimo/n02109961_853.jpg"}
  ]
}


const myReducer = (state = initState,action) => {
  if(action.type === 'ADD_BREED'){
    const breeds = state.breeds.concat(action.payload)
    return {
      ...state,
      breeds
    }
  }
  if(action.type === 'DELETE_BREED'){
    const breeds = state.breeds.filter(item => item.id != action.payload);
    return {
      ...state,
      breeds
    }
  }
  if(action.type === 'RECEIVE_INITIAL_BREEDS'){
    console.log('RECEIVE_INITIAL_BREEDS+++++++',action.payload);
  }
  return state;
}

export default myReducer;
