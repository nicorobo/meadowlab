import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router';

export default class ProjectCard extends Component {
	render() {
		const { title, description, projectLink, pageLink, image } = this.props;
		return (
			<div className="work-card">
				<div className="work-card-section-img">
					<div className="work-img"></div>
				</div>
				<div className="work-card-section-main">
					<a href={projectLink || pageLink || '#'} className="work-title">{title}</a>
					<p className="work-description">{description || ''}</p>
				</div>
			</div>
		)
	}
}

ProjectCard.propTypes = {
	title:PropTypes.string.isRequired,
	description:PropTypes.string,
	projectLink:PropTypes.string,
	pageLink:PropTypes.string,
	image:PropTypes.string
}