// Import Project Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS/SCSS
import './css/application.scss';

// Import Components for Routing
import App from './js/containers/App';
import Welcome from './js/components/Welcome';
import NotFound from './js/components/NotFound'

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router, document.getElementById('app')
);
