import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Contact extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title="Contact"
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <div className="page-header">
          <h2 className="page-header-title">Contact</h2>
          <div className="page-header-description">Let me know if there's anything I can help you with!</div>
        </div>
      </div>
    )
  }
}
