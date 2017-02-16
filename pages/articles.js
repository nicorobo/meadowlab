import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Articles extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title="Articles"
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <div className="page-header">
          <h2 className="page-header-title">Articles</h2>
          <div className="page-header-description">Coming soon, stay tuned!</div>
        </div>
      </div>
    )
  }
}
