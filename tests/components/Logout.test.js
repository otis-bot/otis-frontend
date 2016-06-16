import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Logout from '../../src/js/components/Logout';

describe('Logout Component', () => {
  var logOutComponent;

  beforeEach(() => {
    logOutComponent = shallow(<Logout />);
  });

  it('Renders .slack-image', () => {
    expect(logOutComponent.find('.slack-image')).to.have.length(1);
  });

  it('Renders .sign-out', () => {
    expect(logOutComponent.find('.sign-out')).to.have.length(1);
  });

  it('Renders 1 span Tag', () => {
    expect(logOutComponent.find('span')).to.have.length(1);
  });

});
