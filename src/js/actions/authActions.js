import axios from 'axios';
import urlFor from '../helpers/urlFor';

export const authSlack = (code) => {
  // API Route for Slack Authentication
  const url = urlFor('/auth/slack');
  // Post request to API server with Code data from Slack
  const result = axios.post(url, code);
  // Reducer takes over to resolve the token
  return {
    type: 'AUTH_USER',
    payload: result
  };
};
