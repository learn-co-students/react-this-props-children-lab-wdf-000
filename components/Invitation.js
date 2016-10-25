const React = require('react')
const ReactDOM = require('react-dom')

class Invitation extends React.Component {
  render() {
    return(
      <div>
        <h1>You have been invited!</h1>
        <div>
          {this.props.children}
        </div>
      </div>
      
    )
  }
}