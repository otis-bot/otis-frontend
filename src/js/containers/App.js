import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Imported Components
import ApplicationLayout from '../components/ApplicationLayout'

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
        <ApplicationLayout {...this.props} />
      </div>
    );
  }
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default App;
