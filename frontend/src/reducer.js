import { SET_USER, FETCH_ALL_JOBS,  CREATE_JOBS } from "./actionTypes";

export const initialState = {
  user: null,
  posts: []
}

const reducer = (state,action) =>{
  switch(action.type){
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    case FETCH_ALL_JOBS:
      return {
        ...state,
       posts: action.payload
      }
       
    case CREATE_JOBS:
      return {
        ...state,
       posts: action.payload
      }  
      default:
        return state; 
  }
}

export default reducer;