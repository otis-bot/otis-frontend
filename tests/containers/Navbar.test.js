import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';

//Store for testing
import configureStore from '../../src/store';

//Container for testing
import Navbar from '../../src/js/containers/Navbar';

describe('Navbar Container', () => {
  var store = configureStore();
  var query = {
    code: '1234567'
  };
  var navbarContainer;

  beforeEach(() => {
    navbarContainer = mount(
      <Provider store={store}>
        <Navbar query={query.code} />
      </Provider>
    );
  });

  it('Renders 2 anchor Tags', () => {
    expect(navbarContainer.find('a')).to.have.length(2);
  });

  it('Renders 2 div Tags', () => {
    expect(navbarContainer.find('div')).to.have.length(2);
  });

  it('Renders nav Tag', () => {
    expect(navbarContainer.find('nav')).to.have.length(1);
  });

  it('Renders 3 span Tags', () => {
    expect(navbarContainer.find('span')).to.have.length(3);
  });

});
