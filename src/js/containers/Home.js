import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Imported Components
import Post from '../components/Post';

// Imported Actions
import * as actions from '../actions/index';

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};


class Home extends React.Component {
  render() {
    // Post Loop
    const posts = this.props.posts.map((post, index) => <Post key={index} index={index} post={post} />);

    return (
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          {posts}
        </div>
      </div>
    );
  }
}

// Proptype Validation
Home.propTypes = {
  posts: React.PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
