import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = function(props) {
	return (
		<div>
			<div className="button-container">
				<a className="button" href={prefixLink('/resume.pdf')}>As PDF</a>
			</div>
			{props.children}
		</div>
	)
}