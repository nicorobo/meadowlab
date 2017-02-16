import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Projects extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title="Projects"
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <div className="page-header">
          <h2 className="page-header-title">Projects</h2>
          <div className="page-header-description">These are some of my past and ongoing projects.</div>
        </div>
      </div>
    )
  }
}
