const auth = (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_USER': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default auth;
