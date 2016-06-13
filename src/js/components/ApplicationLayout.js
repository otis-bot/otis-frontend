import React from 'react';
import Navbar from '../containers/Navbar';

export default class ApplicationLayout extends React.Component {

  render() {
    return (
      <div className="main-container">
        <Navbar query={this.props.location.query}/>
        {this.props.children}
      </div>
    );
  }
}

// Proptype Validation
ApplicationLayout.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object
};
