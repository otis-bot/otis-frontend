import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import posts from '../../src/js/reducers/posts';

describe('posts Reducer', () => {

  it('Returns same state when given mock action', () => {
    expect(posts(1, 'MOCK_ACTION')).to.equal(1);
  });

});
