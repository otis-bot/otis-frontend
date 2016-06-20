import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ApplicationLayout from '../../src/js/components/ApplicationLayout';

describe('ApplicationLayout Component', () => {
  var appLayoutComponent;

  const location = {
    search: "123123123123123"
  };

  beforeEach(() => {
    appLayoutComponent = shallow(<ApplicationLayout location={location}/>);
  });

  it('Renders div Tag', () => {
    expect(appLayoutComponent.find('div')).to.have.length(1);
  });
});
