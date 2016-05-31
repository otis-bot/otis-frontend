import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
      <div>
        <h4 className="post-name">Name: {this.props.post.name}</h4>
        <h4 className="post-comment">Comment: {this.props.post.comment}</h4>
      </div>
    );
  }
}

// Proptype Validation
Post.propTypes = {
  post: React.PropTypes.string
};
