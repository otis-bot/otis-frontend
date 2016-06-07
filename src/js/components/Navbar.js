import React from 'react';
import Login from './Login'

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <span>
            <a href="javascript:void(0);">
              Mikey
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
          <Login code={this.props.code} />
        </nav>
      </div>
    );
  }
}
