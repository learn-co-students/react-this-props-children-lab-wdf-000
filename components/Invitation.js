import React from 'react';
import ReactDOM from 'react-dom';

class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        <p>People Invited</p>
        <ul>
          <li>{this.props.children}</li>
        </ul>
      </div>
    )

  }
}

module.exports = Invitation;
