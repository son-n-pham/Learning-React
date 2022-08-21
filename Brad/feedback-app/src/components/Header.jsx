// PropTypes can be used to set the type of props of components
import React from 'react';
import PropTypes from 'prop-types';

// function Header(props) {
// 	return (
// 		<header>
// 			<div className="container">
// 				<h2>Feedback UI</h2>
// 				<h2>{props.text}</h2>
// 			</div>
// 		</header>
// 	)
// }

// Give the same result as above
// function Header({text, }) {
function Header({text, bgColor, textColor }) {
	// const headerStyle = {backgroundColor:'blue', color: 'red'};
	const headerStyle = {backgroundColor: bgColor, color: textColor};
	return (
		// inline style
		<header style={headerStyle}>
			<div className="container">
				<h2>{text}</h2>
			</div>
		</header>
	)
}

// defaultProps when props are empty
Header.defaultProps = {
  text: 'Feedback UI',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95',
};

// Declare type of props of header
Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string
}

export default Header