import React from 'react';

export default class Logout extends React.Component {
  render() {
    return (
      <div>
        <a className="btn btn-danger slack-button" onClick={() => this.props.logoutUser()}>
          Logout
        </a>
      </div>
    );
  }
}

// Proptype Validation
Logout.propTypes = {
  logoutUser: React.PropTypes.func
};
