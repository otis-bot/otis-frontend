import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default col-xs-12" role="navigation">
          <span className="nav-logo">
            <a href="#">
              Otis
            </a>
          </span>
          <span className="slack-button">
            {this.props.code}
            <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=3123229467.43285485382"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
          </span>
        </nav>
      </div>
    );
  }
}
