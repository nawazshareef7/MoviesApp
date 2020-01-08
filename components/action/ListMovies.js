import { GET_MOVIES_LIST } from '../type/Types';

export function setMovieList(movieList) {
  return {
    type: GET_MOVIES_LIST,
    payload: movieList,
  };
}

export function getMovieList() {
  return async (dispatch) => {
    try {
      const API_KEY = 'ce762116';
      const q = 'batman';

      URL=`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`;
      console.log("ÜRL="+URL)
     
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
        console.log("Dumm "+JSON.stringify(responseJson.Search) )
        dispatch(setMovieList(responseJson.Search))
      }  
      );
    } catch (error) {
      console.error(error);
    }
  };
}