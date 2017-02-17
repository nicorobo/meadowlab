import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

export default class ArticleCard extends Component {
	render() {
		const { title, description, date, path } = this.props;
		return (
			<div className="article-card">
				<Link to={prefixLink(path)}>{title}</Link>
			</div>
		)
	}
}

ArticleCard.propTypes = {
	title:PropTypes.string.isRequired,
	description:PropTypes.string,
	date:PropTypes.number,
	path:PropTypes.string,
}