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
    const articles = this.getArticles();
    console.log(articles);
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