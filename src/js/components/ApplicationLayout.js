import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

export default class ApplicationLayout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home {...this.props} />
      </div>
    );
  }
};
