import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import ArticleCard from '../../components/ArticleCard.js';

export default class Articles extends React.Component {
  getArticles() {
    return this.props.route.pages.filter(p => p.data && p.data.type && p.data.type === 'article');
  }

  render () {
    const articles = this.getArticles().sort((a, b) => b.data.date - a.data.date);
    return (
      <div>
        <Helmet
          title="Articles"
          meta={[
            {"name": "description", "content": "Articles by meadowlab"},
            {"name": "keywords", "content": "blog, articles, tech, node, webdev, express, react"},
            {"name": "og:title", "content": "Articles by meadowlab"},
            {"name": "og:url", "content": "http://meadowlab.io/articles"},
            {"name": "og:description", "content": "Articles by meadowlab"},
          ]}
        />
        <div className="page-header">
          <h2 className="page-header-title">Articles</h2>
          {(articles.length < 1 ? <div className="page-header-description">Coming soon, stay tuned!</div> : null)}
        </div>
        <div className="article-gallery">
          {articles.map(a => <ArticleCard
            key={a.data.date}
            title={a.data.title}
            date={a.data.date}
            description={a.data.description}
            path={a.path}
          />)}
        </div>
      </div>
    )
  }
}