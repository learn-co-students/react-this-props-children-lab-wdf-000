const React = require('react');

class ThemedDecorations extends React.Component {
  render(){
    let classyChildren = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      );
    });
    return (
      <div className = "someClass">
        {classyChildren}
      </div>
      );
    }
}

module.exports = ThemedDecorations
