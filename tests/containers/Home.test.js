import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import Home from '../../src/js/containers/Home';

describe('Home Container', () => {
  var homeContainer

  const posts = [
    { name: "John Doe", comment: "I wish I was a real person.", id: 1 },
    { name: "Roger Reynolds", comment: "This is a comment.", id: 2 }
  ];

  const store = {
    posts: posts
  };

  beforeEach(() => {
    homeContainer = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('Renders 2 div Tags', () => {
    expect(homeContainer.find('div')).to.have.length(2);
  });

});
