const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithClassNameProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>
        {childrenWithClassNameProps}
      </div>
    );
  }
}

module.exports = ThemedDecorations;
