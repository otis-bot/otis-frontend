import React from 'react';
import { expect } from 'chai';
import nock from 'nock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../src/js/actions/authActions';

describe('auth Actions', () => {
  //Fake Store and Middleware
  const middlewares = [ thunk ];
  const mockStore = configureStore(middlewares);

  //Fake Data
  const code = '78921dh1212dh18hx';
  const auth_token = 'cg7q8w37gx8q7gd287G';
  const url = 'https://otis-api.herokuapp.com';

  afterEach(() => {
    nock.cleanAll();
  });

  //loginUser success
  it('loginUser expected actions are dispatched on success', () => {
    nock(url)
      .post('/api/v1/auth/slack', { code: code })
      .reply(200, { auth_token: auth_token });

    const expectedActions = [
      { type: 'LOGIN_REQUEST', isFetching: true, isAuthenticated: false, code: code },
      { type: 'LOGIN_SUCCESS', isFetching: false, isAuthenticated: true, user: auth_token }
    ];

    const store = mockStore();

    store.dispatch(actions.loginUser(code))

    setTimeout(() => {
      expect(store.getActions()).to.include(expectedActions);
    }, 1000);
  });

  //loginUser failure
  it('loginUser expected actions are dispatched on failure', () => {
    nock(url)
      .post('/api/v1/auth/slack', { code: code })
      .replyWithError('Error')

    const expectedActions = [
      { type: 'LOGIN_REQUEST', isFetching: true, isAuthenticated: false, code: code },
      { type: 'LOGIN_FAILURE', isFetching: false, isAuthenticated: false, err: 'Error' }
    ];

    const store = mockStore();

    store.dispatch(actions.loginUser(code))

    setTimeout(() => {
      expect(store.getActions()).to.include(expectedActions);
    }, 1000);
  });

});
