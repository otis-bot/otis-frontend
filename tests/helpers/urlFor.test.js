import React from 'react';
import { expect } from 'chai';
import urlFor from '../../src/js/helpers/urlFor';

describe('urlFor Helper', () => {

  it('urlFor concats and returns value properly', () => {
    expect(urlFor('/thisEndPoint')).to.equal('http://otis-api.herokuapp.com/thisEndPoint');
  });

});
