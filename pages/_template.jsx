import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../css/markdown-styles'
import '../css/main.scss'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div className="container container-main">
        <Nav />
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  },
})
