import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navbar from '../../src/js/components/Navbar';

describe('Navbar Component', () => {

  it('Renders 3 anchor Tags', () => {
    const navbarComponent = shallow(<Navbar />);
    expect(navbarComponent.find('a')).to.have.length(3);
  });

});
