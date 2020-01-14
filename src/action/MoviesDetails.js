import { GET_MOVIE_Deets} from '../type/Types';

export function setMovieDetails(movieDetails) {
  return {
    type: GET_MOVIE_Deets,
    payload: movieDetails,
  };
}

export function getMovieDetails(i) {
  return async (dispatch) => {
    try {
      const API_KEY = 'ce762116';
      URL=`http://www.omdbapi.com/?i=${i}&apikey=${API_KEY}`;
      console.log("ÜRL MOVIE DETAILS="+URL)
     
      fetch(URL, {
        method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      }
    }  
      )
      .then(response =>response.json()) 
      .then(responseJson => 
      {
        console.log("Movie details "+JSON.stringify(responseJson) )
        dispatch(setMovieDetails(responseJson))
      }  
      );
    } catch (error) {
      console.error(error);
    }
  };
}