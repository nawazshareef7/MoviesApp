import { GET_MOVIES_LIST, GET_MOVIE_Deets, GET_SEARCH_MOVIE } from '../type/Types';

const initialState = {
  movieList: [],
  movieDetails:[],
  searchMovieList:[]
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

      case GET_SEARCH_MOVIE:
      return {
          ...state,
          searchMovieList:action.payload,
        };
    default:
      return state;
  }
}
export default movieReducer;