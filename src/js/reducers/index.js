import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import posts from './posts';

// combine reducers
const rootReducer = combineReducers({posts, routing: routerReducer });

export default rootReducer;
