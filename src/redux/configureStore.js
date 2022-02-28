import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer, { getRocketsFromAPI } from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(getRocketsFromAPI());
store.subscribe((state) => {
  console.log(state);
});
export default store;
