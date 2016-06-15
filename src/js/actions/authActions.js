import axios from 'axios';
import {push} from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import urlFor from '../helpers/urlFor';

const requestLogout = () => ({
  type: 'LOGOUT_REQUEST',
  isFetching: true,
  isAuthenticated: true
});

const receiveLogout = () => ({
  type: 'LOGOUT_SUCCESS',
  isFetching: false,
  isAuthenticated: false
});

// Logs the user out
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem('idToken');
  localStorage.removeItem('store');
  dispatch(receiveLogout());
  dispatch(push('/'));
};

const requestLogin = (code) => ({
  type: 'LOGIN_REQUEST',
  isFetching: true,
  isAuthenticated: false,
  code
});

const receiveLogin = (token) => ({
  type: 'LOGIN_SUCCESS',
  isFetching: false,
  isAuthenticated: true,
  user: jwtDecode(token)
});

const loginError = (err) => ({
  type: 'LOGIN_FAILURE',
  isFetching: false,
  isAuthenticated: false,
  err
});

export const loginUser = (code) => (dispatch) => {
  // API Route for Slack Authentication
  const url = urlFor('/api/v1/auth/slack');
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(code));

  // Post request with api url and code from slack
  axios.post(url, { code })
    .then(
      (res) => {
        if(res.data.auth_token) {
          console.log(res);
          localStorage.setItem('idToken', res.data.auth_token);
          // Dispatch the success action
          dispatch(receiveLogin(res.data.auth_token));
          dispatch(push('/'));
        } else {
          dispatch(loginError(res));
        }
      })
    .catch(
      (err) => {
        dispatch(loginError(err));
        /* eslint-disable no-console */
        console.log(err);
        /* eslint-enable no-console */
      });
};

export const clearLoginErrorMessage = () => ({
  type: 'CLEAR_LOGIN_ERROR_MESSAGE'
});
