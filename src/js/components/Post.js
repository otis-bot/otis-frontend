import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
      <div>
        This Is A Post
        {this.props.name}: {this.props.comment}
      </div>
    );
  }
};
