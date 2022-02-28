import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer, { getBooksFromAPI } from './books/books';

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(getBooksFromAPI());

export default store;
