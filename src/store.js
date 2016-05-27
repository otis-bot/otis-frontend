// store dependencies
import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './js/reducers/index';

// temporary import data
const posts = [
  {
    "name": "John Doe",
    "caption": "I wish I was a real person.",
    "id":"1161022966406956503"
  },
  {
    "name": "James Dean",
    "caption": "Singing is amazing.",
    "id":"1161022966406956504"
  }
]

// object for the initial data
const initialState = {
  posts
};

// for redux dev tools, thunk, and other enhancers
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// the redux store
const store = createStore(rootReducer, initialState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// for reducer hot reloading
if(module.hot) {
  module.hot.accept('./js/reducers/', () => {
    const nextRootReducer = require('./js/reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
