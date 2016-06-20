import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import posts from '../../src/js/reducers/posts';

describe('posts Reducer', () => {

  it('Handles default', () => {
    expect(posts(1, {})).to.equal(1);
  });

});
