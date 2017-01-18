const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const childWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
    return (
      <div>
      {childWithExtraProp}
      </div>

      );
  }
}

module.exports = ThemedDecorations;
