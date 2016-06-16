import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from '../../src/js/components/Login';

describe('Login Component', () => {
  var loginComponent;

  beforeEach(() => {
    loginComponent = shallow(<Login />);
  });

  it('Renders .slack-image', () => {
    expect(loginComponent.find('.slack-image')).to.have.length(1);
  });

  it('Renders .sign-in', () => {
    expect(loginComponent.find('.sign-in')).to.have.length(1);
  });

  it('Renders 1 span Tag', () => {
    expect(loginComponent.find('span')).to.have.length(1);
  });

});
