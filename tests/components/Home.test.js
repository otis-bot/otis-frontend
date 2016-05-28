import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from '../../src/js/components/Home';

describe('Home Component', () => {
  var homeComponent
  const posts = [
    { name: "John Doe", comment: "I wish I was a real person.", id: 1 },
    { name: "Roger Reynolds", comment: "This is a comment.", id: 2 }
  ];

  beforeEach(() => {
    homeComponent = shallow(<Home posts={posts}/>);
  });

  it('Renders 2 div Tags', () => {
    expect(homeComponent.find('div')).to.have.length(2);
  });

});
