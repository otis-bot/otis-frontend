import React from 'react';
import slackImg from '../../img/slack.jpg';

export default class Logout extends React.Component {
  render() {
    return (
      <div>
        <a className="btn btn-danger slack-button" onClick={() => this.props.logoutUser()}>
          <span className="sign-out">Sign Out</span> <img className="slack-image" src={slackImg} />
        </a>
      </div>
    );
  }
}

// Proptype Validation
Logout.propTypes = {
  logoutUser: React.PropTypes.func
};
