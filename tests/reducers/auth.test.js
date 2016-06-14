import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import auth from '../../src/js/reducers/auth';

describe('auth Reducer', () => {

  it('Handles default', () => {
    const initialState = {
      isFetching: false,
      isAuthenticated: false
    };
    const type = {};
    const newState = auth(initialState, type);
    expect(newState).to.eql({
      isFetching: false,
      isAuthenticated: false
    });
  });

  it('Handles LOGIN_REQUEST', () => {
    const initialState = {
      isFetching: false,
      isAuthenticated: false
    };
    const type = { type: 'LOGIN_REQUEST' };
    const newState = auth(initialState, type);
    expect(newState).to.eql({
      isFetching: true,
      isAuthenticated: false
    });
  });

  it('Handles LOGIN_SUCCESS', () => {
    const initialState = {
      isFetching: false,
      isAuthenticated: false
    };
    const type = {
      type: 'LOGIN_SUCCESS',
      user: 'user1'
     };
    const newState = auth(initialState, type);
    expect(newState).to.eql({
      authErrorMessage: "",
      isFetching: false,
      isAuthenticated: true,
      user: 'user1'
    });
  });

  it('Handles LOGIN_FAILURE', () => {
    const initialState = {
      isFetching: false,
      isAuthenticated: false
    };
    const type = { type: 'LOGIN_FAILURE' };
    const newState = auth(initialState, type);
    expect(newState).to.eql({
      authErrorMessage: undefined,
      isFetching: false,
      isAuthenticated: false
    });
  });

  it('Handles LOGOUT_SUCCESS', () => {
    const initialState = {
      isFetching: false,
      isAuthenticated: false
    };
    const type = { type: 'LOGOUT_SUCCESS' };
    const newState = auth(initialState, type);
    expect(newState).to.eql({
      isFetching: true,
      isAuthenticated: false
    });
  });

  it('Handles CLEAR_LOGIN_ERROR_MESSAGE', () => {
    const initialState = {
      isFetching: false,
      isAuthenticated: false
    };
    const type = { type: 'CLEAR_LOGIN_ERROR_MESSAGE' };
    const newState = auth(initialState, type);
    expect(newState).to.eql({
      isFetching: false,
      isAuthenticated: false,
      authErrorMessage: null
    });
  });

});
