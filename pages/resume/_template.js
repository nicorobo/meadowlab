import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'

module.exports = function(props) {
	return (
		<div>
	        <Helmet
	          title="Resume"
	          meta={[
	            {"name": "description", "content": "Nick Robert's Resume"},
	            {"name": "keywords", "content": "resume, experience, Nick Roberts"},
	            {"name": "og:title", "content": "Nick Robert's Resume"},
	            {"name": "og:url", "content": "http://meadowlab.io/resume"},
	            {"name": "og:description", "content": "Nick Robert's Resume"},
	          ]}
	        />
			<div className="button-container">
				<a className="button" href={prefixLink('/resume.pdf')}>As PDF</a>
			</div>
			{props.children}
		</div>
	)
}