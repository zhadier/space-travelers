import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer, { getRocketsFromAPI } from './rockets/rockets';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(getRocketsFromAPI());

export default store;
