import React from 'react';

class ThemedDecorations extends React.Component {
  render(){
    const childrenz = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
      className: this.props.theme
    });
  })

    return (
      <div>
      {childrenz}
      </div>
    )
  }
}

module.exports = ThemedDecorations;






module.exports = ThemedDecorations
