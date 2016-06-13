import React from 'react';
import actions from '../actions/index';

export default class Login extends React.Component {

  componentDidMount() {
    if(this.props.code && !this.props.isAuthenticated) {
      this.props.loginUser(this.props.code);
    }
  }

  render() {
    return (
      <div>
        <span className="slack-button">
          <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=3123229467.43285485382"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
        </span>
      </div>
    );
  }
};

// Proptype Validation
Login.propTypes = {
  code: React.PropTypes.string
};
