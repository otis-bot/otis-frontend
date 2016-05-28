import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Imported Components
import ApplicationLayout from '../components/ApplicationLayout';
import Navbar from '../components/Navbar';

// Imported Actions
import * as actions from '../actions/index'

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
      </div>
    );
  }
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default App;
