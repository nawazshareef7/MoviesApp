import { GET_SEARCH_MOVIE } from '../type/Types';

export function setSearchMovieList(searchMovieList) {
  return {
    type: GET_SEARCH_MOVIE,
    payload: searchMovieList,
  };
}

export function getSearchMovieList(q) {
  return async (dispatch) => {
    try {
      const API_KEY = 'ce762116';
      URL=`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`;
      console.log("ÜRL="+URL)
      fetch(URL, {
        method: 'GET',
          headers: 
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      }
    }  
      )
      .then(response =>response.json()) 
      .then(responseJson => 
      {
        //console.warn("Dumm "+JSON.stringify(responseJson.Search) )
        dispatch(setSearchMovieList(responseJson.Search))
      }  
      );
    } catch (error) {
      console.error(error);
    }
  };
}