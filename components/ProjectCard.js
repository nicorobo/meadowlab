import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router';

export default class ProjectCard extends Component {
	render() {
		const { title, description, projectLink, pageLink, image } = this.props;
		return (
			<div className="project-card">
				<div className="project-card-section-img">
					<img src={image ? prefixLink('/assets/'+image) : 'https://unsplash.it/130/130?random'} alt="Icon for project" className="project-img"/>
				</div>
				<div className="project-card-section-main">
					<a href={projectLink || pageLink || '#'} className="project-title">{title}</a>
					<p className="project-description">{description || ''}</p>
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