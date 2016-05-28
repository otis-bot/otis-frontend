import React from 'react';
import Post from './Post'

export default class Home extends React.Component {
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
