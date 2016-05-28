import React from 'react';
import Navbar from './Navbar';

export default class ApplicationLayout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
      </div>
    );
  }
};
