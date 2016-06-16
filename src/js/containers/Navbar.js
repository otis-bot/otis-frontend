import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../components/Login';
import Logout from '../components/Logout';

import actions from '../actions/index';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

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
          { this.props.auth.isAuthenticated === false ?
              <Login code={this.props.query.code} auth={this.props.auth} loginUser={this.props.loginUser} />
            :
              <Logout logoutUser={this.props.logoutUser} />
          }
        </nav>
      </div>
    );
  }
}

// Proptype Validation
Navbar.propTypes = {
  code: React.PropTypes.string,
  isAuthenticated: React.PropTypes.bool,
  query: React.PropTypes.object,
  auth: React.PropTypes.object,
  loginUser: React.PropTypes.func,
  logoutUser: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
