export default function auth(
  state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('idToken') ? true : false
  }, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        authErrorMessage: '',
        user: action.user
      };
    }
    case 'LOGIN_FAILURE': {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        authErrorMessage: action.message
      };
    }
    case 'LOGOUT_SUCCESS': {
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    }
    case 'CLEAR_LOGIN_ERROR_MESSAGE': {
      return {
        ...state,
        authErrorMessage: null
      };
    }
    default: {
      return state;
    }
  }
}
