import React from 'react';
import slackImg from '../../img/slack.jpg';

export default class Login extends React.Component {

  componentWillMount() {
    if(this.props.code && !this.props.isAuthenticated) {
      this.props.loginUser(this.props.code);
    }
  }

  render() {
    return (
      <div>
        <a className="btn btn-primary slack-button" href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=3123229467.43285485382">
          <span className="sign-in">Sign In</span> <img className="slack-image" src={slackImg} />
        </a>
      </div>
    );
  }
}

// Proptype Validation
Login.propTypes = {
  code: React.PropTypes.string,
  isAuthenticated: React.PropTypes.bool,
  loginUser: React.PropTypes.func
};
