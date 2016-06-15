import React from 'react';
import { expect } from 'chai';
import nock from 'nock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../src/js/actions/authActions';
import urlFor from '../../src/js/helpers/urlFor';

describe('auth Actions', () => {
  const middlewares = [thunk]; // middleware `redux-thunk`
  const mockStore = configureStore(middlewares);
  const code = { code: '123123123123123123123' };
  const url = urlFor();
  const dummyData = { token: '123123123123' } ;

  afterEach(() => {
    nock.cleanAll();
  });

  //loginUser
  it('loginUser expected actions are dispatched on success', () => {
    nock(url)
      .post('/api/v1/auth/slack')
      .reply(200, dummyData);

    const expectedActions = [
      { type: actions.LOGIN_REQUEST, isFetching: true, isAuthenticated: false, code },
      { type: actions.LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, user: undefined }
    ];

    const store = mockStore({});

    return store.dispatch(actions.loginUser(code))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });


  // it('loginUser expected actions are dispatched on failure', (done) => {
  //   nock(urlFor())
  //     .post('/api/v1/auth/slack', code)
  //     .reply(404)
  //
  //   const expectedActions = [
  //     { type: 'LOGIN_REQUEST', body: { isFetching: true, isAuthenticated: false, code } },
  //     { type: 'LOGIN_FAILURE', body: { isFetching: false, isAuthenticated: false } }
  //   ];
  //
  //   const store = mockStore({ isFetching: false, isAuthenticated: false }, expectedActions, done());
  //   store.dispatch(actions.loginUser());
  //
  // });

});
