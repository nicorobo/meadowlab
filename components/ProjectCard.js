import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

export default class ProjectCard extends Component {
	render() {
		const { title, description, projectLink, pageLink, gitLink, icon } = this.props;
		return (
			<div className="project-card">
				<div className="project-card-section-img">
					<a href={projectLink || pageLink || '#'} target="_blank">
						{icon}
					</a>
				</div>
				<div className="project-card-section-main">
					<a className="project-title" href={projectLink || pageLink || '#'} target="_blank">{title}</a>
					<p className="project-description">{description || ''}</p>
					<div className="project-card-footer">
						{[
							(gitLink ? <a className="project-card-footer-link" href={gitLink} target="_blank">Github</a> : null),
							(pageLink ? <Link className="project-card-footer-link" to={prefixLink(pageLink)}>Article</Link> : null)
						]}
					</div>
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
	gitLink:PropTypes.string,
	icon:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	])
}