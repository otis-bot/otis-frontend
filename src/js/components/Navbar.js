import React from 'react';

export default class Navbar extends React.Component {
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <span>
            <a href="javascript:void(0);">
              Mikey {this.props.code}
            </a>
          </span>
          &nbsp;
          was built by
          &nbsp;
          <span>
            <a href="http://mikeysax.com">
              Mikeysax
            </a>
          </span>
          <span class="slack-button">
            <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=3123229467.43285485382"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
          </span>
        </nav>
      </div>
    );
  }
}
