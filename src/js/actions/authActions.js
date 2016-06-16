import fetch from 'fetch-everywhere';
import {push} from 'react-router-redux';
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
  user: token
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
  fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code
    })
  }).then(
      (res) => {
        return res.json();
      }).then(
          (json) => {
            if (json.auth_token) {
              localStorage.setItem('idToken', json.auth_token);
              // Dispatch the success action
              dispatch(receiveLogin(json.auth_token));
              dispatch(push('/'));
            }
          }).catch(
              (err) => {
                dispatch(loginError(err));
                /* eslint-disable no-console */
                console.log('Error: ' + err);
                /* eslint-enable no-console */
              });
};

export const clearLoginErrorMessage = () => ({
  type: 'CLEAR_LOGIN_ERROR_MESSAGE'
});
