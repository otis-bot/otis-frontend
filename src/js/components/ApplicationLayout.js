import React from 'react';
import Navbar from './Navbar';

export default class ApplicationLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <Navbar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

// Proptype Validation
ApplicationLayout.propTypes = {
  children: React.PropTypes.node
};
