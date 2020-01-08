import { createStore, combineReducers } from 'redux';
import movieReducer from '../reducer/movieReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
    { 
        movieList: movieReducer,
        movieDetails: movieReducer 
    }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;