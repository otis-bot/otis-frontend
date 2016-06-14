import React from 'react';
import { expect } from 'chai';
import { loadState, saveState } from '../../src/js/helpers/localStorage';

describe('localStorage Helper', () => {

  var query = {
    code: '1234567'
  };

  beforeEach(() => {
    saveState(query);
  });

  it('saveState method returns object as JSON string', () => {
    expect(localStorage.getItem('store')).to.equal(JSON.stringify(query));
  });

  it('loadState method returns value that was saved', () => {
    expect(loadState().code).to.equal(query.code);
  });

});
