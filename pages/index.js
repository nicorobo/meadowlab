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
        <div className="page-header home-page-header">
          <h2 className="page-header-title">Hi, I'm <span>Nick</span>!</h2>
          <div className="intro">
            <p>I'm a software engineer from Austin that has a passion for creating modern web apps.</p>
            <p>When I'm not programming, you'll find me outdoors climbing, hiking, or playing my synthesizers.</p>
          </div>
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

// I'm a software engineer from Austin, TX, that has a passion for creating modern web apps.  When I'm not programming, you'll find me outdoors climbing or tickling my synthesizers.


