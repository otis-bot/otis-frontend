import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Welcome from '../../src/js/components/Welcome';

describe('Welcome Component', () => {
  var welcomeComponent

  beforeEach(() => {
    welcomeComponent = shallow(<Welcome />);
  })

  it('Renders Mikey Welcomes You! in a h1 tag', () => {
    expect(welcomeComponent.find('h1').text()).to.equal('Mikey Welcomes You!');
  });

  it('Renders Use the latest web development technologies. in a h2 tag', () => {
    expect(welcomeComponent.find('h2').text()).to.equal('Use the latest web development technologies.');
  });
});
