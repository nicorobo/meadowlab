import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import PhotoCollage from '../components/PhotoCollage'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <div className="page-header">
          <h2 className="page-header-title">Hi, I'm Nick!</h2>
          <p className="intro">I'm a software developer that loves building web apps :3! </p>
        </div>
        <PhotoCollage photos={[
          './img/mexico.jpg',
          './img/halfdome.jpg',
          './img/meadow.jpg',
          './img/jtree.jpg',
          './img/shadow.jpg'
        ]} />
      </div>
    )
  }
}