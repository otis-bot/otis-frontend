import axios from 'axios';
import urlFor from '../helpers/urlFor';

export authSlack = (code) => {
  const url = urlFor('/#'); //Need API URL Route

  const result = axios.post(url, code);

  return {
    type: 'SENT_CODE',
    payload: result
  };
};
