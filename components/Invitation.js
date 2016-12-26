// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');


class Invitation extends React.Component {
  render() {
    return (
      <div className="invitation">
        <h1>You've been invited!</h1>
        <h2>{this.props.children}</h2>
      </div>
    )
  }
}



module.exports = Invitation;
