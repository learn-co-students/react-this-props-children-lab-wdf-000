const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const ChildrenWithProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      });
    });
    return (
      <p>{ChildrenWithProp}</p>
    );
  }
}
module.exports = ThemedDecorations
