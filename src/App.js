// Import Project Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS/SCSS
import './css/*';

// Import Components for Routing
import ApplicationLayout from './js/components/ApplicationLayout';
import Home from './js/containers/Home';
import NotFound from './js/components/NotFound';

// Router
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

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
