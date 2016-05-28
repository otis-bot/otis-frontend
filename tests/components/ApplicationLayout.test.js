import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ApplicationLayout from '../../src/js/components/ApplicationLayout';

describe('ApplicationLayout Component', () => {
  var appLayoutComponent
  const posts = [
    { name: "John Doe", comment: "I wish I was a real person.", id: 1 },
    { name: "Roger Reynolds", comment: "This is a comment.", id: 2 }
  ];

  beforeEach(() => {
    appLayoutComponent = shallow(<ApplicationLayout {...posts} />);
  });

  it('Renders 1 div Tags', () => {
    expect(appLayoutComponent.find('div')).to.have.length(1);
  });
});
