import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import posts from './posts';
import auth from './auth';

// combine reducers
const rootReducer = combineReducers({
  auth,
  posts,
  routing: routerReducer });

export default rootReducer;
