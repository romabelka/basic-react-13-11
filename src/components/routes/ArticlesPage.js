import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', this.props.match)
        return (
            <div>
                <ArticleList />
                <Route path={`${this.props.match.path}/:id`} children={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h1>Please select article</h1>
        return <Article id={match.params.id} isOpen key={match.params.id} />
    }
}

export default ArticlesPage