import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Post from '../../src/js/components/Post';

describe('Post Component', () => {
  var postComponent;
  
  const post = { name: "John Doe", comment: "I wish I was a real person.", id: 1 };

  beforeEach(() => {
    postComponent = shallow(<Post post={post}/>);
  });

  it('Renders name prop when given props', () => {
    expect(postComponent.find('.post-name').text()).to.equal('Name: John Doe');
  });

  it('Renders comment prop when given props', () => {
    expect(postComponent.find('.post-comment').text()).to.equal('Comment: I wish I was a real person.');
  });

  it('Renders 2 h4 Tags', () => {
    expect(postComponent.find('h4')).to.have.length(2);
  });

});
