// store dependencies
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import throttle from 'lodash/throttle';

// import the root reducer
import rootReducer from './js/reducers/index';

// Localstorage methods
import { loadState, saveState } from './js/helpers/localStorage';

// temporary import data
const posts = [
  {
    'name': 'John Doe',
    'comment': 'I wish I was a real person.',
    'id':'1'
  },
  {
    'name': 'James Dean',
    'comment': 'Singing is amazing.',
    'id':'2'
  }
];

const configureStore = () => {

  const enhancers = compose(
    /* eslint-disable */
    window.devToolsExtension ? window.devToolsExtension() : f => f
    /* eslint-enable */
  );

  const reduxRouterMiddleware = routerMiddleware(browserHistory);

  // Middleware Location
  let createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    reduxRouterMiddleware
  )(createStore);

  // Mix the initialState with Dummy Data
  const initialState = {
    ...loadState(),
    posts
  };

  // Store
  const store = createStoreWithMiddleware(rootReducer, initialState, enhancers);

  // Listen for changes in the store, throttle save every minute
  store.subscribe(throttle(() => {
    saveState({
      posts: store.getState().posts,
      auth: store.getState().auth
    });
  },1000));

  // for reducer hot reloading
  if(module.hot) {
    module.hot.accept('./js/reducers/', () => {
      const nextRootReducer = require('./js/reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};


export default configureStore;
