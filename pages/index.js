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
            {"name": "description", "content": "The home of software engineer and climber, Nick Roberts"},
            {"name": "keywords", "content": "meadowlab"},
            {"property": "og:title", "content": "meadowlab"},
            {"property": "og:url", "content": "http://meadowlab.io"},
            {"property": "og:description", "content": "The home of software engineer and climber, Nick Roberts"},
          ]}
        />
        <div className="page-header home-page-header">
          <h2 className="page-header-title">Hi, I'm Nick!</h2>
          <div className="intro">
            <p>I'm a software engineer from Austin that has a passion for creating modern web apps.</p>
            <p>When I'm not programming, you'll find me outdoors climbing, hiking, or playing my synthesizers. </p>
            <p className="intro-emojis"><img alt="Outdoor and Piano Emojis" src="./img/emojis.png"/></p>
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


