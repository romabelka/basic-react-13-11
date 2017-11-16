import React, {Component} from 'react'
import Article from './Article'

export default class ArticleList extends Component {
    render() {
        const articleElements = this.props.articles.map(article => <li key = {article.id}>
            <Article article = {article}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}