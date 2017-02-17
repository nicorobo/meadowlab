import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import moment from 'moment';

export default class ArticleCard extends Component {
	render() {
		const { title, description, date, path } = this.props;
		return (
			<div className="article-card">
				<div className="article-card-header">
					<Link className="article-title" to={prefixLink(path)}>{title}</Link>
				</div>
				<div className="article-card-body">
					<p className="article-description">{description}</p>
				</div>
				<div className="article-card-footer">
					<div className="article-date">{moment(date).format('MMMM DD, YYYY')}</div>
				</div>
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