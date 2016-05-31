import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Imported Components
import Post from '../components/Post'

// Imported Actions
import * as actions from '../actions/index'

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          {this.props.posts.map((post, i) => <Post key={i} i={i} post={post} />)}
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
