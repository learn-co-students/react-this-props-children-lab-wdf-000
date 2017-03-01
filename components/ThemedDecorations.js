import ReactDOM from 'react-dom';
const React = require('react');


class ThemedDecorations extends React.Component {
  render() {
    const newProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: 'heaven'
      })
    })
    return (
      <div>
        {newProp}
      </div>
    )
  }
}



module.exports = ThemedDecorations;
