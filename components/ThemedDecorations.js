const React = require('react')
const ReactDOM = require('react-dom')

class ThemedDecorations extends React.Component {
  render() {
    const themedChildren = React.Children.map(this.props.children, child => {
      React.cloneElement(child, {className: this.prop.theme})
    })

    return(<div>{themedChildren}</div>)
  }
}

module.exports = ThemedDecorations