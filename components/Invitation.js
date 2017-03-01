import ReactDOM from 'react-dom';
const React = require('react');


class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You have been Invited!</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}



module.exports = Invitation;
