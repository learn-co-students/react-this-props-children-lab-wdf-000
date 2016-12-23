import React from 'react';
import ReactDOM from 'react-dom';

class ThemedDecorations extends React.Component {
  render() {
    const allChildren = React.Children.map(this.props.children, child => {
      return (
        <p className="heaven">{child}</p>
      );
    });



    return (
      <div>
        {allChildren}
      </div>
    );

  }
}

module.exports = ThemedDecorations
