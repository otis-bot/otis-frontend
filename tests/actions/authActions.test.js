// import React from 'react';
// import { expect } from 'chai';
// import nock from 'nock';
// import { loginUser, logoutUser, clearLoginErrorMessage } from '../../src/js/actions/authActions';
// import urlFor from '../../src/js/helpers/urlFor';
//
// describe('authActions Action', () => {
//   afterEach(() => {
//     nock.cleanAll();
//   });
//
//   it('responds status 200 for loginUser', (done) => {
//     nock(urlFor())
//       .post('/api/v1/auth/slack', {
//         code: '123123123123123123123'
//       })
//       .reply(200, {
//         data: {
//           token: 'hasdhashdahsd'
//         }
//       });
//
//       var logUserIn = loginUser({ code: '123123123123123123123' });
//
//
//     done();
//   });
//
// });
