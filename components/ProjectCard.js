import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router';

export default class ProjectCard extends Component {
	render() {
		let d;
		const { title, description, projectLink, pageLink, icon } = this.props;
		console.log(icon);
		if(typeof icon === 'string') d = <img src={icon ? prefixLink('/assets/'+icon) : 'https://unsplash.it/130/130?random'} alt="Icon for project" className="project-img"/>
		else d = icon;
		return (
			<div className="project-card">
				<div className="project-card-section-img">
					<a href={projectLink || pageLink || '#'}>
						{d}
					</a>
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
	icon:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	])
}