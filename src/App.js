// Import Project Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS/SCSS
import './css/application.scss';
import './css/navbar.scss';

// Import Components for Routing
import ApplicationLayout from './js/components/ApplicationLayout';
import Home from './js/containers/Home';
import NotFound from './js/components/NotFound';

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

// Store
import configureStore from './store';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ApplicationLayout}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

ReactDOM.render(
  router, document.getElementById('app')
);
