const initState ={
  breeds: []
}


const myReducer = (state = initState,action) => {
  console.log(action.payload);
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
  if(action.type === 'DELETE_ALL_BREEDS'){
    const breeds = [];
    return {
      ...state,
      breeds
    }
  }
  return state;
}

export default myReducer;
