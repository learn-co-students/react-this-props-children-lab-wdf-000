import React from 'react';

class ThemedDecorations extends React.Component {
	render() {
			let innerElement = React.Children.map(this.props.children, (child) => {
				return React.cloneElement(child,{className: this.props.theme });
			});
		return (
			<div>
				{innerElement}
			</div>
		);
	}
}

module.exports = ThemedDecorations;