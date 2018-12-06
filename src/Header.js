import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title }) => {
	return(
		<div className="header">
			<h1>{title}</h1>
			<p>Yew.</p>
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired
}

export default Header;