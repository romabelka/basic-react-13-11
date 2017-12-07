import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import Loader from './common/Loader'
import {connect} from 'react-redux'
import {filtratedArticlesSelector, articlesLoadingSelector} from '../selectors'
import {loadAllArticles} from '../AC'

class ArticleList extends Accordion {
    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        const {articles, loading} = this.props
        if (loading) return <Loader />
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => {
    return {
        articles: filtratedArticlesSelector(state),
        loading: articlesLoadingSelector(state)
    }
}, { loadAllArticles })(ArticleList)