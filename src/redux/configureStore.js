import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer, { getRocketsFromAPI } from './rockets/rockets';
import missionsReducer, { fetchMissionsFromAPI } from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
  rocketsReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(getRocketsFromAPI());
store.dispatch(fetchMissionsFromAPI());

export default store;
