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
          {!this.props.isAuthenticated &&
            <Login
              code={this.props.query.code}
              auth={this.props.auth}
              loginUser={this.props.loginUser}
            />
          }
          {this.props.isAuthenticated &&
            <Logout onLogoutClick={() => dispatch(this.props.logoutUser())} />
          }
        </nav>
      </div>
    );
  }
}

// Proptype Validation
Navbar.propTypes = {
  code: React.PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
