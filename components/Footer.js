import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router';

export default class Footer extends Component {
	render() {
		return (
			<footer className="site-footer">
				<p>
					crafted with <span className="footer-heart">&hearts;</span> by <Link to={prefixLink('/')} className="footer-brand">meadow<span className="footer-brand-emphasis">lab</span></Link>
				</p>
			</footer>
		)
	}
}