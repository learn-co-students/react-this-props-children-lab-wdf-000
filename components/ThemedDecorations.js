const React = require('react');

class ThemedDecorations extends React.Component{

  render(){
    const setTheme = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return(
    <div className={this.props.theme}>
        {setTheme}
      </div>
    )
  }
}

module.exports = ThemedDecorations;
