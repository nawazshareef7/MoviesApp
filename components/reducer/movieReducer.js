import { combineReducers } from 'redux';
import { GET_MOVIES_LIST, GET_MOVIE_Deets } from '../type/Types';
const initialState = {
  movieList: [],
  movieDetails:[],
};

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIES_LIST:
      return {
        ...state,
        movieList:action.payload
      };
      case GET_MOVIE_Deets:
      return {
        ...state,
        movieDetails:action.payload
      };

    default:
      return state;
  }
}
export default movieReducer;