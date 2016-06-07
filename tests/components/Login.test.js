import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from '../../src/js/components/Login';

describe('Login Component', () => {
  var loginComponent;

  beforeEach(() => {
    loginComponent = shallow(<Login />);
  });

  it('Renders 1 anchor Tags', () => {
    expect(loginComponent.find('a')).to.have.length(1);
  });

});
