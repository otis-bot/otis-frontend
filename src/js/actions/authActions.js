import axios from 'axios';
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

const loginError = (message) => ({
  type: 'LOGIN_FAILURE',
  isFetching: false,
  isAuthenticated: false,
  message
});

export const loginUser = (code) => (dispatch) => {
    // API Route for Slack Authentication
    const url = urlFor('/auth/slack');
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(code));

    axios({
      method: 'post',
      url: url,
      data: code
    }).then(
        (res) => {
          if (!res.data.success) {
            dispatch(loginError(res.data.message));
          } else {
            localStorage.setItem('idToken', res.data.token);
            // Dispatch the success action
            dispatch(receiveLogin(res.data.token));
          }
        })
      .catch(
        (err) => {
          console.log(err);
        });
};

export const clearLoginErrorMessage = () => ({
  type: 'CLEAR_LOGIN_ERROR_MESSAGE'
});
