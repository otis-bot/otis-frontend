import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import store from '../../src/store';
import Home from '../../src/js/containers/Home';

describe('Home Container', () => {
  var homeContainer

  beforeEach(() => {
    homeContainer = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('Renders 4 div Tags, 2 from Home, 1 from 2 Post component', () => {
    expect(homeContainer.find('div')).to.have.length(4);
  });

});
